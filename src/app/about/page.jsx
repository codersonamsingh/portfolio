"use client"
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
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

      <br/> <br/>
      <div className='experienceSection'>
        <h2 className="text-white text-center">EXPERIENCE & EDUCATION</h2>

        <div className='row'>
          <div className='col-md-6'>
          <div className="box d-flex">
            <div className='left'>
              <span className='icon rounded-circle d-flex align-items-center justify-content-center'>
                <BusinessCenterIcon/>
              </span>
            </div>
            <div className='right pl-4'>
              <span className='badge badge-default'>MARCH 2023- AUG 2023</span>
              <h4 className='mt-3 mb-3'>WEBDEVELOPER &nbsp; - &nbsp; <span>QUALIFIER.CO.IN</span></h4>
              <p className='text-white'>Created a Website and Android App to practice question for various exam.
                 A Complete Dynamic WebApp with Admin panel to add category, course, question, blog, etc.</p>
            </div>

          </div>

          <div className="box d-flex">
            <div className='left'>
              <span className='icon rounded-circle d-flex align-items-center justify-content-center'>
                <BusinessCenterIcon/>
              </span>
            </div>
            <div className='right pl-4'>
              <span className='badge badge-default'>NOV 2023- FEB 2024</span>
              <h4 className='mt-3 mb-3'>WEBDEVELOPER &nbsp; - &nbsp; <span>asnitcorporates.com</span></h4>
              <p className='text-white'>ASN IT is a comprehensive IT and data management service provider specializing in data entry, document scanning, BPO services, web development, and digital marketing. They focus on delivering high-quality, timely, and cost-effective solutions to their clients. ASN IT aims to establish itself as a trusted partner in the BPO industry, offering services like telemarketing, inbound and outbound call center support,
                 SEO marketing, and mobile app development to enhance business performance and customer satisfaction.</p>
            </div>

          </div>
          <div className="box d-flex">
            <div className='left'>
              <span className='icon rounded-circle d-flex align-items-center justify-content-center'>
                <BusinessCenterIcon/>
              </span>
            </div>
            <div className='right pl-4'>
              <span className='badge badge-default'>AUG 2023- DEC 2023</span>
              <h4 className='mt-3 mb-3'>WEBDEVELOPER &nbsp; - &nbsp; <span>SOFTECHINFRA</span></h4>
              <p className='text-white'>Started a Freelance Company, Worked in various client project.
                Some of them are :
                merekisan : A Insurance CRM WebApp for Reliance General Insurance where Admin can create multiple user and manage their profile. User was call center employee who used to fill the form for Insurance Claim of their customer, and Admin was able to download all the entry in Excel apart from this there was various feature to support this like keeping call recordings
                 BrickMaster : A WebApp for Bricklin owner, where he can add his various Employee and manage their profile. and Employee use to enter all the work they have done, manager use to manage all the transaction happened there, print the bill etc.</p>
            </div>

          </div>
          </div>

          <div className='col-md-6'>
          <div className="box d-flex">
            <div className='left'>
              <span className='icon rounded-circle d-flex align-items-center justify-content-center'>
                <BusinessCenterIcon/>
              </span>
            </div>
            <div className='right pl-4'>
              <span className='badge badge-default'>MARCH 2024- MARCH 2027</span>
              <h4 className='mt-3 mb-3'>B.SC. &nbsp; - &nbsp; <span>IN COMPUTER SCIENCE</span></h4>
              <p className='text-white'>Organized Scienza quiz competition at the university
                 </p><p className='text-white'>Organized the annual college event, Dhishna, for 1 year</p>
            </div>

          </div>

          <div className="box d-flex">
            <div className='left'>
              <span className='icon rounded-circle d-flex align-items-center justify-content-center'>
                <BusinessCenterIcon/>
              </span>
            </div>
            <div className='right pl-4'>
              <span className='badge badge-default'>MARCH 2021- MARCH 2023</span>
              <h4 className='mt-3 mb-3'>INTERMEDIATE DEGREE(+2) &nbsp; - &nbsp; <span>IN PHYSICS,CHEMISTRY & BIOLOGY</span></h4>
              <p className='text-white'>ARARIA College,Accomplished Pre-university education under
                 Bihar school examination board with Science as Major</p>
            </div>

          </div>
          <div className="box d-flex">
            <div className='left'>
              <span className='icon rounded-circle d-flex align-items-center justify-content-center'>
                <BusinessCenterIcon/>
              </span>
            </div>
            <div className='right pl-4'>
              <span className='badge badge-default'>MARCH 2021</span>
              <h4 className='mt-3 mb-3'>HIGHER SECONDARY EDUCATION(10TH) &nbsp; - &nbsp; <span>CBSE</span></h4>
              <p className='text-white'>SCOTTISH Public School Accomplished higher secondary education under Central Board of Secondary Education.
                </p>
            </div>

          </div>
          </div>
        </div>
      </div>
      <br/> <br/> <br/> <br/>

      </div>
      </section>
)

}

export default About;