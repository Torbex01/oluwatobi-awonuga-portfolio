import ProjectCard from "./PrijectCard"
import kudapic from '../assets/kudaClonePic.png'
import styled from "styled-components"
import ecommPic from '../assets/e-commercePic.png'
import furniroPic from '../assets/furniroPic.png'
import countryPic from '../assets/countryPic.png'
import nexcentPic from '../assets/nexcentPic.png'

const Projects = () =>{
    return(
        <div>
         <Container>
               <h1>PROJECTS</h1>
           <CardsBox>
           <ProjectCard title= "KUDA Page Clone" 
                        image= {kudapic}
                        details= "This was designed with the help of Kuda's web landing page using React, CSS and JavaScript in the design of responsive pages for variety of screen sizes of devices."
                        tools= "React, HTML, CSS, JavaScript"
                        repo= "https://github.com/Torbex01/kuda-clone-home.git"
                        link= "http://kuda-clone-home-7exb.vercel.app"
           />

            <ProjectCard title= "E-Commerce Page" 
                        image= {ecommPic}
                        details= "This focused on sharpening JavaScript skills; addressing functionality and responsiveness of webpages."
                        tools= "HTML, CSS, JavaScript"
                        repo= "https://github.com/Torbex01/Second-MileStone-Project-e-commerce-.git"
                        link= "https://torbex01.github.io/Second-MileStone-Project-e-commerce-/"
           />

            <ProjectCard title= "Furniro Page" 
                        image= {furniroPic}
                        details= "This project helped in polishing static web skills, with the strict use of only HTML and CSS."
                        tools= "HTML, CSS"
                        repo= "https://github.com/Torbex01/Furniro-milestone-project.git"
                        link= "https://torbex01.github.io/milestone-project/"
           />
            <ProjectCard title= "Countries Search Page" 
                        image= {countryPic}
                        details= "This project focused on learning how to fetch APIs, then using the data fetched from such APIs. It also helped in the refining javascript skills."
                        tools= "HTML, CSS, JavaScript"
                        repo= "https://github.com/Torbex01/second-milestone-project-countries.git"
                        link= "https://torbex01.github.io/second-milestone-project-countries/"
           />
            <ProjectCard title= "Nexcent Page" 
                        image= {nexcentPic}
                        details= "This project helped in the refining and improvement of skills on HTML and CSS. It also helped in learning how to deploy webpages using Github Pages."
                        tools= "HTML, CSS"
                        repo= "https://github.com/Torbex01/nexcent-milestone-project.git"
                        link= "https://torbex01.github.io/nexcent-milestone-project/"
           />
           
           </CardsBox>
         </Container>
        </div>
    )
}
export default Projects

const Container = styled.div`
    /* box-shadow: 0 0.5px 0 gray, 0 -0.5px 0 gray; */
    border-top: 1px solid gray;
    padding-bottom: 50px;
    max-width: 1280px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    /* background-color: yellow; */

    h1{
        color: #0d0e44;
        font-weight: 800;
        @media (max-width: 900px){
            font-size: 28px;
        }
    }
`
const CardsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 30px;
`