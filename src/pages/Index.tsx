import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import BiomimicryCard from "@/components/biomimicry-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BiomimicryImageProvider from "@/components/biomimicry-image-provider";

const biomimicryExamples = [
  {
    id: 1,
    title: "Липучка Velcro",
    description: "Вдохновлением для изобретения липучки Velcro послужили колючки репейника, которые цепляются за шерсть животных и одежду человека. В 1941 году швейцарский инженер Жорж де Местраль, после охоты с собакой, заметил, как колючки репейника прилипли к его одежде и шерсти собаки. Исследуя их под микроскопом, он обнаружил крошечные крючки на поверхности колючек, что привело к созданию универсальной застежки, используемой сегодня повсеместно.",
    imageType: "velcro",
  },
  {
    id: 2,
    title: "Акульи плавники",
    description: "Структура кожи акулы вдохновила исследователей на создание материалов для снижения сопротивления воды и воздуха. Такие материалы используются в плавательных костюмах, которые позволяют спортсменам устанавливать новые рекорды, а также в авиационной и автомобильной промышленности. Дермальные зубчики на коже акулы создают микровихри, снижающие сопротивление воды до 8%, что значительно улучшает гидродинамику. Эта технология используется в покрытии самолетов и кораблей.",
    imageType: "shark",
  },
  {
    id: 3,
    title: "Лотос и самоочищение",
    description: "Листья лотоса имеют уникальную структуру поверхности, которая отталкивает воду и грязь, оставаясь чистой даже в мутной воде. Этот 'эффект лотоса' вдохновил создание самоочищающихся красок, тканей, стекол и других поверхностей. Микроскопические бугорки на поверхности листьев лотоса покрыты восковым слоем, что делает их сверхгидрофобными. Капли воды скатываются с поверхности, захватывая частицы грязи и пыли, обеспечивая естественный механизм самоочищения.",
    imageType: "lotus",
  },
  {
    id: 4,
    title: "Зимородок и Синкансен",
    description: "Японский скоростной поезд Синкансен столкнулся с проблемой громких звуковых волн при выходе из туннелей на высокой скорости. Инженер Эйдзи Наказу, увлекающийся наблюдением за птицами, обратил внимание на клюв зимородка, который позволяет птице погружаться в воду с минимальным всплеском. Перепроектировав носовую часть поезда по образцу клюва зимородка, инженеры не только решили проблему шума, но и сократили потребление энергии на 15% и увеличили скорость поезда на 10%.",
    imageType: "kingfisher",
  },
  {
    id: 5,
    title: "Термитники и экоархитектура",
    description: "Термитники представляют собой удивительные инженерные сооружения, поддерживающие постоянную внутреннюю температуру, несмотря на экстремальные внешние условия. Архитектор Мик Пирс использовал принципы пассивной вентиляции термитников при проектировании здания Eastgate Centre в Зимбабве. Это здание потребляет на 90% меньше энергии для охлаждения по сравнению с аналогичными зданиями и не требует традиционных систем кондиционирования воздуха даже в знойную африканскую жару.",
    imageType: "termite",
  },
  {
    id: 6,
    title: "Биомиметическая архитектура",
    description: "Современная архитектура все чаще обращается к природным формам и принципам. Знаменитое здание 'Гуркин' в Лондоне (архитектор Норман Фостер) вдохновлено морским огурцом и его способностью распределять нагрузку. Такая форма обеспечивает не только эстетическую привлекательность, но и структурную прочность, а также максимальное использование естественного освещения, что снижает энергопотребление здания. Эта архитектурная форма демонстрирует, как природные принципы могут быть применены в современном строительстве.",
    imageType: "architecture",
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
          <p className="text-lg text-muted-foreground max-w-3xl mb-4">
            Биомимикрия — это наука, изучающая лучшие идеи природы и применяющая их для решения человеческих задач. 
            Это инновационный подход, который ищет устойчивые решения путем подражания испытанным временем образцам и стратегиям природы.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Термин «биомимикрия» происходит от греческих слов «биос» (жизнь) и «мимезис» (подражание). В отличие от биоинженерии, 
            которая часто изменяет природные системы, биомимикрия изучает природные модели и затем имитирует или черпает вдохновение 
            из этих дизайнов и процессов для решения человеческих проблем.
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
            
            <h3 className="text-2xl font-bold font-nature text-nature-dark mt-8">Исторические корни</h3>
            <p className="text-muted-foreground">
              Хотя термин «биомимикрия» появился относительно недавно, люди черпали вдохновение из природы на протяжении тысячелетий. 
              От древних попыток летать с крыльями, подобными птичьим, до современных высокотехнологичных материалов, 
              вдохновленных структурой паутины, биомимикрия всегда играла важную роль в развитии человечества.
            </p>
            
            <h3 className="text-2xl font-bold font-nature text-nature-dark mt-8">Области применения</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">🏢</span>
                <span>Архитектура и строительство</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">💧</span>
                <span>Очистка воды и управление водными ресурсами</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">🤖</span>
                <span>Робототехника и искусственный интеллект</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">🩺</span>
                <span>Медицина и фармацевтика</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">🔋</span>
                <span>Энергетика и хранение энергии</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nature mt-1">🚗</span>
                <span>Транспорт и аэродинамика</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-lg overflow-hidden h-auto">
            <BiomimicryImageProvider 
              type="biomimicry" 
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center font-nature text-nature-dark mb-8">Примеры биомимикрии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biomimicryExamples.map(example => (
              <BiomimicryCard 
                key={example.id}
                title={example.title}
                description={example.description}
                imageType={example.imageType as any}
              />
            ))}
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center font-nature text-nature-dark mb-8">Будущее биомимикрии</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-nature/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold font-nature text-nature-dark mb-3">Устойчивое развитие</h3>
              <p className="text-muted-foreground">
                Биомимикрия играет ключевую роль в достижении целей устойчивого развития. Природные системы функционируют эффективно, 
                используя минимум энергии и не создавая отходов. Подражая этим принципам, мы можем создавать более экологичные 
                технологии, материалы и процессы, которые помогут решить глобальные проблемы, связанные с изменением климата и 
                истощением ресурсов.
              </p>
            </div>
            
            <div className="bg-nature/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold font-nature text-nature-dark mb-3">Циркулярная экономика</h3>
              <p className="text-muted-foreground">
                Природные системы циклично используют ресурсы: отходы одного организма становятся пищей для другого. 
                Применяя принципы биомимикрии, можно создать циркулярную экономику, где отходы перерабатываются в новые ресурсы, 
                уменьшая нагрузку на окружающую среду и создавая более устойчивую экономическую модель.
              </p>
            </div>
            
            <div className="bg-nature/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold font-nature text-nature-dark mb-3">Инновации в материаловедении</h3>
              <p className="text-muted-foreground">
                Природа создала удивительные материалы — от сверхпрочной паутины до самовосстанавливающейся кожи. 
                Исследования в области биомимикрии ведут к разработке новых материалов, которые могут быть прочнее, легче и 
                экологичнее существующих. Такие материалы могут произвести революцию в строительстве, транспорте, медицине и 
                многих других отраслях.
              </p>
            </div>
            
            <div className="bg-nature/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold font-nature text-nature-dark mb-3">Гармония с природой</h3>
              <p className="text-muted-foreground">
                В основе биомимикрии лежит глубокое уважение к природе и понимание того, что человечество является частью большой 
                экосистемы Земли. Развивая технологии, вдохновленные природой, мы можем найти способы жить в гармонии с окружающей 
                средой, а не в противоречии с ней. Это может привести к фундаментальным изменениям в нашем отношении к планете и 
                создать более устойчивое будущее для всех форм жизни.
              </p>
            </div>
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
