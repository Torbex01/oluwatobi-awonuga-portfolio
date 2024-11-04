import styled from "styled-components"
const Header = () =>{
    return(
        <div>
           <Container>
                <Logo>
                    <h2>OLUWATOBI</h2>
                </Logo>
                
            </Container> 
        </div>
    )
}
export default Header

const Container = styled.div `
    background-color: pink;
    max-width: 85%;
    margin: 0 auto;
    min-height: 60px;
`
const Logo = styled.div ``