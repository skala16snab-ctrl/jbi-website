# Этап 1: Сборка приложения (Build)
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем production-версию
RUN npm run build

# Этап 2: Раздача статики через Nginx (Production)
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа в папку Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Если вы используете React Router с историей (History API), 
# нужно добавить базовый конфиг nginx для перенаправления всех запросов на index.html.
# Для простоты мы пока используем стандартный конфиг.

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
