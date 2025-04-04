import { ReturnBook } from './ReturnBook';
import { useEffect, useState } from 'react';
import { Spinner } from '../../Utils/Spinner';
import Book from '../../../models/BookModel';

export const Carousel = () => {
   const [books, setBooks] = useState<Book[]>([]);
   const [isLoading, setIsLoading] = useState(true); // Display loading information
   const [httpError, setHttpError] = useState(null); // Default API request errors to null

   /* Integrate API Stuff */
   useEffect(() => {
      const fetchBooks = async () => {
         const baseUrl: string = "http://localhost:8080/api/books";
         const url: string = `${baseUrl}?page=0&size=9`; // Retrieve specific range of books w/ API call
         const response = await fetch(url);

         /* Error Response */
         if (!response.ok) {
            throw new Error('Error retrieving information...');
         }

         const responseJson = await response.json(); // Convert response data to JSON format
         const responseData = responseJson._embedded.books; // Extracts data from responseJson object

         const loadedBooks: Book[] = []; // Empty object

         /* Basically BuildArrayList in work DAO */
         for (const key in responseData) { // Delicious enhanced For-loop
            loadedBooks.push({
               id: responseData[key].id,
               title: responseData[key].title,
               author: responseData[key].author,
               description: responseData[key].description,
               copies: responseData[key].copies,
               copiesAvailable: responseData[key].copiesAvailable,
               category: responseData[key].category,
               img: responseData[key].img,
            });
         }

         setBooks(loadedBooks);
         setIsLoading(false);
      };
      fetchBooks().catch((error: any) => {
         setIsLoading(false);
         setHttpError(error.message);
      });
   }, [/*variable*/]); // State variable - if anything changes, will call the API again

   /* Loading Effects */
   if (isLoading) {
      return (
         <Spinner/>
      )
   }

   /* Error Effects */
   if (httpError) {
      return (
         <div className='container m-5'>
            <p>{httpError}</p>
         </div>
      )
   }

   return (
      <div className='container mt-5' style={{ height: 550 }}>
         <div className='homepage-carousel-title'>
            <h3>Discover new adventures</h3>
         </div>
         <div id='carouselControls' className='carousel carousel-dark slide mt-5 d-none d-lg-block' data-bs-interval='false'>
            {/* Desktop */}
            <div className='carousel-inner'>
               <div className='carousel-item active'>
                  <div className='row d-flex justify-content-center align-items-center'>
                     {books.slice(0, 3).map(book => (
                        <ReturnBook book={book} key={book.id} />
                     ))}
                  </div>
               </div>
               <div className='carousel-item'>
                  <div className='row d-flex justify-content-center align-items-center'>
                     {books.slice(3, 6).map(book => (
                        <ReturnBook book={book} key={book.id} />
                     ))}
                  </div>
               </div>
               <div className='carousel-item'>
                  <div className='row d-flex justify-content-center align-items-center'>
                     {books.slice(6, 9).map(book => (
                        <ReturnBook book={book} key={book.id} />
                     ))}
                  </div>
               </div>
               <button className='carousel-control-prev' type='button' data-bs-target='#carouselControls' data-bs-slide='prev'>
                  <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                  <span className='visually-hidden'>Previous</span>
               </button>
               <button className='carousel-control-next' type='button' data-bs-target='#carouselControls' data-bs-slide='next'>
                  <span className='carousel-control-next-icon' aria-hidden='true'></span>
                  <span className='visually-hidden'>Next</span>
               </button>
            </div>
         </div>
         {/* Mobile */}
         <div className='d-lg-none mt-3'>
            <div className='row d-flex justifty-content-center align-items-center'>
               <ReturnBook book = {books[3]} key = {books[3].id}/>
            </div>
         </div>
         <div className='homepage-carousel-title mt-3'>
            <a className='btn btn-outline-secondary btn-lg' href='#'>View More</a>
         </div>
      </div>
   )
}