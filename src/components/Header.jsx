import styled from "styled-components"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div>
           <Container>
                <Logo>
                    <h2>OLUWATOBI</h2>
                </Logo>
                <Navs>
                    <main>
                         <Link to="/#about">About</Link>
                         <Link to={'/#projects'} >Projects</Link>
                         <Link to='/#contact'>Contact</Link>
                    </main>  
                    <section>
                        <a href="https://github.com/Torbex01"><h2><FaGithub /></h2></a>
                        <a href="https://x.com/Oluwatobi_Paul1"><h2> <FaSquareXTwitter/> </h2></a>
                        <a href="https://www.linkedin.com/in/oluwatobi-awonuga/"><h2> <FaLinkedin/> </h2></a>
                    </section>
                    <Ham>
                    <h2><RxHamburgerMenu size={22} /></h2>
                    </Ham>
                    
                </Navs>
               
            </Container> 
        </div>
    )
}
export default Header

const Container = styled.div `
     @media (max-width: 900px) {
   justify-content: space-evenly;
   align-items: center;
   
   
     }
    /* background-color: pink; */
    /* max-width: 100%; */
    padding: 0;
    margin: 0 0px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`
const Logo = styled.div `
        padding-left: 15px;
     @media (max-width: 900px) {
        h2{
            font-size: 20px;
        }
     }
    color: #18195f;
    h2{
        font-weight: 900;
        text-shadow: 2px 2px 4px #808080;
    }

`

const Navs = styled.div `
 @media (max-width: 900px) {
   justify-content: right  ;
   align-items: center;
   width: 70%;
   font-size: 11px;
   font-weight: 900; 
   main{
    display: none;
   }
}
/* background-color: blue; */
height: inherit;
padding-right: -15px;
width: 40%;
display: flex;
align-items: center;
justify-content: space-evenly;

color: #424242;
font-size: 18px;
font-weight: 600;

section{
    display: flex;
    width: 30%;
    justify-content: space-evenly;
   a{
    text-decoration: none;
    color: inherit;
   } 
   @media (max-width: 900px) {
    display: none;
   }
}
`
const Ham = styled.div`
display: none;

@media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;

   }
`