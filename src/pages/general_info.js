import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/navheader';
import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : 'Stretching along a magnificent white-sand beach to the south of the fishing village of Puerto Morelos in the Mexican Caribbean, Grand Residences Riviera Cancun® is an exclusive hideaway with beautifully appointed suites and five-star resort services. Relax with family and friends in a splendid tropical setting and discover the meaning of barefoot luxury. Grand Residences is affiliated with The Leading Hotels of the World®, a prestigious hospitality collection with the highest standards of quality and service.',
      title : 'At A Glance',
      image: 'img/gallery_room.jpg'
    }
  }
  render(){
    return(
      <div id="app-wrap">

        <Item info={this.state}
        links={[]} />
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById('app'));
