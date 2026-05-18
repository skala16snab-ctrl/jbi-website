import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import './Shipments.css';

const images = [
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/358_original.jpeg?1752518204",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/358_medium.jpeg?1752518204"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/357_original.jpeg?1752518201",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/357_medium.jpeg?1752518201"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/356_original.jpeg?1752518196",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/356_medium.jpeg?1752518196"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/355_original.jpeg?1752518173",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/355_medium.jpeg?1752518173"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/354_original.jpeg?1752518170",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/354_medium.jpeg?1752518170"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/352_original.jpeg?1752518154",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/352_medium.jpeg?1752518154"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/351_original.jpeg?1752518149",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/351_medium.jpeg?1752518149"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/350_original.jpeg?1752518146",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/350_medium.jpeg?1752518146"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/349_original.jpeg?1752518143",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/349_medium.jpeg?1752518143"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/348_original.jpeg?1752518126",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/348_medium.jpeg?1752518126"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/347_original.jpeg?1752518123",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/347_medium.jpeg?1752518123"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/346_original.jpeg?1752518120",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/346_medium.jpeg?1752518120"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/345_original.jpeg?1752518115",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/345_medium.jpeg?1752518115"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/344_original.jpeg?1752518111",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/344_medium.jpeg?1752518111"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/343_original.jpeg?1752518107",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/343_medium.jpeg?1752518107"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/342_original.jpeg?1752518101",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/342_medium.jpeg?1752518101"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/340_original.jpeg?1752518067",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/340_medium.jpeg?1752518067"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/339_original.jpeg?1752518063",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/339_medium.jpeg?1752518063"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/338_original.jpeg?1752518058",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/338_medium.jpeg?1752518058"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/337_original.jpeg?1752518053",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/337_medium.jpeg?1752518053"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/336_original.jpeg?1752518048",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/336_medium.jpeg?1752518048"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/335_original.jpeg?1752518044",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/335_medium.jpeg?1752518044"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/334_original.jpeg?1752518039",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/334_medium.jpeg?1752518039"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/333_original.jpeg?1752518034",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/333_medium.jpeg?1752518034"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/332_original.jpeg?1752517923",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/332_medium.jpeg?1752517923"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/331_original.jpeg?1752517916",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/331_medium.jpeg?1752517916"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/330_original.jpeg?1752517909",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/330_medium.jpeg?1752517909"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/329_original.jpeg?1752517902",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/329_medium.jpeg?1752517902"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/327_original.jpeg?1752517887",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/327_medium.jpeg?1752517887"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/326_original.jpeg?1752517882",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/326_medium.jpeg?1752517882"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/325_original.jpeg?1752517877",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/325_medium.jpeg?1752517877"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/324_original.jpeg?1752517856",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/324_medium.jpeg?1752517856"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/323_original.jpeg?1752517848",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/323_medium.jpeg?1752517848"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/322_original.jpeg?1752517842",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/322_medium.jpeg?1752517842"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/321_original.jpeg?1752517838",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/321_medium.jpeg?1752517838"
  },
  {
    "original": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/320_original.jpeg?1752517834",
    "thumbnail": "https://st33.stpulscen.ru/images/apress/companies/pages/images/002/391/320_medium.jpeg?1752517834"
  }
];

export default function Shipments() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="container page-content shipments-page">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <ChevronRight size={14} className="mx-1" />
        <span>Наши отгрузки</span>
      </div>

      <h1 className="page-title">Наши отгрузки</h1>

      <div className="shipments-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="shipment-item" onClick={() => openModal(idx)}>
            <img src={img.thumbnail} alt={`Отгрузка ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="shipment-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <button className="modal-nav prev" onClick={showPrev}>
              <ChevronLeft size={36} />
            </button>
            <img src={images[selectedImageIndex].original} alt={`Отгрузка ${selectedImageIndex + 1}`} className="modal-image" />
            <button className="modal-nav next" onClick={showNext}>
              <ChevronRightIcon size={36} />
            </button>
            <div className="modal-counter">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
