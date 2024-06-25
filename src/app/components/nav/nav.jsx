import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import './nav.css';

const Nav=()=>{
    return(
        <>
        <nav>
            <ul>
                <li className='btn-list'>
                <Button className='btn-common iconBtn'>
                    <span className="title">Home</span>
                     <span className='icon d-flex align-item-center 
            justify-content-center'><HomeOutlinedIcon/></span></Button>
            
                </li>
              <li className='btn-list'>
                <Button className='btn-common iconBtn'>
                    <span className="title">H2</span>
                     <span className='icon d-flex align-item-center 
            justify-content-center'><HomeOutlinedIcon/></span></Button>
            
                </li>
                <li>
                <Button className='btn-common iconBtn'>
                    <span className="title">Home</span>
                     <span className='icon d-flex align-item-center 
            justify-content-center'><HomeOutlinedIcon/></span></Button>
            
                </li>
                <li>
                <Button className='btn-common iconBtn'>
                    <span className="title">Home</span>
                     <span className='icon d-flex align-item-center 
            justify-content-center'><HomeOutlinedIcon/></span></Button>
            
                </li>
            </ul>
            </nav>
            
            </>
    )
}
export default Nav;