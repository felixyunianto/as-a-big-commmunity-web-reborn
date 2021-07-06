import React, { Component } from "react";
import Navbar from "../parts/Navbar";
import AllEventList from "../components/AllEventList";

export default class EventList extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AllEventList />
      </div>
    );
  }
}
