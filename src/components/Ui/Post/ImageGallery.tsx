"use client";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  images: string[];
}

const ImageGallery = ({ images }: IProps) => {
  return (
    <LightGallery
      elementClassNames={`grid mt-2 place-items-center grid-cols-2 ${
        images.length === 1 ? "grid-cols-1" : "grid-cols-2"
      }`}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {images.map((image, index) => (
        <Link
          className={`w-full ${
            images.length === 3 && index === 0 ? "col-span-2" : "col-span-1"
          }`}
          href={image}
          key={index}
        >
          <Image
            className="h-[400px] w-full"
            src={image}
            height={500}
            width={500}
            alt="images "
          />
        </Link>
      ))}
    </LightGallery>
  );
};

export default ImageGallery;
