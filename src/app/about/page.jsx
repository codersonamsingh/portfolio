"use client"
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const About=()=>{
  const percentage = 66;
return (
  


    <section className="aboutPage">
      <div className="container-fluid">
       <div className="d-flex">
       <h1 className="hd text-center m-auto">ABOUT <span>ME</span>
        <span className="title-bg">RESUME</span>
        </h1>
       </div>

      <div className="row mt-5 aboutWrapper">
        <div className="col part1">
          <h2 className="text-white">PERSONAL INFO</h2>
          <div className="row">
            <div className="col">
              <h4>First Name : <span>Sonam</span></h4>
              <h4>last Name : <span>Singh</span></h4>
              <h4>Age : <span>20</span></h4>
              <h4>Nationality : <span>INDIAN</span></h4>
              <h4>Freelance : <span>Available</span></h4>
            </div>
    

            <div className="col">
              <h4>Address : <span>India</span></h4>
              <h4>Phone: <span>+91 9572965040</span></h4>
              <h4>Email: <span className="smm">sonam.sin.rajput@gmail.com</span></h4>
              <h4>WhatsApp: <span>+91 9430687559</span></h4>
              <h4>Langages  : <span>English, Hindi</span></h4>
            </div>


          </div>
          <Button className='btn-common iconBtn'>Download CV <span className='icon d-flex align-item-center 
            justify-content-center'><FileDownloadOutlinedIcon/></span></Button>
            
        </div>
        <div className="col part2">
          <div className='boxes'>
            <div className='box'>
              <span className='count d-flex'>3 <span className='ml-2'>+</span></span>
            <div className='d-flex mt-2'>
              <span className='line mr-3'></span>
            <h4>YEARS OF<br/>
             EXPERIENCE</h4>

            </div>

            </div>
            <div className='box'>
              <span className='count d-flex'>10<span className='ml-2'>+</span></span>
            <div className='d-flex mt-2'>
              <span className='line mr-3'></span>
            <h4>COMPLETE<br/>
              PROJECT
            </h4>

            </div>

            </div>
            <div className='box'>
              <span className='count d-flex'>8<span className='ml-2'>+</span></span>
            <div className='d-flex mt-2'>
              <span className='line mr-3'></span>
            <h4>HAPPY<br/>
            CUSTOMERS</h4>

            </div>

            </div>
            <div className='box'>
              <span className='count d-flex'>8<span className='ml-2'>+</span></span>
            <div className='d-flex mt-2'>
              <span className='line mr-3'></span>
            <h4>HAPPY<br/>
           COMPANY</h4>

            </div>

            </div>

          </div>

        </div>
        
      </div>

      <br/>  <br/> <br/>
      <div className='d-flex'>
        <span className='divider'>

        </span>
      </div>

      
      {/* skills secgtion start here */}
      <div className='skillSection mt-5'>
        <h2 className='text-white text-center'>MY SKILLS</h2>

        <div className='row'>
          <div className='col-md-3 d-flex flex-column'>
          <CircularProgressbar value={55} text={`${55}%`} 
          className='countSpiner'
          styles={buildStyles({
   
                 pathColor: `#fa5b0f`,
                 textColor: '#fff',
                 trailColor: '#252525',
  
                  })}
                />
            <br/>
             <h4 className='text-white text-center m-auto'>HTML</h4>
                </div>

                <div className='col-md-3 d-flex flex-column'>
          <CircularProgressbar value={75} text={`${75}%`} 
          className='countSpiner'
          styles={buildStyles({
   
                 pathColor: `#fa5b0f`,
                 textColor: '#fff',
                 trailColor: '#252525',
  
                  })}
                />
            <br/>
             <h4 className='text-white text-center m-auto'>JAVASCRIPT</h4>
                </div>
                <div className='col-md-3 d-flex flex-column'>
          <CircularProgressbar value={70} text={`${70}%`} 
          className='countSpiner'
          styles={buildStyles({
   
                 pathColor: `#fa5b0f`,
                 textColor: '#fff',
                 trailColor: '#252525',
  
                  })}
                />
            <br/>
             <h4 className='text-white text-center m-auto'>NODEJS</h4>
                </div>
                <div className='col-md-3 d-flex flex-column'>
          <CircularProgressbar value={60} text={`${60}%`} 
          className='countSpiner'
          styles={buildStyles({
   
                 pathColor: `#fa5b0f`,
                 textColor: '#fff',
                 trailColor: '#252525',
  
                  })}
                />
            <br/>
             <h4 className='text-white text-center m-auto'>REACTJS</h4>
                </div>
                <div className='col-md-3 d-flex flex-column'>
          <CircularProgressbar value={55} text={`${55}%`} 
          className='countSpiner'
          styles={buildStyles({
   
                 pathColor: `#fa5b0f`,
                 textColor: '#fff',
                 trailColor: '#252525',
  
                  })}
                />
            <br/>
             <h4 className='text-white text-center m-auto'>NEXTJS</h4>
                </div>
                <div className='col-md-3 d-flex flex-column'>
          <CircularProgressbar value={45} text={`${45}%`} 
          className='countSpiner'
          styles={buildStyles({
   
                 pathColor: `#fa5b0f`,
                 textColor: '#fff',
                 trailColor: '#252525',
  
                  })}
                />
            <br/>
             <h4 className='text-white text-center m-auto'>MONGODB</h4>
                </div>
                <div className='col-md-3 d-flex flex-column'>
          <CircularProgressbar value={40} text={`${40}%`} 
          className='countSpiner'
          styles={buildStyles({
   
                 pathColor: `#fa5b0f`,
                 textColor: '#fff',
                 trailColor: '#252525',
  
                  })}
                />
            <br/>
             <h4 className='text-white text-center m-auto'>REACT-NATIVE</h4>
                </div>
                <div className='col-md-3 d-flex flex-column'>
          <CircularProgressbar value={30} text={`${30}%`} 
          className='countSpiner'
          styles={buildStyles({
   
                 pathColor: `#fa5b0f`,
                 textColor: '#fff',
                 trailColor: '#252525',
  
                  })}
                />
            <br/>
             <h4 className='text-white text-center m-auto'>CSS</h4>
                </div>
        </div>

      </div>
      {/* skills secgtion end here */}

      <br/>  <br/> <br/>
      <div className='d-flex'>
        <span className='divider'>

        </span>
      </div>

      </div>
      </section>
)

}

export default About;