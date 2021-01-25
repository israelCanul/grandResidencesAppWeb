import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/navheader';
import ListPrincipalItems from './components/listItems.js';
import Cookie from './cookie';


import '../style/app.scss';

class GeneralInformationMenu extends Component{
  constructor(props){
    super(props)
    this.state={
      showlista : false,
    }
  }
  render(){
    return(
      <div id="index" >
        <div id="index-loader" className={`index-loader ${this.state.showlista?"exit":""}`}>
          <div className="index-loader-content">
            <img src="img/logo.png" />
          </div>
          <div className="index-loader-opacity">

          </div>
        </div>

      </div>
    );
  }
  componentWillMount(){
    let that = this;
    setTimeout(function(){
        Cookie.setCookie("intro","intro",1);
        window.location = 'intro.html';
    },5000);
  }
}

ReactDOM.render(<GeneralInformationMenu />, document.getElementById('app'));
