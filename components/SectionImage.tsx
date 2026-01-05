'use client'

interface SectionImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export default function SectionImage({ src, alt, width = 600, height = 450 }: SectionImageProps) {
  return (
    <div className="w-full lg:w-[450px] lg:flex-shrink-0 order-first lg:order-none">
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          loading="lazy"
          width={width}
          height={height}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    </div>
  )
}

