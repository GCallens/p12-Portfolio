import './navigation.scss'

function Navigation() {

    return (
        <nav className='nav'>
            <ul>
                <li className='nav_link isActive'>
                    <a href={'#about'}>
                        <div className='nav_indicator'></div>
                        <p className='nav_title'>
                            À PROPOS DE MOI
                        </p>
                    </a>
                </li>
                <li className='nav_link'>
                    <a href={'#skill'}>
                        <div className='nav_indicator'></div>
                        <p className='nav_title'>
                            MES COMPÉTENCES
                        </p>
                    </a>
                </li>
                <li className='nav_link'>
                    <a href={'#education'}>
                        <div className='nav_indicator'></div>
                        <p className='nav_title'>
                            MES FORMATIONS
                        </p>
                    </a>
                </li>
                <li className='nav_link'>
                    <a href={'#project'}>
                        <div className='nav_indicator'></div>
                        <p className='nav_title'>
                            MES PROJETS
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
