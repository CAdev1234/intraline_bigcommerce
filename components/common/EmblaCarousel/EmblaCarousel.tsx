import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import {PrevButton, DotButton, NextButton} from './EmblaCarouselBtn'

interface EmblaProps {
    
}

const EmblaCarousel: React.FC<EmblaProps> = () => {
    const [viewportRef, embla] = useEmblaCarousel({ 
        skipSnaps: false,
        loop: true,
        slidesToScroll: 1,
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        // setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);


    return (
        <div>
          <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
              <div className="embla__container">
                {[0,1,2,3,4,5].map((item, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__inner">
                      <img
                        className="embla__slide__img" src="/assets/img/product1.png" alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </div>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      );
}

export default EmblaCarousel