import Contact from "../../components/Contact"
import Intro from "../../components/Intro"
import Projects from "../../components/Projects"
import './Home.css'

const Home = () => {
    return(
        <div>
         <Intro /> 
          <Projects />
          <Contact />
        </div>
    )
}
export default Home