import './main.scss'
import Footer from "../../../components/footer/Footer";
import About from "../../../components/about/About";
import MySkills from "../../../components/mySkills/MySkills";
import MyEducations from "../../../components/myEducations/MyEducations";
import MyProjects from "../../../components/myProjects/MyProjects";


function Main() {

    return (

        <main className='partTwo'>

            <About/>

            <MySkills/>

            <MyEducations/>

            <MyProjects/>

            <Footer/>

        </main>

    )

}

export default Main
