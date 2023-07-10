import './home.scss'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NameJob from "../../components/name&Job/Name&Job";
import About from "../../components/about/About";
import MyServices from "../../components/myServices/MyServices";
import MyEducations from "../../components/myEducations/MyEducations";
import MySkills from "../../components/mySkills/MySkills";
import MyProjects from "../../components/myProjects/MyProjects";



function Home() {
    return (
        <div>
            <Header/>
            <NameJob/>
            <About/>
            <MyServices/>
            <MySkills/>
            <MyProjects/>
            <MyEducations/>
            <Footer/>
        </div>
    )
}

export default Home
