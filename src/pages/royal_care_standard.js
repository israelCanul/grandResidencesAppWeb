//https://royalresorts.com/wp-content/uploads/2017/03/activities-program.pdf
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../components/navheader";
import Item from "../components/itemdescription";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description:
        "At Royal Resorts, the health and safety of our guests and employees is our top priority. We have always operated to the highest cleaning and sanitation standards, but to meet the COVID-19 challenge, we are raising them even more with a new level of care and hygiene called the Royal Care Standard. As part of the Royal Care Standard and our continued commitment to your safety, additional hygiene and sanitation protocols have being implemented in guest rooms, public areas, offices and back of house where staff work behind the scenes, in accordance with guidelines issued by the Mexican Department of Health and the World Health Organization.",
      title: "Our Royal Care Standard",
      image: "img/rcs_2.jpg",
    };
  }
  render() {
    return (
      <div id="app-wrap">
        <Item
          info={this.state}
          links={[
            {
              url:
                "https://grandresidencesbyroyalresorts.com/guest-services/pdf/rsc-english.pdf",
              name: "English",
            },
            {
              url:
                "https://grandresidencesbyroyalresorts.com/guest-services/pdf/rsc-spanish.pdf",
              name: "Spanish",
            },
            {
              url:
                "https://grandresidencesbyroyalresorts.com/guest-services/pdfs/Covid-9Testing.pdf",
              name: "Covid-19 Tests",
            },
          ]}
        />
      </div>
    );
  }
}

ReactDOM.render(<GeneralInformation />, document.getElementById("app"));
