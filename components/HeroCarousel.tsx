// components/HeroCarousel.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

type Slide = {
  mobileSrc: string
  desktopSrc: string
  alt: string
}

type HeroCarouselProps = {
  slides: Slide[]
  className?: string
}

export default function HeroCarousel({ slides, className }: HeroCarouselProps) {
  const wrapperClass = className ? `${className} w-full h-full` : 'w-full h-full'

  return (
    <div className={wrapperClass}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <picture>
              <source media="(min-width: 768px)" srcSet={slide.desktopSrc} />
              <img
                src={slide.mobileSrc}
                alt={slide.alt}
                className="object-cover w-full h-full"
              />
            </picture>
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
