import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/navheader';
import Item from '../components/itemdescription';


class GeneralInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      description : "If you need to contact Grand Residences before your trip  please dial +52 (998) 872-8130 or the Royal Resorts switchboard at +52 (998) 881-0100, the operator will put you through to Grand Residences reception.  Use the following Quick Dialing Directory during your stay at the resort."
      +"Quick Dialing Directory: <br> <br>"
      +" Concierge Ext. 172 <br>"
      +" Reception Ext. 171 <br>"
      +" Bellboys Ext. 177 <br>"
      +" Operator Ext. 176 <br>"
      +" El Faro Grill Ext. 150 <br>"
      +" Room Service Ext. 132 <br>"
      +" Activities Center Ext. 169 <br>"
      +" Sports Desk Ext. 168 <br>"
      +" The Spa Ext. 179 <br>"
      +" Fitness Center Ext. 186 <br>"
      +" Beauty Salon Ext. 151 <br>"
      +" The Gourmet Market Ext. 166 <br>"
      +" Drugstore Ext. 162 <br>"
      +" Doctor’s Office Ext. 160 <br>"
      +" Laundry Ext. 167 <br> <br>",
      title : 'Telephone Directory',
      image: 'img/telephone_directory.jpg',
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
