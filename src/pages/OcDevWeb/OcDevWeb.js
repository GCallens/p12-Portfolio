import './OcDevWeb.scss'
import MainOcDevWeb from "../../body/bodyOcDevWeb/main/MainOcDevWeb";
import HeaderOcDevWeb from "../../body/bodyOcDevWeb/header/HeaderOcDevWeb";

function OcDevWeb() {

    return (
        <div className='portfolio'>
            <HeaderOcDevWeb/>
            <MainOcDevWeb/>
        </div>
    )

}

export default OcDevWeb
