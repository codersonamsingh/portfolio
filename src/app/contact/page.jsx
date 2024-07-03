import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

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
                           <PhoneIcon/>
                       <div className='pl-3 d-flex flex-column'>
                          <span>CALL ME</span>
                          <label>+91 9572965040</label>
                         </div>
                    </div>

                    <ul className='list list-inline socials'>
                        <li className='list-inline-item'> 
                        <Button><FaFacebookF/></Button>

                        </li>

                        <li className='list-inline-item'> 
                        <Button><FaTwitter/></Button>

                        </li>
                        <li className='list-inline-item'> 
                        <Button><FaYoutube/></Button>

                        </li>
                        <li className='list-inline-item'> 
                        <Button><FaLinkedinIn/></Button>

                        </li>
                    </ul>

                    

            </div>

                 <div className="col-md-8">

                    <form>
                        <div className='row'>
                            <div className='col'>
                                <input type='text' placeholder='YOUR NAME' className='input'></input>

                            </div>

                            <div className='col'>
                                <input type='text' placeholder='YOUR EMAIL' className='input'></input>

                            </div>
                            <div className='col'>
                                <input type='text' placeholder='SUBJECT' className='input'></input>

                            </div>
                         </div>
                            <div className='row mt-4'>
                                <div className='col-md-12'>
                                    <textarea placeholder='YOUR MESSAGE' className='input'></textarea>
                                </div>
                                <br/>

                                <Button className='btn-common iconBtn'>Download CV <span className='icon d-flex align-item-center 
            justify-content-center'><FileDownloadOutlinedIcon/></span></Button>

                            </div>
                       
                           
                    </form>

                </div>

         </div>
         </div>
         </section>
    )
}
export default Contact;