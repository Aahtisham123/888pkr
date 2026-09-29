import Image from "next/image";
import { article } from "@/content/article";
import { media } from "@/config/site";
import { ArticleSection } from "@/components/ArticleSection";
import { Carousel } from "@/components/Carousel";

export function Gallery() {
  const { gallery } = article;

  return (
    <ArticleSection id={gallery.id} heading={gallery.heading} className="gallery">
      <Carousel label={gallery.heading} className="gallery-carousel">
        <ul className="carousel-list">
          {media.gallery.map((img, i) => (
            <li
              key={img.src}
              className="carousel-slide"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${media.gallery.length}`}
            >
              <figure>
                <Image
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={img.alt}
                  loading="lazy"
                  sizes="(min-width: 1024px) 230px, (min-width: 640px) 34vw, 62vw"
                />
              </figure>
            </li>
          ))}
        </ul>
      </Carousel>
    </ArticleSection>
  );
}
