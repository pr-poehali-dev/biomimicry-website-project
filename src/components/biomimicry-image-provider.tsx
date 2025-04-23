import React from 'react';

// Типы изображений для биомимикрии
export type BiomimicryImageType = 
  | 'velcro' 
  | 'shark' 
  | 'lotus' 
  | 'hero'
  | 'biomimicry'
  | 'kingfisher'
  | 'termite'
  | 'architecture';

// Интерфейс для изображений
interface BiomimicryImage {
  src: string;
  alt: string;
}

// Карта изображений (онлайн изображения)
const imageMap: Record<BiomimicryImageType, BiomimicryImage> = {
  velcro: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Velcro.jpg/1200px-Velcro.jpg',
    alt: 'Пример биомимикрии: Липучка Velcro, вдохновленная колючками репейника'
  },
  shark: {
    src: 'https://www.hakaimagazine.com/wp-content/uploads/header-shark-skin-denticles.jpg', 
    alt: 'Пример биомимикрии: Акульи плавники и их применение в технологиях'
  },
  lotus: {
    src: 'https://img.freepik.com/premium-photo/lotus-effect-water-drops-lotus-leaf_488220-3302.jpg',
    alt: 'Пример биомимикрии: Эффект лотоса в самоочищающихся поверхностях'
  },
  hero: {
    src: 'https://biomimicry.org/wp-content/uploads/2019/11/biomimicry-example-image-1024x683.jpg',
    alt: 'Природные решения как вдохновение для инноваций'
  },
  biomimicry: {
    src: 'https://miro.medium.com/v2/resize:fit:1400/1*QoqvIR15pZgcHW1gliGzdQ.jpeg',
    alt: 'Биомимикрия - наука, изучающая природные решения'
  },
  kingfisher: {
    src: 'https://www.asknature.org/wp-content/uploads/2016/08/118988924_41cffb7d27_o.jpg',
    alt: 'Зимородок и высокоскоростной поезд Синкансен'
  },
  termite: {
    src: 'https://www.asknature.org/wp-content/uploads/2016/09/1241695738_85a0bb0366_o-1.jpg',
    alt: 'Термитники и энергоэффективные здания'
  },
  architecture: {
    src: 'https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/ModernBiomimicryExamples3.1539270413.7472.jpg',
    alt: 'Биомиметическая архитектура'
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
