import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/navheader';
import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : "Sign out snorkeling gear, tennis rackets and balls, boogie boards, golf clubs and bicycles, book tennis courts and arrange classes with the tennis pro at the Sports Desk. Open daily 9 a.m. to 5 p.m.",
      title : 'Sports Desk',
      image: 'img/sports_desks.jpg',
    }
  }
  render(){
    return(
      <div id="app-wrap">

        <Item info={this.state} phone="+52 (998) 872-8130"
        links={[

        ]} />
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById('app'));
