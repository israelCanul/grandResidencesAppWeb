import React, { Component } from "react";
import ListPrincipalItems from "./listItems";

import Cookie from "../cookie";
import ReactDOM from "react-dom";

class MenuPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: false,
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
  componentWillMount() {
    if (Cookie.getCookie("intro") == "") {
      window.location = "index.html";
    }
  }
  renderList() {
    if (this.state.window.width <= 1500) {
      return (
        <ListPrincipalItems
          location="intro.html"
          items={[
            {
              label: "General Information",
              img: "img/room_bed_1200.jpg",
              link: "general-information-menu.html",
            },
            {
              label: "Royal Care Standard",
              img: "img/rcs_1_1200.jpg",
              link: "royal_care_standard.html",
            },
            {
              label: "Restaurants",
              img: "img/breakfast_onbeach_1200.jpg",
              link: "restaurants-menu.html",
            },
            {
              label: "activities program",
              img: "img/pool_1200.jpg",
              link: "activities.html",
            },
            {
              label: "kids club",
              img: "img/kids-club_1200.jpg",
              link: "kids-club.html",
            },
            {
              label: "golf",
              img: "img/golf_1200.jpg",
              link:
                "https://royalresorts.com/wp-content/uploads/2017/03/golf.pdf",
            },
          ]}
          id="list-items-component"
          className="list-group"
        />
      );
    } else {
      return (
        <ListPrincipalItems
          location="intro.html"
          items={[
            {
              label: "General Information",
              img: "img/room_bed_2048.jpg",
              link: "general-information-menu.html",
            },
            {
              label: "Royal Care Standard",
              img: "img/rcs_1_2048.jpg",
              link: "royal_care_standard.html",
            },
            {
              label: "Restaurants",
              img: "img/breakfast_onbeach_2048.jpg",
              link: "restaurants-menu.html",
            },
            {
              label: "activities program",
              img: "img/pool_2048.jpg",
              link: "activities.html",
            },
            {
              label: "kids club",
              img: "img/kids-club_2048.jpg",
              link: "kids-club.html",
            },
            {
              label: "golf",
              img: "img/golf_2048.jpg",
              link:
                "https://royalresorts.com/wp-content/uploads/2017/03/golf.pdf",
            },
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
ReactDOM.render(<MenuPrincipal />, document.getElementById("app"));
