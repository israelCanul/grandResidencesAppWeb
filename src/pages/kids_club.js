//https://royalresorts.com/wp-content/uploads/2017/03/activities-program.pdf
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/navheader';
import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : 'KIDS CLUB: The resort has a children’s pool and playground and a Kids Club offering a variety of supervised activities and programs for children aged between four and 12 years. While you spend the morning shopping or relaxing on the beach, the specially trained Kids Club team will keep your children busy. The Kids Club is open daily from 9 a.m. to 5 p.m. <br><br> TEENS CLUB:  Teenagers can make friends, play video games, air hockey, foosball and watch movies at the Teens Club. Open daily from 9 a.m. to 5 p.m.',
      title : 'Kids Club',
      image: 'img/kids-club.jpg'
    }
  }
  render(){
    return(
      <div id="app-wrap">

        <Item info={this.state}
           links={[
          {url:"https://royalresorts.com/wp-content/uploads/2017/03/Kids-club-en.pdf",name : "View Program"}
        ]}/>
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById('app'));
