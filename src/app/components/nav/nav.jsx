
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
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
                    <span className="title">About Me</span>
                     <span className='icon d-flex align-item-center 
            justify-content-center'><Person2OutlinedIcon/></span></Button>
            
                </li>
                <li>
                <Button className='btn-common iconBtn'>
                    <span className="title">Portfolio</span>
                     <span className='icon d-flex align-item-center 
            justify-content-center'><BusinessCenterOutlinedIcon/></span></Button>
            
                </li>
                <li>
                <Button className='btn-common iconBtn'>
                    <span className="title">Contact</span>
                     <span className='icon d-flex align-item-center 
            justify-content-center'><MarkunreadOutlinedIcon/></span></Button>
            
                </li>
                
            </ul>
            </nav>
            
            </>
    )
}
export default Nav;