import DraftsIcon from '@mui/icons-material/Drafts';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const Contact = () => {
    return(
        <section className="aboutPage contactPage">
      <div className="container-fluid">
            <div className="d-flex">
              <h1 className="hd text-center m-auto">GET IN <span>TOUCH</span>
             <span className="title-bg" style={{fontSize:'110 px' , top:'-30px' , left: '-80px',}}>CONTACT</span>
             </h1>
         </div>

         <div className="row">
            <div className="col-md-4">
                <h3 className="text-white font-weight-bold">DON'T BE SHY !</h3>
                <p className="text-white">Feel free to get in touch with me. I am always open to 
                    discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                    <br/>
                    <div className="d-flex align-item-center info flex-column">
                           <DraftsIcon/>
                       <div className='pl-3 d-flex flex-column'>
                          <span>MAIL ME</span>
                          <label>sonam.sin.rajput@gmail.com</label>
                         </div>
                    </div>

                    <div className="d-flex align-item-center info flex-column mt-4">
                           <ContactPhoneIcon/>
                       <div className='pl-3 d-flex flex-column'>
                          <span>CALL ME</span>
                          <label>+91 9572965040</label>
                         </div>
                    </div>

            </div>

                 <div className="col-md-8">

                </div>

         </div>
         </div>
         </section>
    )
}
export default Contact;