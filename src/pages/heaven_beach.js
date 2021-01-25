import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/navheader';
import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : 'At Grand Residences we have our own window on paradise, our beach bar, and we couldn’t think of a better name for it than Heaven!  Slip off your shoes, take a deep breathe and relax, you are on Riviera Maya time now. Order your favorite cocktail or an ice-cold beer, snack on shrimp tacos, feel the soft sand between your toes and enjoy the view.  You won\'t want to leave.The lunch menu features tacos, burgers, sandwiches and lighter options such as salads. Heaven Beach Bar is open daily from 10 a.m. to 6 p.m. Happy Hour 3 to 5 p.m. Don\'t miss the Sunday Night BBQ.',
      title : 'Heaven Beach bar',
      image: 'img/breakfast_onbeach.jpg'
    }
  }
  render(){
    return(
      <div id="app-wrap">

        <Item info={this.state}
          phone="+52 (998) 872-8130"
          links={[
          {url:"https://www.royalresorts.com/wp-content/uploads/2017/03/drinks.pdf",name : "Drink Menu"},
          {url:"https://www.royalresorts.com/wp-content/uploads/2017/03/HeavenMenu.pdf",name : "Pool Bar Menu"}
        ]} />
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById('app'));
