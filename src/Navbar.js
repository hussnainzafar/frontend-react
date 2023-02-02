import React from 'react'

function Navbar() {
  return (
    <div>
        {/* <!-- BEGIN: Side Menu --> */}
        <nav className="side-nav">
                <a href="" className="intro-x flex items-center pl-5 pt-4">
                    <img alt="Star Mobile HTML Admin Template" className="w-6" src="dist/images/brand.jpg"/>
                    <span className="hidden xl:block text-white text-lg ml-3"> Star<span className="font-medium">Mobile</span> </span>
                </a>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <a href="index.html" className="side-menu side-menu--active">
                            <div className="side-menu__icon"> <i data-feather="home"></i> </div>
                            <div className="side-menu__title"> Dashboard </div>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" className="side-menu side-menu">
                            <div className="side-menu__icon"> <i data-feather="home"></i> </div>
                            <div className="side-menu__title"> Daily Report </div>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" className="side-menu side-menu">
                            <div className="side-menu__icon"> <i data-feather="home"></i> </div>
                            <div className="side-menu__title"> Inventory </div>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" className="side-menu side-menu">
                            <div className="side-menu__icon"> <i data-feather="home"></i> </div>
                            <div className="side-menu__title"> Suppliers </div>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" className="side-menu side-menu">
                            <div className="side-menu__icon"> <i data-feather="home"></i> </div>
                            <div className="side-menu__title"> Market Insight </div>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <!-- END: Side Menu --> */}
    </div>
  )
}

export default Navbar