import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : 'El Faro Grill offers seafood and steaks grilled to perfection and fresh flavors with a hint of the Mediterranean. Try it for breakfast, lunch or dinner, the menus offer a variety of tempting dining  choices. </br></br>'+
    'Open daily for breakfast (7 a.m. to 11:30 a.m.), lunch (12 noon to 4:30 p.m.) and dinner (5 – 9:30 p.m.); Bar 7 a.m. – 10:59 p.m.). Dress code: Casual smart.</br>',
      title : 'Faro Grill',
      image: 'img/faro-grill.jpg'
    }
  }
  render(){
    return(
      <div id="app-wrap">
        <Item
        info={this.state}
        phone="+52 (998) 872-8130"
        links={[
          {url:"https://www.royalresorts.com/wp-content/uploads/2017/03/dinner-menu.pdf",name : "Dinner Menu"},
          {url:"https://www.royalresorts.com/wp-content/uploads/2017/03/desserts.pdf",name : "Dessert Menu"},
          {url:"https://www.royalresorts.com/wp-content/uploads/2017/03/lunch-menu.pdf",name : "Lunch Menu"},
          {url:"https://royalresorts.com/wp-content/uploads/2017/03/wine-list.pdf",name : "Wine List Menu"}
        ]} />
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById('app'));
