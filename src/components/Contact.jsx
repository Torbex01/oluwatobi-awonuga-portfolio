import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import styled from "styled-components"


const Contact = () => {
    return(
        <div>
            
         <Container>
                <h1>CONTACT ME</h1>
            <Wrapper>
                <ContactBox>
                    <h2>Reach me on Social Media</h2>
                   <section>
                   <a href="https://github.com/Torbex01"> <h1><FaGithub/> </h1></a>
                    <a href="https://wa.me/2349021700106"> <h1> <FaWhatsapp color="green"  /> </h1></a>
                    <a href="https://x.com/Oluwatobi_Paul1"> <h1><FaSquareXTwitter/></h1> </a>
                    <a href="https://www.linkedin.com/in/oluwatobi-awonuga/"> <h1><FaLinkedin color="#0A66C2" /></h1> </a>
                   </section>
                    
                    
                </ContactBox>
                <FormBox>
                 
                     <h2>Leave us a message (Enquiries)</h2>
            
                    <div>
                         <div>
                         <label>Name</label> <br />
                         <input type="text" />
                         </div>

                         <div>
                          <label>Email</label> <br />
                          <input type="email" />
                         </div>
                         <div>
                          <label >Message</label> <br />
                          <input className="msg" type="text" />
                         </div>

                    </div>

                     <section>
                     <button type="submit" >Submit Message</button>
                     </section>
                  
                </FormBox>
            </Wrapper>
         </Container>

        </div>
    )
}
export default Contact

const Container = styled.div`
     border-top: 1px solid gray;
    padding-bottom: 50px;
    max-width: 1280px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    
    align-items: center;
    h1{
        text-align: center;
        font-size: 35px;
        color: #0d0e44;
        font-weight: 800;

        @media (max-width: 900px){
            font-size: 28px;
        }
    }
`
const Wrapper = styled.div`
    /* background-color: orange; */
    width: 90%;
    padding: 20px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;
    @media (max-width: 900px){
        width: 80%;
    }
`
const ContactBox = styled.div`
/* background-color: blueviolet; */
h2{
    color: #0d0e44;
    font-weight: 800;
    text-align: center;
    @media (max-width: 900px){
        font-size: 18px;
    }
}
padding: 0 5px;
border-radius: 20px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 330px;
height: 200px;
@media (max-width: 900px){
    max-height: 170px;
}
/* border: 1px solid gray; */
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
gap: 20px;
/* justify-content: center; */
align-items: center;
section{
    /* background-color: pink; */
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    h1{
        font-size: 45px;
        color: black;
        line-height: 1;
        margin: 0;
    }
    @media (max-width: 900px){
        h1{
            font-size: 30px;
        }
    }
    
}


`
const FormBox = styled.form`
/* background-color: palegreen; */
/* border: 1px solid black; */
max-width: 330px;
min-height: 350px;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding: 20px 20px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;

h2{
    color: #0d0e44;
    font-weight: 800;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 900px){
        font-size: 18px;
    }
}
label{
    color: #be0707;
    font-size: 15px;
    font-weight: 800;
}
input{
    width: 260px;
    height: 40px;
    border-radius: 8px;
    margin-bottom: 10px;
}

.msg{
    height: 75px;
}
section{
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;

    button{
        background-color: #0c0c31;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        border: none;
        width: 220px;
        height: 40px;
        border-radius: 7px;
    }
}
`