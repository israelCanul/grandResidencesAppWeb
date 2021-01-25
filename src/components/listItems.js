import React,{Component} from 'react';



export default class ListItems extends Component{
  constructor(props){
    super(props);
    this.state={
      window : {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      },
      items:this.props.items,
    }
  }
  renderItems(){
    let that = this;
    let items =  this.state.items.map((item,key)=>{
      console.log(key % 2);
        return (<li className={`item ${((key % 2) != 0)?"impar":"par"}`}  key={key}>
          <a href={`${item.link? item.link:this.props.location}`} >
            <div className="wrap-bg">
              <img src={item.img} className="item-bg" />
              <div className="bg"></div>
            </div>
            <div className="wrap-content">
              <span>{`${item.label}`}</span>
            </div>
          </a>
        </li>);
    });
    console.log(items);
    return items;
  }
  render(){
    return(
      <div className={this.props.className} id={this.props.id}>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}
