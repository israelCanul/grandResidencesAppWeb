import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : 'Live a 100% Mexican gourmet experience in our Riviera Maya restaurant. You will love the exquisite blend of the finest cuisine with the contemporary Mexican art, traditions and the outstanding view of the Caribbean Sea. Order lobster, seafood, beef ¡or simply some delicious tacos!',
      title : 'Flor de Canela',
      image: 'img/flor-canela.jpg'
    }
  }
  render(){
    return(
      <div id="app-wrap">
        <Item info={this.state}
        phone="+52 (998) 872-8130"
        links={[
          {url:"https://www.royalresorts.com/wp-content/uploads/2017/03/flor-menu.pdf",name : "Menu"},
          {url:"https://www.royalresorts.com/wp-content/uploads/2017/03/flor-desserts.pdf",name : "Dessert Menu"}
        ]} />
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById('app'));
