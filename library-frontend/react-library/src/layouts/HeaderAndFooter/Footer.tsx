export const Footer = () => {
   return (
      <div className='row-color-charcoal'>
         <footer className='container d-flex flex-wrap justify-content-between text-center align-items-center py-5 row-color-charcoal'>
            <div className='container'>
               <p className='col-md-4 mb-0 footer-color-lgrey d-inline'>© 2025 Your Mom | &nbsp;
                  <a className='text-decoration-none footer-color-lgrey hov' href="/legal/accessibility/">Accessibility</a> | <a className='text-decoration-none footer-color-lgrey hov' href="/legal/privacy/">Privacy Policy</a> | <a className='text-decoration-none footer-color-lgrey hov' href="/legal/nondiscrimination/">Non-Discrimination Statement</a> | &nbsp;
                  <a className='text-decoration-none footer-color-lgrey hov' href="/legal/consumerinfo/">Consumer Information</a> | <a className='text-decoration-none footer-color-lgrey hov' href="/legal/complaint-resolution/">Student Complaint Resolution</a> |&nbsp;
                  <a className='text-decoration-none footer-color-lgrey hov' href="https://complaints.ibhe.org/" target="_blank">IBHE Online Complaint System</a>
               </p>
            </div>
         </footer>
      </div>
   );
}