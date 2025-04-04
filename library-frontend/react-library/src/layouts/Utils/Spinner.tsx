export const Spinner = () => {
   return (
      <div className='container m-5 d-flex justify-content-center' style={{height: 550}}>
         <div className='spinnder-border text-primary' role='status'>
            <span className='visually-hidden'>
               Loading...
            </span>
         </div>
      </div>
   );
}