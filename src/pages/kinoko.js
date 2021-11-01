import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../components/navheader";
import Item from "../components/itemdescription";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description:
        "The fragrance of ginger,star anise and coriander fills the air ín a celebration</br></br>" +
        "of the exotic cuisines of the Far East.The tempting menu features dishes from Japan,China, Korea and Thailand. Order sushi and a signature cocktail or book your table for an íncredible evening of Teppanyaki show cooking.",
      title: "AN UNFORGETTABLE DINING EXPERIENCE AWAITS YOU IN KINOKO",
      image: "img/kinoko.jpg",
    };
  }

  render() {
    return (
      <div id="app-wrap">
        <Item
          info={this.state}
          // phone="+52 (998) 872-8130"
          links={[
            {
              url: "/guest-services/pdfs/Kinoko-Menu.pdf",
              name: "Dinner Menu",
            },
          ]}
          // links={[
          //   {
          //     url:
          //       "/guest-services/pdfs",
          //     name: "Dinner Menu",
          //   },
          //   {
          //     url:
          //       "https://www.royalresorts.com/wp-content/uploads/2017/03/desserts.pdf",
          //     name: "Dessert Menu",
          //   },
          //   {
          //     url:
          //       "https://www.royalresorts.com/wp-content/uploads/2017/03/lunch-menu.pdf",
          //     name: "Lunch Menu",
          //   },
          //   {
          //     url:
          //       "https://royalresorts.com/wp-content/uploads/2017/03/wine-list.pdf",
          //     name: "Wine List Menu",
          //   },
          // ]}
        />
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById("app"));
