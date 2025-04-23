import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import BiomimicryCard from "@/components/biomimicry-card";
import { Button } from "@/components/ui/button";
import ImageLoader from "@/components/ui/image-loader";
import { Separator } from "@/components/ui/separator";
import BiomimicryImageProvider from "@/components/biomimicry-image-provider";

const biomimicryExamples = [
  {
    id: 1,
    title: "Липучка Velcro",
    description: "Вдохновлением для изобретения липучки Velcro послужили колючки репейника, которые цепляются за шерсть животных и одежду человека. В 1941 году швейцарский инженер Жорж де Местраль, после охоты с собакой, заметил, как колючки репейника прилипли к его одежде и шерсти собаки.",
    imageType: "velcro",
  },
  {
    id: 2,
    title: "Акульи плавники",
    description: "Структура кожи акулы вдохновила исследователей на создание материалов для снижения сопротивления воды и воздуха. Такие материалы используются в плавательных костюмах, которые позволяют спортсменам устанавливать новые рекорды, а также в авиационной и автомобильной промышленности.",
    imageType: "shark",
  },
  {
    id: 3,
    title: "Лотос и самоочищение",
    description: "Листья лотоса имеют уникальную структуру поверхности, которая отталкивает воду и грязь, оставаясь чистой даже в мутной воде. Этот 'эффект лотоса' вдохновил создание самоочищающихся красок, тканей, стекол и других поверхностей.",
    imageType: "lotus",
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection 
        title="Биомимикрия: Природа как источник идей"
        subtitle="Узнайте, как инженеры и ученые используют природные решения для решения технических задач"
        imageType="hero"
      />
      
      <section className="py-16 container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-nature text-nature-dark mb-4">Что такое биомимикрия?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Биомимикрия — это наука, изучающая лучшие идеи природы и применяющая их для решения человеческих задач. 
            Это инновационный подход, который ищет устойчивые решения путем подражания испытанным временем образцам и стратегиям природы.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-nature text-nature-dark">Основные принципы</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">🌱</span>
                <span>Природа как модель: изучение моделей природы и подражание им</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">⚖️</span>
                <span>Природа как мера: использование экологических стандартов для оценки устойчивости инноваций</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">🔄</span>
                <span>Природа как наставник: рассмотрение природы не как источника ресурсов, а как источника знаний</span>
              </li>
            </ul>
            <Button className="mt-4 bg-nature hover:bg-nature-dark text-white">Узнать больше</Button>
          </div>
          
          <div className="rounded-lg overflow-hidden h-64 md:h-auto">
            <ImageLoader 
              src="/images/biomimicry-example.jpg" 
              alt="Биомимикрия" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center font-nature text-nature-dark mb-8">Примеры из природы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {biomimicryExamples.map(example => (
              <BiomimicryCard 
                key={example.id}
                title={example.title}
                description={example.description}
                imageType={example.imageType}
              />
            ))}
          </div>
        </div>
      </section>
      
      <footer className="bg-nature-dark text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold font-nature">БиоМимикрия</h3>
              <p className="text-sm text-white/70">© 2023 Все права защищены</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white">О нас</a>
              <a href="#" className="text-white/80 hover:text-white">Контакты</a>
              <a href="#" className="text-white/80 hover:text-white">Исследования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
