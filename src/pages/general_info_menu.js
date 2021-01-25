import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/navheader';
import ListPrincipalItems from '../components/listItems.js';


class GeneralInformationMenu extends Component{
  constructor(props){
    super(props);
    this.state={
      window : {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      },
    }
    this.onResizeComponent = this.onResizeComponent.bind(this);
    this.renderList = this.renderList.bind(this);
    window.addEventListener("resize",this.onResizeComponent);// se agrega un listener que lea el tamaño de la ventana
  }
  onResizeComponent(e){
  this.setState({window : {
    width:document.documentElement.clientWidth,
    height:document.documentElement.clientHeight
  }});
}
  renderList(){
    if(this.state.window.width <= 1500 ){
      return <ListPrincipalItems
        location="activities.html"
        items={[
          {label : "At A Glance",img:'img/room_bed_1200.jpg', link : 'general-information.html'},
          {label : "Telephone Directory",img:'img/telephone_directory_1200.jpg', link : 'telephone-directory.html'},
          {label : "Sport desk",img:'img/sports_desks_1200.jpg', link : 'sports-desk.html'},
        ]}
        id="list-items-component"
        className="list-group" />
    }else{
        return <ListPrincipalItems
          location="activities.html"
          items={[
            {label : "At A Glance",img:'img/room_bed_2048.jpg', link : 'general-information.html'},
            {label : "Telephone Directory",img:'img/telephone_directory_2048.jpg', link : 'telephone-directory.html'},
            {label : "Sport desk",img:'img/sports_desks_2048.jpg', link : 'sports-desk.html'},
          ]}
          id="list-items-component"
          className="list-group" />
    }
  }
  render(){
    return(
      <div id="app-wrap">
          {this.renderList()}
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformationMenu />, document.getElementById('app'));
