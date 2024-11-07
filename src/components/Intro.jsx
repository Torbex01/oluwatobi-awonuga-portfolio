import styled from "styled-components"
import picture from '../assets/oluwatobiPic.jpg'

const Intro = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <TextArea>
                        <h1>
                            Hello, <br />
                            I am Oluwatobi Paul Awonuga.
                        </h1>
                        <h4> A full-stack development enthusiast
                             with experstise in front-end development, 
                            passionate about building easily accessible and user friendly websites. </h4>
                    </TextArea>
                    <ImageArea>
                        <img src= {picture} alt="my image" />
                    </ImageArea>

                    <TechStack>

                    </TechStack>
                </Wrapper>
            </Container>
        </div>
    )
}
export default Intro

const Container = styled.div `
    /* background-color: yellow; */
     max-width: 1280px;
    min-height: calc(100vh - 60px);
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`
const Wrapper = styled.div ` 
    width: 95%;
    height: inherit;
    /* background-color: saddlebrown; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
    @media (max-width: 900px) {
   /* justify-content: center; */
   align-items: center;
   text-align: left;
   gap: 30px;
   flex-direction: column-reverse;
   box-sizing: border-box;
    }
`
const TextArea = styled.div `

@media (max-width: 900px) {
   justify-content: center;
   align-items: center;
   max-width: 320px;
}
  max-width: 500px ;
  /* max-height: 500px; */
  /* background-color: green; */

  h1{
    background: linear-gradient(to bottom left, #290661, #3a6806, #9e0c0c, #16168d);
    background-clip: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
        /* height: 265px; */
        line-height: 1.3;
        font-weight: 800;
        font-size: 50px;
    
  }
`
const ImageArea = styled.div `
@media (max-width: 900px) {
    max-width: 320px;

}
max-width: 400px;
max-height: 420px;
/* background-color: purple; */
display: flex;
align-items: center;
justify-content: center;
/* object-fit: contain; */

img{
    
    @media (max-width: 900px) {
        width: 90%;
    }
    width: 99%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    /* border: 3px solid #412f63bc; */
    box-shadow: rgba(0, 0, 200, 1) 0px 5px 15px;
}
`
const TechStack = styled.div``