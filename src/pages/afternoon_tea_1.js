import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : 'Join us for traditional afternoon tea on the Lobby Bar terrace. Choose your favorite tea and enjoy a tempting selection of freshly made sandwiches, '+
    'warm scones and cakes.  Every Monday, Wednesday and Friday at 4 p.m. (reservations required)</br>',
      title : 'Afternoon Tea',
      image: 'img/tea.jpg'
    }
  }
  render(){
    return(
      <div id="app-wrap">
        <Item
        info={this.state}
        phone="+52 (998) 872-8130"
        links={[]} />
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById('app'));
