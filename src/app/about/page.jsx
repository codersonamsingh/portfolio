import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
const About=()=>{
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

        </div>
        
      </div>

      </div>
      </section>
)

}

export default About;