import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type CarouselCantainerProps = {
  className?: string;
  children: ReactNode;
};

const CarouselContaier = (props: CarouselCantainerProps) => {
  return (
    <div className={clsx("embla__container", props.className)}>
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
    <div className={clsx("embla__slide", props.className)}>
      {props.children}
    </div>
  );
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> & { className?: string };

const CarouselPrevButton = (props: ButtonProps) => {
  return <button type="button" title="previous" {...props} />;
};

const CarouselNextButton = (props: ButtonProps) => {
  return <button type="button" title="next" {...props} />;
};

type CarouselViewportProps = {
  className?: string;
  children: ReactNode;
};

const CarouselViewport = forwardRef<HTMLDivElement, CarouselViewportProps>(
  (props, ref) => {
    return (
      <div ref={ref} className={clsx("embla__viewport", props.className)}>
        {props.children}
      </div>
    );
  },
);

type CarouselProps = {
  className?: string;
  children: ReactNode;
};

export const CarouselRoot = forwardRef<HTMLDivElement, CarouselProps>(
  (props, ref) => {
    return (
      <div ref={ref} className={clsx("embla", props.className)}>
        {props.children}
      </div>
    );
  },
);

type CarouselCompoundType = typeof CarouselRoot & {
  Container: typeof CarouselContaier;
  Slide: typeof CarouselSlide;
  NextButton: typeof CarouselNextButton;
  PrevButton: typeof CarouselPrevButton;
  Viewport: typeof CarouselViewport;
};

export const Carousel: CarouselCompoundType = Object.assign(CarouselRoot, {
  Container: CarouselContaier,
  Slide: CarouselSlide,
  NextButton: CarouselNextButton,
  PrevButton: CarouselPrevButton,
  Viewport: CarouselViewport,
});
