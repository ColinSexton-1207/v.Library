export const Hero = () => {
   return (
      <div>
         {/* Desktop Heroes */}
         <div className='d-none d-lg-block'>
            <div className='row g-0 mt-5'>
               <div className='col-sm-6 col-md-6'>
                  <div className='col-image-left'></div>
               </div>
               <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                  <div className='ml-2'>
                     <h1>What have you been reading?</h1>
                     <p className='lead'>
                        The library team would love to know what you have been reading!
                        We hope to expand reading lists and provide top content at our
                        local library branch.
                     </p>
                     <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                  </div>
               </div>
            </div>
            <div className='row g-0'>
               <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                  <div className='ml-2'>
                     <h1>Our collection is always growing!</h1>
                     <p className='lead'>
                        Check in daily for new releases and additions to our shelves!
                        We order new books daily to ensure we have the largest selection
                        possible for both young and adult readers. It is our goal to send
                        out new reading lists each week!
                     </p>
                  </div>
               </div>
               <div className='col-sm-6 col-md-6'>
                  <div className='col-image-right'></div>
               </div>
            </div>
         </div>

         {/* Mobile Heroes */}
         <div className='d-lg-none'>
            <div className='container'>
               <div className='m-2'>
                  <div className='col-image-left'></div>
                  <div className='mt-2'>
                     <h1>What have you been reading?</h1>
                     <p className='lead'>
                        The library team would love to know what you have been reading!
                        We hope to expand reading lists and provide top content at our
                        local library branch.
                     </p>
                     <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                  </div>
               </div>
               <div className='m-2'>
                  <div className='col-image-right'></div>
                  <div className='mt-2'>
                     <h1>Our collection is always growing!</h1>
                     <p className='lead'>
                        Check in daily for new releases and additions to our shelves!
                        We order new books daily to ensure we have the largest selection
                        possible for both young and adult readers. It is our goal to send
                        out new reading lists each week!
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}