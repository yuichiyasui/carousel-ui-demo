import { forwardRef, ReactNode } from "react";

type CarouselCantainerProps = {
  className?: string;
  children: ReactNode;
};

const CarouselContaier = (props: CarouselCantainerProps) => {
  return (
    <div
      className={`embla__container${
        props.className ? ` ${props.className}` : ""
      }`}
    >
      {props.children}
    </div>
  );
};

type CarouselSlideProps = {
  className?: string;
  children: ReactNode;
};

const CarouselSlide = (props: CarouselSlideProps) => {
  return (
    <div
      className={`embla__slide${props.className ? ` ${props.className}` : ""}`}
    >
      {props.children}
    </div>
  );
};

type CarouselProps = {
  className?: string;
  children: ReactNode;
};

export const CarouselRoot = forwardRef<HTMLDivElement, CarouselProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className={`embla${props.className ? ` ${props.className}` : ""}`}
      >
        {props.children}
      </div>
    );
  },
);

type CarouselCompoundType = typeof CarouselRoot & {
  Container: typeof CarouselContaier;
  Slide: typeof CarouselSlide;
};

export const Carousel: CarouselCompoundType = Object.assign(CarouselRoot, {
  Container: CarouselContaier,
  Slide: CarouselSlide,
});
