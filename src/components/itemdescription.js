import React,{Component} from 'react';
/*

links={[
  {url:"#",name : "item 1"},
  {url:"#",name : "item 1"},
  {url:"#",name : "item 1"}
]}

*/

class Item extends Component{
  constructor(props){
    super(props);
    this.state={
      image : '',
      window : {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      }
    }
    this.onResizeComponent = this.onResizeComponent.bind(this);
    this.renderList = this.renderList.bind(this);
    window.addEventListener("resize",this.onResizeComponent);// se agrega un listener que lea el tamaño de la ventana
  }
  onResizeComponent(e){
    this.setState({window : {
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }});
  }
  renderList(){
    let image = this.props.info.image
    let newImg = "";
    if(this.state.window.width <= 1500 ){
      newImg = image.replace(".jpg","_1200.jpg");
    } else{
      newImg = image.replace(".jpg","_2048.jpg");
    }
    return newImg;
  }
  render(){

    var {links,phone,info} = this.props;

    var btns = links.map((link,id)=>{
      return(
        <div key={id} className="btn">
          <a href={link.url} >
            {link.name}
          </a>
        </div>
      );
    });
    var phoneText;
    if(phone){
      phoneText = <p className="content-section-description-text-phone">Phone : {phone}</p>;
    }
    return(
      <div className="content-section">
        <div className="content-section-img">
           <img src={this.renderList()} />
        </div>
        <div className="content-section-description">
          <h1 className="content-section-description-title">
            {info.title}
          </h1>
          <div className="content-section-description-text justity">
              <p dangerouslySetInnerHTML={{__html: info.description}} />
              {phoneText}
              <div className="content-section-description-text-btns">
                {btns}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
