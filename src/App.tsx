/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Globe, 
  ArrowRight, 
  ChevronDown,
  Layers,
  Wind
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass">
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-8 h-8 border-2 border-white rounded-full" />
        ))}
      </div>
      <span className="ml-4 text-xl font-bold tracking-widest uppercase">Audi</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
      <a href="#heritage" className="hover:opacity-100 transition-opacity">მემკვიდრეობა</a>
      <a href="#motorsport" className="hover:opacity-100 transition-opacity">ავტოსპორტი</a>
      <a href="#innovation" className="hover:opacity-100 transition-opacity">ინოვაცია</a>
      <a href="#design" className="hover:opacity-100 transition-opacity">დიზაინი</a>
      <a href="#sustainability" className="hover:opacity-100 transition-opacity">მდგრადობა</a>
      <a href="#models" className="hover:opacity-100 transition-opacity">მოდელები</a>
    </div>
    <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
      კონფიგურაცია
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1603584173870-7f3ca99a4741?auto=format&fit=crop&q=80&w=2000" 
        alt="Audi e-tron GT" 
        className="w-full h-full object-cover opacity-50"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
    </div>
    
    <div className="relative z-10 text-center px-4">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-60"
      >
        Vorsprung durch Technik
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 text-gradient uppercase"
      >
        მობილობის <br /> მომავალი
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="max-w-xl text-lg text-white/60 font-light leading-relaxed">
          გამოსცადეთ გერმანული ინჟინერიის მწვერვალი. იქ, სადაც სიზუსტე და სიმძლავრე წარმოების ყოველ დეტალში ერთიანდება.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-all flex items-center gap-2">
            წარმოების დათვალიერება <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
      <ChevronDown size={32} />
    </div>
  </section>
);

const Heritage = () => (
  <section id="heritage" className="py-32 px-8 max-w-7xl mx-auto border-b border-white/5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1">
        <div className="flex gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center text-[10px] font-bold opacity-40 hover:opacity-100 transition-opacity cursor-default"
            >
              {i === 1 && "AUDI"}
              {i === 2 && "DKW"}
              {i === 3 && "HORCH"}
              {i === 4 && "WANDERER"}
            </motion.div>
          ))}
        </div>
        <h2 className="text-5xl font-bold tracking-tight mb-8">ერთიანობის <span className="italic font-serif">მემკვიდრეობა</span></h2>
        <div className="space-y-6 text-white/60 text-lg leading-relaxed">
          <p>
            Audi-ს ისტორია <span className="text-white font-medium">1909</span> წელს დაიწყო, როდესაც გამჭრიახმა ინჟინერმა <span className="text-white font-medium">აუგუსტ ჰორხმა</span> ბრენდი დააარსა. სახელი "Audi" არის "Horch"-ის (რაც ნიშნავს "მოსმენას") ლათინური თარგმანი.
          </p>
          <p>
            ოთხი რგოლის სიმბოლური ლოგო <span className="text-white font-medium">1932</span> წელს შეიქმნა. ის განასახიერებს ოთხი მანამდე დამოუკიდებელი ავტომწარმოებლის გაერთიანებას: Audi, DKW, Horch და Wanderer.
          </p>
          <p>
            <span className="text-white font-medium">1980-იან წლებში</span> Audi-მ რევოლუცია მოახდინა ავტოინდუსტრიაში <span className="text-white font-medium">Quattro</span> სრულამძრავიანი სისტემის დანერგვით, რამაც ბრენდს მსოფლიო აღიარება და რალის ჩემპიონატებში დომინირება მოუტანა.
          </p>
          <p>
            დღეს Audi აგრძელებს ლიდერობას ციფრული ტექნოლოგიებისა და ელექტრომობილობის მიმართულებით, რაც დასტურდება მათი <span className="text-white font-medium">e-tron</span> სერიით.
          </p>
        </div>
      </div>
      <div className="order-1 lg:order-2 relative aspect-video rounded-3xl overflow-hidden glass">
        <img 
          src="https://images.unsplash.com/photo-1606148632363-06d3374a46a4?auto=format&fit=crop&q=80&w=1000" 
          alt="Classic Audi Heritage" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl font-bold tracking-tighter opacity-10">1909 — 2026</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 glass rounded-3xl flex flex-col gap-6"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl text-white">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
    <p className="text-white/50 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

const ProductionStats = () => (
  <section id="production" className="py-32 px-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block">წარმოების სრულყოფილება</span>
        <h2 className="text-5xl font-bold tracking-tight mb-8">სიზუსტე ყოველ <span className="italic font-serif">მილიმეტრში</span></h2>
        <p className="text-white/60 text-lg leading-relaxed mb-12">
          ჩვენი საწარმოო ობიექტები ინდუსტრიული ავტომატიზაციისა და ადამიანური ოსტატობის მწვერვალს წარმოადგენს. თითოეული ავტომობილი გადის ხარისხის მკაცრ შემოწმებას 3000-ზე მეტი მონაცემთა წერტილის მეშვეობით.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">99.8%</div>
            <div className="text-xs uppercase tracking-widest text-white/40">აწყობის სიზუსტე</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-xs uppercase tracking-widest text-white/40">მწვერვალზე მომუშავე</div>
          </div>
        </div>
      </div>
      <div className="relative aspect-square rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
          alt="Audi Production Line" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  </section>
);

const InnovationGrid = () => (
  <section id="innovation" className="py-32 px-8 bg-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold tracking-tight mb-4">ტექნოლოგიური საყრდენები</h2>
        <p className="text-white/40">ჩვენი საინჟინრო ფილოსოფიის საფუძველი.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Cpu} 
          title="AI-ზე დაფუძნებული ხარისხი" 
          description="ხელოვნური ინტელექტი რეალურ დროში აკონტროლებს ყოველ შედუღებასა და შეღებვას, რაც უზრუნველყოფს უნაკლო წარმოებას."
        />
        <FeatureCard 
          icon={Zap} 
          title="ელექტრო ევოლუცია" 
          description="სპეციალური საწარმოო ხაზები e-tron სერიისთვის, ოპტიმიზირებული მაღალი ძაბვის ბატარეების ინტეგრაციისთვის."
        />
        <FeatureCard 
          icon={ShieldCheck} 
          title="უსაფრთხოების სტანდარტები" 
          description="შესაბამისობაზე მეტი. ჩვენი შიდა უსაფრთხოების ნორმები 40%-ით აღემატება გლობალურ მოთხოვნებს."
        />
        <FeatureCard 
          icon={Layers} 
          title="სმარტ მასალები" 
          description="მსუბუქი ალუმინისა და ნახშირბადის ბოჭკოვანი კომპოზიტები, შექმნილი მაქსიმალური სტრუქტურული მთლიანობისთვის."
        />
        <FeatureCard 
          icon={Wind} 
          title="აეროდინამიკა" 
          description="აეროდინამიკური მილის ტესტირება პირდაპირ ინტეგრირებულია დიზაინიდან წარმოებამდე სამუშაო პროცესში."
        />
        <FeatureCard 
          icon={Globe} 
          title="გლობალური ქსელი" 
          description="სინქრონიზებული საწარმოო ქსელი კონტინენტებზე, ერთიანი სტანდარტებით."
        />
      </div>
    </div>
  </section>
);

const Motorsport = () => (
  <section id="motorsport" className="py-32 px-8 max-w-7xl mx-auto border-b border-white/5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative aspect-square rounded-3xl overflow-hidden glass">
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f339f2a6ec1?auto=format&fit=crop&q=80&w=1000" 
          alt="Audi Motorsport" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
          <div>
            <div className="text-4xl font-bold mb-2">13 გამარჯვება</div>
            <div className="text-white/60 uppercase tracking-widest text-xs">Le Mans 24 Hours</div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-bold tracking-tight mb-8">ტრასაზე გამოწრთობილი <span className="italic font-serif">ტექნოლოგია</span></h2>
        <div className="space-y-6 text-white/60 text-lg leading-relaxed">
          <p>
            ავტოსპორტი Audi-სთვის მხოლოდ შეჯიბრი არ არის — ეს არის ლაბორატორია, სადაც იქმნება მომავლის ტექნოლოგიები. ჩვენი წარმატება <span className="text-white font-medium">Le Mans</span>-ის 24-საათიან რბოლებში ამტკიცებს ჩვენს გამძლეობასა და ეფექტურობას.
          </p>
          <p>
            <span className="text-white font-medium">Audi Sport</span>-ის დანაყოფი მუდმივად აფართოებს შესაძლებლობების საზღვრებს, იქნება ეს ფორმულა E თუ მომავალი შესვლა <span className="text-white font-medium">Formula 1</span>-ში 2026 წელს.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold text-white mb-1">Quattro</div>
              <div className="text-sm">რალის ლეგენდა</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">TFSI & TDI</div>
              <div className="text-sm">ეფექტურობის რევოლუცია</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DesignTechnology = () => (
  <section id="design" className="py-32 px-8 bg-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-5xl font-bold tracking-tight mb-12">დიზაინი, რომელიც <span className="italic font-serif">გრძნობს</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 glass rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Virtual Cockpit</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                სრულად ციფრული 12.3-ინჩიანი მაღალი გარჩევადობის ეკრანი, რომელიც მძღოლს აწვდის ყველა საჭირო ინფორმაციას ინტუიციურად და სწრაფად.
              </p>
            </div>
            <div className="p-10 glass rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Matrix LED</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                ინტელექტუალური განათების სისტემა, რომელიც ავტომატურად ადაპტირდება გზის პირობებთან და უზრუნველყოფს მაქსიმალურ ხილვადობას სხვების დაბრმავების გარეშე.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-12 glass rounded-3xl border border-white/10">
          <h3 className="text-3xl font-bold mb-6">Vorsprung</h3>
          <p className="text-white/60 mb-8 italic">"პროგრესი ტექნოლოგიის მეშვეობით" — ეს არ არის მხოლოდ სლოგანი, ეს ჩვენი დნმ-ია.</p>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              აეროდინამიკური სრულყოფილება
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              პრემიუმ მასალები
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              ინტუიციური ინტერფეისი
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Sustainability = () => (
  <section id="sustainability" className="py-32 px-8 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold tracking-tight mb-4">Mission:Zero — მდგრადი მომავალი</h2>
      <p className="text-white/40 max-w-2xl mx-auto">ჩვენი მიზანია სრულად ნახშირბად-ნეიტრალური წარმოება 2050 წლისთვის.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 glass rounded-3xl border-l-4 border-emerald-500">
        <h4 className="text-xl font-bold mb-4">ნახშირბადის ნეიტრალიტეტი</h4>
        <p className="text-white/50 text-sm leading-relaxed">
          ბრიუსელისა და დიორსის ქარხნები უკვე სრულად ნახშირბად-ნეიტრალურია. ჩვენ ვიყენებთ განახლებად ენერგიას და ვამცირებთ ემისიებს ყოველ ეტაპზე.
        </p>
      </div>
      <div className="p-8 glass rounded-3xl border-l-4 border-blue-500">
        <h4 className="text-xl font-bold mb-4">წყლის რესურსების დაზოგვა</h4>
        <p className="text-white/50 text-sm leading-relaxed">
          დახურული ციკლის წყლის სისტემები საშუალებას გვაძლევს მინიმუმამდე დავიყვანოთ სუფთა წყლის მოხმარება წარმოების პროცესში.
        </p>
      </div>
      <div className="p-8 glass rounded-3xl border-l-4 border-amber-500">
        <h4 className="text-xl font-bold mb-4">რესურსების ეფექტურობა</h4>
        <p className="text-white/50 text-sm leading-relaxed">
          ალუმინის დახურული ციკლი (Aluminum Closed Loop) გვეხმარება წელიწადში 165,000 ტონაზე მეტი CO2-ის დაზოგვაში.
        </p>
      </div>
    </div>
  </section>
);

const Models = () => (
  <section id="models" className="py-32 px-8 bg-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">ფლაგმანური მოდელები</h2>
          <p className="text-white/40">ინჟინერიისა და დიზაინის სინთეზი.</p>
        </div>
        <button className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all">
          ყველა მოდელი
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b816?auto=format&fit=crop&q=80&w=1000" 
              alt="Audi RS e-tron GT" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Electric
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">RS e-tron GT</h3>
          <p className="text-white/40 text-sm italic">სუფთა ელექტრო ენერგია, შეუდარებელი დინამიკა.</p>
        </div>
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1621348335334-19256627038e?auto=format&fit=crop&q=80&w=1000" 
              alt="Audi RS6 Avant" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Performance Wagon
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Audi RS6 Avant</h3>
          <p className="text-white/40 text-sm italic">სიმძლავრისა და პრაქტიკულობის იდეალური ბალანსი.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-8 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-6 h-6 border border-white rounded-full" />
          ))}
        </div>
        <p className="text-xs text-white/30 uppercase tracking-widest">© 2026 Audi წარმოების გამოფენა. ყველა უფლება დაცულია.</p>
      </div>
      <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-white/40">
        <a href="#" className="hover:text-white transition-colors">კონფიდენციალურობა</a>
        <a href="#" className="hover:text-white transition-colors">სამართლებრივი</a>
        <a href="#" className="hover:text-white transition-colors">კონტაქტი</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Heritage />
      <Motorsport />
      <ProductionStats />
      <InnovationGrid />
      <DesignTechnology />
      <Sustainability />
      <Models />
      
      {/* Call to Action Section */}
      <section className="py-40 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000" 
            alt="Audi Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">მზად ხართ შემდეგი <span className="italic font-serif">თავისთვის?</span></h2>
          <p className="text-white/60 text-lg mb-12">
            შემოგვიერთდით ავტომობილების წარმოებაში შესაძლებლობების საზღვრების ხელახლა განსაზღვრაში.
          </p>
          <button className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
            დაგვიკავშირდით
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
