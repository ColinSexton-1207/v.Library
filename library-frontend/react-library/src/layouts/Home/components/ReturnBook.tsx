import Book from './../../../models/BookModel';

export const ReturnBook: React.FC<{book: Book}> = (props) => {
   return (
      <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
         <div className='text-center'>
            {/* If props.book.img is true (exists), return the img, else return the default img */}
            {props.book.img ?
               <img src={props.book.img} width='151' height='233' alt='Book' /> : <img src={require('./../../../Images/BooksImages/book1.jpg')} width='151' height='233' alt='Book' />
            }
            <h6 className='mt-2'>{props.book.title}</h6>
            <p>{props.book.author}</p>
            <a className='btn main-color text-white' href='#'>Reserve</a>
         </div>
      </div>
   )
}