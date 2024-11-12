import Contact from "../../components/Contact"
import Intro from "../../components/Intro"
import Projects from "../../components/Projects"
import './Home.css'

const Home = () => {
    return(
        <div>
         <div id="about"><Intro /> </div>  
          <div  id="projects"><Projects /></div>
          <Contact id="contact" />
        </div>
    )
}
export default Home