import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import './nav.css';

const Nav=()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                <Button className='btn-common iconBtn'>
                    <span className="title">More About Me</span>
                     <span className='icon d-flex align-item-center 
            justify-content-center'><ArrowForwardIcon/></span></Button>
                </li>
            </ul>
            </nav>
            
            </>
    )
}
export default Nav;