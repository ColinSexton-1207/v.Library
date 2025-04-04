import { TopBooks } from './components/TopBooks';
import { Carousel } from './components/Carousel';
import { Hero } from './components/Hero';
import { LibraryServices } from './components/LibraryServices';

export const Home = () => {
   return (
      <>
         {/* Return as a single element w/o a tag like span */}
         <TopBooks />
         <Carousel />
         <Hero />
         <LibraryServices />
      </>
   );
}