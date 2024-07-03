"use client"
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Button from '@mui/material/Button';
import { IoIosSend } from "react-icons/io";
import { useForm } from '@formspree/react';




const Contact = () => {

    const [state, handleSubmit] = useForm("xqkragvn");
    if (state.succeeded) {
         setTimeout(() => {
            window.location.reload()
         }, 3000);
        return <h4 className='text-center text-white' style={{paddingTop:'250px'}}>Thanks for joining!</h4>;
    }
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
                 
                 <br/> <br/>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col'>
                                <input type='text' placeholder='YOUR NAME' className='input' id='name' name='name'></input>

                            </div>

                            <div className='col'>
                                <input type='email' placeholder='YOUR EMAIL' className='input' id='email' name='email'></input>

                            </div>
                            <div className='col'>
                                <input type='text' placeholder='SUBJECT' className='input' id='subject' name='subject'></input>

                            </div>
                         </div>
                            <div className='row mt-4'>
                                <div className='col-md-12'>
                                    <textarea placeholder='YOUR MESSAGE' className='input' id='message' name='message'></textarea>
                                    <br/>  <br/>

                                    <Button className='btn-common iconBtn' type='submit' disabled={state.submitting}>SEND MESSAGE <span className='icon d-flex align-item-center 
                                    justify-content-center'><IoIosSend/></span></Button>
                                </div>
                            </div>
                       
                           
                    </form>

                </div>

         </div>
         </div>
         </section>
    )
}
export default Contact;