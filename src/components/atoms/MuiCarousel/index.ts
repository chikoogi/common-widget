import { default as HWCarouselContainer } from "./Carousel.tsx";
import CarouselContents from "./CarouselContents";
import CarouselHeader from "./CarouselHeader";
import CarouselPagination from "./CarouselPagination";

const Carousel = Object.assign(HWCarouselContainer, {
  Header: CarouselHeader,
  Contents: CarouselContents,
  Pagination: CarouselPagination,
});

export default Carousel;
