import React from 'react'
import classes from '../assets/css/Experience.module.css'
import { useEffect } from 'react';
import "aos/dist/aos.css"
import Aos from "aos"


const Experience = () => {
    useEffect(() => {
        Aos.init({duration:1000});
      }, []);
  return (
    <div  className={classes.yasir}>

       <div>

    {/*Education*/}

    <div className={classes.Education}>

    <h1 className={classes.Education} data-aos-once="true" data-aos="zoom-in"  >Education :</h1>

    <h1 className={classes.Education} style={{fontSize:"2.3rem"}}>Bachelor's degree, Software Engineering</h1>

    <h1 className={classes.Education} style={{fontSize:"1.5rem",color:"#01bf71"}}>Mehran University of Engineering and Technology</h1>

    <h1 className={classes.Education} style={{fontSize:"1.3rem",color:"#fff"}}>2014-2017</h1>
    </div>


    <div className={classes.experience}>

    <h1 className={classes.experience} style={{marginTop:"10%"}}data-aos-once="true" data-aos="zoom-in" >Experience :</h1>

    <h1 className={classes.experience} style={{fontSize:"2.3rem"}}>Elementblue Technologies LLC</h1>
    <a className={classes.experience} style={{fontSize:"1.2rem",color:"#fff",}} href="https://elementblue.com/" >ElementBlue</a>

    <h1 className={classes.experience} style={{fontSize:"1.5rem",color:"#01bf71"}}>Senior Software Engineer</h1>

    <h1 className={classes.experience} style={{fontSize:"1.3rem",color:"#fff"}}>Jul 2021 - Present</h1>

    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Team Lead (<span style={{color:"#fff"}}> Java </span>) Responsible for leading JEE projects. Creating architectural optimizations, technical design document, High level design document, low level documents and solution design. Responsible for delivering end to end applications ensuring good performance, timely delivery and effective utilization of own and other. Integrated Back end Systems while ensuring the fulfillment of requirements and providing easy to implement solution for developers.</p>
    <li className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Ministry of Health and Prevention –<span style={{color:"#fff"}}> MOHAPS </span></li>
    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Working as lead for Technical Support, in this project I was giving them technical support and New Development CR, I was designing, developing, and deploying eservices & core components, in additions to certificates and reports, plus sharing in application testing.</p>
    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Technologies: Spring Boot, Rest Services, spring security, IBM Web Sphere Deployment tool, Filenet and Reports. </p>
    <li className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Government Ras Al Khaima –<span style={{color:"#fff"}}> RAK </span></li>
    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>- Understand the technical aspects and business flow of the project.
- Creating Technical Document for project.<br></br>
- Creating the Pure Spring Boot and Rest Services for the Notary.<br></br>
- creating The mookups again the Approved Technical documents.<br></br>
- Integrating the third party API's Like UAE Pass, Cisco, eSeal and Bashar.<br></br>
- Design, modify, exhibit good coding skills, get the code reviewed by the technical lead and incorporate the feedback.<br></br>
- Accountable for the unit and functional testing of every development task before release.<br></br>
- Compliance of the software development standards and processes.<br></br>
- Responsible for the success of the release with respect to the completeness and accuracy of their piece of work.</p>
    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Technologies: Spring Boot, Spring Bean, Spring JPA, Rest Services, spring security, Filenet and Reports.</p>
    

    </div>


{/*Experience*/}

<div className={classes.experience}>


<h1 className={classes.experience} style={{fontSize:"2.3rem"}}>NayaPay</h1>

<a className={classes.experience} style={{fontSize:"1.2rem",color:"#fff",}} href="https://www.nayapay.com/" >NayaPay</a>


    <h1 className={classes.experience} style={{fontSize:"1.5rem",color:"#01bf71"}}>Java Engineer</h1>

    <h1 className={classes.experience} style={{fontSize:"1.3rem",color:"#fff"}}>Apr 2019 - Jul 2021</h1>

    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>NayaPay aims to facilitate digital payments to the customer and as part of the company, I am working as a <span style={{color:"#fff"}}> Backend Developer </span>to provide solutions to the product.</p>
    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>* ISO-8583 protocol for communication with global payment network, e.g VISA, masterCard.<br></br>
* Integration local payment switches like, Vaulsys, 1Link for the financial transaction processing in Pakistan.<br></br>
* Integration with Nadra APi, Ticket reservation, Ufone, Warid, Zong, Telenor topups and all other payment integrations. </p>
    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>- Understand the technical aspects and business flow of the project.<br></br>
- Design, modify, exhibit good coding skills, get the code reviewed by the technical lead and incorporate the feedback.<br></br>
- Accountable for the unit and functional testing of every development task before release.<br></br>
- Validate the technical specification along with the technical lead prior to the development.<br></br>
- Compliance of the software development standards and processes.<br></br>
- Responsible for the success of the release with respect to the completeness and accuracy of their piece of work.</p>
<p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Technologies: Hibernate, Spring, Spring MVC, Spring Boot, Spring Security, OAuth Authentication, Micro Services and MongoDB.</p>

    
</div>
<div className={classes.experience}>

<h1 className={classes.experience} style={{fontSize:"2.3rem"}}>Access Group</h1>
    <a className={classes.experience} style={{fontSize:"1.2rem",color:"#fff",}} href="https://access.net.pk/" >AccessGroup</a>

    <h1 className={classes.experience} style={{fontSize:"1.5rem",color:"#01bf71"}}>Jr. Java Developer</h1>

    <h1 className={classes.experience} style={{fontSize:"1.3rem",color:"#fff"}}>Dec 2017 - Apr 2019</h1>

    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Working as a back end<span style={{color:"#fff"}}> Java </span>Developer.</p>
    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>- Discuss requirements with team internally<br></br>
- Discuss requirements with client<br></br>
- Involved in both front end and Back end development<br></br>
- Development, integration, testing, application deployment, performance tuning and optimization<br></br>
- Coordination with QA team.<br></br>
- Coordination with client in UAT process and when system go for production.
</p>
    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Technologies: JavaEE, JSF, Hibernate, Spring, Spring Boot, Web services, AngularJs, Fundamo 5.9, Fundamo 5.12 and Oracle Db.</p>
    
</div>
<div className={classes.experience}>


<h1 className={classes.experience} style={{fontSize:"2.3rem"}}>Mehran University of Engineering and Technology</h1>
    <a className={classes.experience} style={{fontSize:"1.2rem",color:"#fff",}} href="http://ugadmission.muet.edu.pk" >MUET Online Admissions</a>

    <h1 className={classes.experience} style={{fontSize:"1.5rem",color:"#01bf71"}}>Software Developer</h1>

    <h1 className={classes.experience} style={{fontSize:"1.3rem",color:"#fff"}}>Mar 2017 - Aug 2017</h1>

    <p className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>It was a project based job. We were a team of six people who worked on a project named "MUET Online Admissions". This project was about making<span style={{color:"#fff"}}> Mehran UET</span> admission form online and interviewing section live.</p>
    
</div>

    </div>
    
    
     </div>
  )
}

export default Experience