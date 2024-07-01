import Image from "next/image";
import LinkIcon from '@mui/icons-material/Link';
const Portfolio = () => {
    return(
        <section className="portfolioPage">
      <div className="container-fluid">
            <div className="d-flex">
              <h1 className="hd text-center m-auto">My <span>Portfolio</span>
             <span className="title-bg">WORKS</span>
             </h1>
         </div>

        
             <div className="wrapper mt-5">
                <div className="box">
                    <Image 
                          src="/Image/qualifier.png"
                          alt="Image"
                          
                width={355}
                height={180}
                       
                    />
                     <div className="overlay d-flex align-items-center justify-content-center">
                        <LinkIcon/>
                     </div>
                </div>

                <div className="box">

                <Image 
                          src="/Image/ASNit.png"
                          alt="Image"
                width={355}
                height={180}
                    />
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <LinkIcon/>
                     </div>
                    
                </div>

                <div className="box">
                <Image 
                          src="/Image/Softechinfra 2.png"
                          alt="Image"
                width={355}
                height={180}
                    />
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <LinkIcon/>
                     </div>
                </div>

                <div className="box">
                <Image 
                          src="/Image/lifesaviour.png"
                          alt="Image"
                width={355}
                height={180}
                    />
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <LinkIcon/>
                     </div>
                </div>
                <div className="box">
                <Image 
                          src="/Image/Softechinfra.png"
                          alt="Image"
                width={355}
                height={180}
                    />
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <LinkIcon/>
                     </div>
                </div>
                

                <div className="box">
                <Image 
                          src="/Image/Avanza.png"
                          alt="Image"
                width={355}
                height={180}
                    />
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <LinkIcon/>
                     </div>
                    </div>
             </div>


         </div>
       </section>


    )
}
export default Portfolio