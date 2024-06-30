"use client"
import Image from 'next/image';
import userImage from '../asserts/images/img.jpg';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { TypeAnimation } from 'react-type-animation';
import Link from '@mui/material/Link';



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
            <h1 className='text-white font-weight-bold mt-0'><span className='text-common d-block'>
              I'M SONAM SINGH.</span>
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WEB DESIGNER',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'WEB DEVELOPER',
        1000,
        'REACT DEVELOPER',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
            </h1>
            {/* <h1>
            <Typed 
      type={['Test ', 'One', 'Two', 'Three']} // if no backspace animation just write 1 string only (no need to use array)
      backspace={[1, 2]} // contains the index value of the type property, if only 1 index no need to use array (will execute from the smallest index)
      delay={1000} // delay backspace animation (in milliseconds)
      duration={50} // duration of typing animation per character (in milliseconds). Default 100
      cursor={'blinking-text-cursor'} // style for blinking text cursor animation. can be filled directly with css properties or class names in your css file
      />
      </h1> */}
            </div>


            <p className='text-white'>I'm a Tunisian based web designer & front-end developer focused on crafting clean
              & user friendly experiences, I am passionate about building excellent software that improve the lives
              of those around me.
            </p>
            <br/>

             <div className='d-flex align items center'>
            <Link href={'/about'}>
            <Button className='btn-common iconBtn'>More About Me <span className='icon d-flex align-item-center 
            justify-content-center'><ArrowForwardIcon/></span></Button>
            </Link>
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
