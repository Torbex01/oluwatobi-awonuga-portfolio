import { FaGithub } from "react-icons/fa"
import { MdOutlinePhonelink } from "react-icons/md";
import styled from "styled-components"

const ProjectCard = (props) =>{
    return(
        <div>
           <Container>
          <section>
          <img src={props.image} alt=" " />
          </section>
           <h2>{props.title}</h2>
           <p>{props.details}</p>
           <h4>Tech Stack: {props.tools}</h4>
           <LinksDiv>
                <a href={props.repo}>
                    <FaGithub size={18}/> <span>GitHub repo</span>
                </a>
                <a href={props.link}>
                    <MdOutlinePhonelink size={18}/> <span>Live View</span>
                </a>
           </LinksDiv>
           </Container>
        </div>
    )
}
export default ProjectCard

const Container = styled.div`
    padding: 40px 20px;
    max-width: 300px;
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* border: 2px solid red; */
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    text-align: center;
    line-height: 1.1;
    img{
        max-width: 94%;
        height: 160px;
        /* border: 1px solid blue; */
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        border-radius: 17px;
        object-fit: contain;
    }

    h2{
        color: #12123d;
        font-weight: 800;
        width: 270px;
        /* background-color: palegoldenrod; */
        text-align: left;
    }
    p{
        text-align: left;
        width: 270px;
        height: 200px;
        /* background-color: pink; */
        margin-top: 0;
        font-size: 14px;
        font-weight: 500;
        color: #302d2d;
    }

    h4{
        /* background-color: powderblue; */
        width: 270px;
        height: 100px;
        text-align: left;
       
        margin-top: 0;
    }
`
const LinksDiv = styled.div`
display: flex;
width: 270px;
gap: 30px;
a{
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 270px;
}
`