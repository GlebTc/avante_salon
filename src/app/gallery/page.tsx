'use client';
import Image from 'next/image';

const Gallery = () => {
  const componentName = 'GALLERY';
  const imageSrcBase = "/images/gallery/gallery_";
  const imageCount = 12; // Update to match the number of images in your gallery
  const images = Array.from({ length: imageCount }, (_, index) => `${imageSrcBase}${String(index + 1).padStart(3, '0')}.webp`);

  return (
    <div className={`${componentName}_MAIN_CONTAINER h-full p-4 max-w-7xl mx-auto pt-[var(--navbar-h)]`}>
    <h2
      className={`${componentName}_HEADER_CONTAINER font-bold text-3xl text-center m-4 `}
    >
        Gallery
      </h2>
      <div className={`${componentName}_GALLERY_CONTAINER grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4`}>
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full max-w-[300px] aspect-square mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
