"use client"

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/wan-bg.jpg",
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
    },
    {
      id: 2,
      image: "/vr.jpg",
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description: "We're making the weights for our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea image.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      image: "/people.jpg",
      title: "FLUX 2.0",
      subtitle: "Advanced Generation",
      description: "Experience the next generation of AI image creation with enhanced quality and speed.",
      buttonText: "Try FLUX 2.0",
    },
    {
      id: 4,
      image: "/flux-bg.jpg",
      title: "Pro Tools",
      subtitle: "Professional Suite",
      description: "Access professional-grade tools for advanced image manipulation and generation workflows.",
      buttonText: "Get Pro",
    },
    {
      id: 5,
      image: "/wan-bg.jpg",
      title: "API Access",
      subtitle: "Developer Tools",
      description: "Integrate our powerful AI models into your applications with our comprehensive API.",
      buttonText: "View Docs",
    },
 {
      id: 6,
      image: "/vr.jpg",
      title: "Future Tech",
      subtitle: "FLUX.2 Krea",
      description: "We're making the weights for our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea image.",
      buttonText: "Read More",
    },
    {
      id: 7,
      image: "/catalog_header.jpg",
      title: "Green Tech",
      subtitle: "Green Krea",
      description: "We're making the weights for our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea image.",
      buttonText: "Read More",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Get the next slide for preview
  const getNextSlide = () => {
    return slides[(currentSlide + 1) % slides.length];
  };

  const CardComponent = ({ slide }: { slide: typeof slides[number] }) => (
    <div className="relative rounded-xl overflow-hidden h-[600px] w-full">
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Centered title */}
      <h2 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white tracking-tight">
        {slide.title}
      </h2>

      {/* Bottom left content */}
      <div className="absolute bottom-6 left-6 text-white max-w-sm">
        <h4 className="text-xl font-semibold mb-2">
          {slide.subtitle}
        </h4>
        <p className="text-xs font-light leading-relaxed text-white/90 w-[85%]">
          {slide.description}
        </p>
      </div>

      {/* Bottom right button */}
      <div className="absolute bottom-6 right-6">
        <button className="bg-white text-black text-xs font-medium px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
          {slide.buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Main carousel container */}
      <div className="px-6 py-6">
        <div className="flex gap-6 overflow-hidden">
          {/* Main card - takes up about 70% of the width */}
          <div className="w-[70%] flex-shrink-0">
            <CardComponent slide={slides[currentSlide]} />
          </div>
          
          {/* Partial next card - takes up remaining space and overflows */}
          <div className="w-[45%] flex-shrink-0">
            <CardComponent slide={getNextSlide()} />
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
        {/* Additional inactive dots to match the original design */}
        {[...Array(3)].map((_, index) => (
          <button
            key={index + slides.length}
            className="w-2 h-2 rounded-full bg-gray-300"
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute right-16 bottom-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 bottom-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}