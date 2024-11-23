import { Link } from "react-router-dom"
import styled from "styled-components"

const Sidebar = ({toggle, setToggle}) => {
    const test = () =>{
        setToggle(false)
    }
    return(
      <Container>
        <Wrapper>
            <Link to="/" onClick={test} style={{ textDecoration: 'none', color: 'inherit' }}>
           <nav>Home</nav>
           </Link>
           <Link to="/about" onClick={test} style={{ textDecoration: 'none', color: 'inherit' }}>
           <nav>About</nav>
           </Link>
           <Link to="/projects" onClick={test} style={{ textDecoration: 'none', color: 'inherit' }}>
           <nav>Projects</nav></Link>
           
           <Link to="/contact" onClick={test} style={{ textDecoration: 'none', color: 'inherit' }}>
           <nav>Contacts</nav></Link>
        </Wrapper>
      </Container>
        
    )
}

export default Sidebar
const Container = styled.div`
max-width: 1280px;
/* background-color: orange; */
    
`

const Wrapper = styled.div`
background-color: rgba(219, 232, 235, 0.5);
color: #12123d;
min-height: calc(30vh - 60px);
width: 99%;
display: flex;
align-items: flex-end;
justify-content: center;
gap: 25px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
nav{
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
}
`