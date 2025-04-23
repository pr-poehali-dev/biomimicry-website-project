import React from 'react';

// Типы изображений для биомимикрии
export type BiomimicryImageType = 
  | 'velcro' 
  | 'shark' 
  | 'lotus' 
  | 'hero'
  | 'biomimicry';

// Интерфейс для изображений
interface BiomimicryImage {
  src: string;
  alt: string;
}

// Карта изображений (все локальные)
const imageMap: Record<BiomimicryImageType, BiomimicryImage> = {
  velcro: {
    src: '/images/velcro-biomimicry.jpg',
    alt: 'Пример биомимикрии: Липучка Velcro, вдохновленная колючками репейника'
  },
  shark: {
    src: '/images/shark-biomimicry.jpg', 
    alt: 'Пример биомимикрии: Акульи плавники и их применение в технологиях'
  },
  lotus: {
    src: '/images/lotus-biomimicry.jpg',
    alt: 'Пример биомимикрии: Эффект лотоса в самоочищающихся поверхностях'
  },
  hero: {
    src: '/images/biomimicry-hero.jpg',
    alt: 'Природные решения как вдохновение для инноваций'
  },
  biomimicry: {
    src: '/images/biomimicry-example.jpg',
    alt: 'Биомимикрия - наука, изучающая природные решения'
  }
};

// Интерфейс для компонента провайдера изображений
interface BiomimicryImageProviderProps {
  type: BiomimicryImageType;
  className?: string;
}

const BiomimicryImageProvider: React.FC<BiomimicryImageProviderProps> = ({ 
  type, 
  className = '' 
}) => {
  const image = imageMap[type];
  
  return (
    <img 
      src={image.src} 
      alt={image.alt} 
      className={className}
      loading="lazy"
    />
  );
};

export default BiomimicryImageProvider;
