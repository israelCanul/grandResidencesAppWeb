//https://royalresorts.com/wp-content/uploads/2017/03/activities-program.pdf
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/navheader';
import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : 'The Activity Center offers a fun program of daily sports, games and arts and crafts for the whole family. From beach volleyball to aqua fitness, Spanish classes, bingo and pottery painting there\'s something for everyone. Rainy Day program available for periods of bad weather. Open daily: 9 a.m. to 5 p.m.',
      title : 'Activities Program',
      image: 'img/pool.jpg'
    }
  }
  render(){
    return(
      <div id="app-wrap">

        <Item info={this.state}
           links={[
          {url:"https://royalresorts.com/wp-content/uploads/2017/03/activities-program.pdf",name : "Program"},
          {url:"https://royalresorts.com/wp-content/uploads/2017/03/Kids-club-en.pdf",name : "Kids Club"}
        ]}/>
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById('app'));
