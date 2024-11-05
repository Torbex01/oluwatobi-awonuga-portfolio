import styled from "styled-components"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Header = () =>{
    return(
        <div>
           <Container>
                <Logo>
                    <h2>OLUWATOBI</h2>
                </Logo>
                <Navs>
                    <nav>About</nav>
                    <nav>Projects</nav>
                    <nav>Contacts</nav>
                    <section>
                        <h2><FaGithub /></h2>
                        <h2> <FaSquareXTwitter /> </h2>
                        <h2> <FaLinkedin /> </h2>
                    </section>
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
    max-width: 90%;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.div `
     @media (max-width: 900px) {
        h2{
            font-size: 12px;
        }
     }
    color: #18195f;
    h2{
        font-weight: 900;
        text-shadow: 3px 3px 4px #808080;
    }

`

const Navs = styled.div `
 @media (max-width: 900px) {
   justify-content: space-evenly;
   align-items: center;
   width: 60%;
   font-size: 10px;
    section{
        width: 50%;
        justify-content: space-evenly;
        
    }
     }
/* background-color: blue; */
height: inherit;

width: 40%;
display: flex;
align-items: center;
justify-content: space-evenly;

color: #424242;
font-size: 17px;
font-weight: 600;

section{
    display: flex;
    width: 30%;
    justify-content: space-evenly;
    
}
`