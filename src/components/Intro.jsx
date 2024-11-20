import styled from "styled-components"
import picture from '../assets/oluwatobiPic.jpg'

const Intro = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                 <main>
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

                 </main>
                    <TechStack>
                            <h1>TECH STACK</h1>
                            <div>
                                <img src=" " alt="vs code" />
                                <img src=" " alt="git" />
                                <img src=" " alt="github" />
                                <img src=" " alt="react" />
                                <img src=" " alt="html5" />
                                <img src=" " alt="css3" />
                                <img src=" " alt="javascript" />
                                <img src=" " alt="css3" />
                            </div>
                    </TechStack>
                </Wrapper>
            </Container>
        </div>
    )
}
export default Intro

const Container = styled.div `
   background-color: rgba(219, 232, 235, 0.5);
     max-width: 1280px;
    min-height: calc(100vh - 60px);
    margin-top: 61px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    @media (max-width: 900px) {
   /* justify-content: center; */
   align-items: center;
   text-align: left;
   gap: 30px;
//    flex-direction: column;
   box-sizing: border-box;
   width: 85%;
   
    }

    main{
        width: 100%;
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
        
    }
`
const TextArea = styled.div `
h4{text-align: justify;}

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
        @media (max-width: 900px){
            font-size: 25px;
        }
  }

  h4{
    @media (max-width: 900px){
        font-size: 14px;
    }
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
        width: 95%;
    }
    width: 99%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    /* border: 3px solid #412f63bc; */
    box-shadow: rgb(0, 0, 200, 0.5) 0px 5px 15px;
}
`
const TechStack = styled.div`
text-align: center;
background-color: greenyellow;
width: 100;
`