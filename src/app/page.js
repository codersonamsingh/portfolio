import Image from 'next/image';
import userImage from '../asserts/images/img.jpg';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


export default function Home() {
  return (
    <>
    <section className="homePage">
      <div className="container-fluid">
        <div className="row align-items-center wrapper">
          <div className="col-md-4">
            <div className="imgWrap">
              <Image src={userImage}/>

            </div>
          </div>
          <div className="col-md-8">
            <div className='d-flex'>
              <span className='line mr-4'></span>
            <h1 className='text-white font-weight-bold mt-0'><span className='text-common d-block'>I'M SONAM SINGH.</span>
              WEB DESIGNER
            </h1></div>

            <p className='text-white'>I'm a Tunisian based web designer & front-end developer focused on crafting clean
              & user friendly experiences, I am passionate about building excellent software that improve the lives
              of those around me.
            </p>

             <div className='d-flex align items center'>
            <Button className='btn-common iconBtn'>More About Me <span className='icon d-flex align-item-center 
            justify-content-center'><ArrowForwardIcon/></span></Button>
            <Button className='btn-common iconBtn ml-4'>Download CV <span className='icon d-flex align-item-center 
            justify-content-center'><FileDownloadOutlinedIcon/></span></Button>
            
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
    
  );
}
