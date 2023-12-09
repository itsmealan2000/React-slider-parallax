import React,{useState, useEffect}from 'react'
import Logo from '../assets/logo/logoavj.png'
import './Navbar.css'
import Slider from '../Pages/Slider'
import Parallax from '../Pages/Parallax'
function Navbar() {
    const [pageTitle, setPageTitle] = useState(() => localStorage.getItem('pageTitle') || '');
    const handleParallaxClick = () => {
      setPageTitle('Parallax');
    };
    const handleSliderClick = () =>{
      setPageTitle('Image Slider');
    };
    useEffect(() => {
      localStorage.setItem('pageTitle', pageTitle);
    }, [pageTitle]);
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-transparent d-flex flex-column">
        <h5 className='text-uppercase bg-secondary rounded text-center w-100 d-flex justify-content-evenly align-items-center '>
        <img src={Logo} alt="" srcset="" className='logo' />
            {pageTitle}
        </h5>
         <div>
              <a href=""><button className='btn btn-primary ms-2' onClick={handleSliderClick} >View Image slider</button></a>
              <a href=""><button className='btn  btn-primary ms-2' onClick={handleParallaxClick}>View Parallax</button></a>
         </div>
  </nav>
  <div className='container-fluid'>
    {pageTitle === 'Parallax' ? <Parallax/> : <Slider/>}
  </div>
  </>
  )
}

export default Navbar