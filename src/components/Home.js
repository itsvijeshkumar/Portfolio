import React from 'react';
import classes from '../assets/css/Home.module.css'
import Typewriter from "typewriter-effect"
import { FiMail } from "react-icons/fi";
import fazal from "../assets/images/fazal.png"

import { FaFacebook,FaLinkedin,FaStackOverflow,FaTwitter,FaYoutube } from "react-icons/fa";
const Navbarcss = () => {
  return <div className={classes.fazal}>

      <img src={fazal} alt="Avatar" className={classes.img}>
      </img>

<div className={classes.heading}>

<h1 className={classes.head} >Hi, I'm Vijesh Kumar.</h1>

<p1 className={classes.heading} ><Typewriter
options={{autoStart:true
,loop:false,
delay:20,
strings:

    " This is Vijesh Kumar, working as a Senior Software Engineer Java having 6 years of development experience with different domain like Banking sectors (Core, Branchless and Digital Banking), Fintech Solution, Government Projects (Ras Al khaimah RAK,  Ministry of Health and Prevention - MOHAP) and International products."

}}>

   
</Typewriter></p1>

<div className={classes.icon}>

<a style={{ color: 'inherit', textDecoration: 'inherit'}} href="vijaykhatri3633@gmail.com"><FiMail/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://www.facebook.com/programmervk' ><FaFacebook/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://www.linkedin.com/in/vijesh-kumar-khatri/' ><FaLinkedin/></a>
{/* <a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://stackoverflow.com/users/9947525/fazal-haroon'><FaStackOverflow/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://twitter.com/FazalHaroon4'><FaTwitter/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://www.youtube.com/c/fazaltuts4uf'><FaYoutube/></a> */}

</div>

</div>
  </div>;
};

export default Navbarcss