import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../components/navheader";
import ListPrincipalItems from "../components/listItems.js";

class GeneralInformationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      },
    };
    this.onResizeComponent = this.onResizeComponent.bind(this);
    this.renderList = this.renderList.bind(this);
    window.addEventListener("resize", this.onResizeComponent); // se agrega un listener que lea el tamaño de la ventana
  }
  onResizeComponent(e) {
    this.setState({
      window: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      },
    });
  }
  renderList() {
    if (this.state.window.width <= 1500) {
      return (
        <ListPrincipalItems
          location="restaurants-menu.html"
          items={[
            {
              label: "Faro grill",
              img: "img/faro-grill_1200.jpg",
              link: "faro-grill.html",
            },
            {
              label: "flor de canela",
              img: "img/flor-canela_1200.jpg",
              link: "flor-de-canela.html",
            },
            {
              label: "heaven beach bar",
              img: "img/breakfast_onbeach_1200.jpg",
              link: "heaven.html",
            },
            {
              label: "Afternoon Tea",
              img: "img/tea_1200.jpg",
              link: "afternoon-tea.html",
            },
            { label: "Kinoko", img: "img/kinoko.jpg", link: "kinoko.html" },
          ]}
          id="list-items-component"
          className="list-group"
        />
      );
    } else {
      return (
        <ListPrincipalItems
          location="restaurants-menu.html"
          items={[
            {
              label: "Faro grill",
              img: "img/faro-grill_2048.jpg",
              link: "faro-grill.html",
            },
            {
              label: "flor de canela",
              img: "img/flor-canela_2048.jpg",
              link: "flor-de-canela.html",
            },
            {
              label: "heaven beach bar",
              img: "img/breakfast_onbeach_2048.jpg",
              link: "heaven.html",
            },
            { label: "Kinoko", img: "img/kinoko.jpg", link: "kinoko.html" },
          ]}
          id="list-items-component"
          className="list-group"
        />
      );
    }
  }
  render() {
    return <div id="app-wrap">{this.renderList()}</div>;
  }
}

ReactDOM.render(<GeneralInformationMenu />, document.getElementById("app"));
