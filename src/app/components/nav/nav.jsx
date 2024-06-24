import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

const Nav=()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                <Button className='btn-common iconBtn'>More About Me <span className='icon d-flex align-item-center 
            justify-content-center'><ArrowForwardIcon/></span></Button>
                </li>
            </ul>
            </nav>
            
            </>
    )
}
export default Nav;