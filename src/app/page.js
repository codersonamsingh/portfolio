import Image from 'next/image';
import userImage from '../asserts/images/img.jpg';

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

          </div>
        </div>

      </div>
    </section>
    </>
    
  );
}
