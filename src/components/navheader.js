import React from 'react';


const Nav =({showLogo,showBack,showMenu,urlback})=>{

    if(showBack){
      var back = (
        <a href={urlback}>
          <div className="icon triangle">
              <div className="item1 square bg-color-gris"></div>
              <div className="item2 square bg-color-gris"></div>
          </div>
        </a>
        );
    }
    if(showLogo){
      var logo = (
          <img src="img/GR.png" />
        );
    }
    if(showMenu){
      var menu = (
          <a href="intro.html">
            <div className="icon burger" >
                <div className={`square ${(!showLogo && !showBack)?"bg-color-white":"bg-color-gris"}`}></div>
                <div className={`square ${(!showLogo && !showBack)?"bg-color-white":"bg-color-gris"}`}></div>
                <div className={`square ${(!showLogo && !showBack)?"bg-color-white":"bg-color-gris"}`}></div>
            </div>
          </a>
        );
    }
  return(
    <nav className={`HeaderNav ${(!showLogo && !showBack)?"":"bg-color-white"}`} >
      <div className="HeaderNav-left">
        {back}
      </div>
      <div className="HeaderNav-icon">
        {logo}
      </div>
      <div className="HeaderNav-right" >
        {menu}
      </div>
    </nav>
  )
}

export default Nav;
