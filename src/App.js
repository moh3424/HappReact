import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import ContentDashboard from "./pages/ContentDashboard"
import ContentCalendar from "./pages/ContentCalendar"
import ContentEditor from "./pages/ContentEditor"
import ContentDatatable from "./pages/ContentDatatable"


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/dashboard" component={ContentDashboard} />
        <Route path="/calendar" component={ContentCalendar} />
        <Route path="/editor" component={ContentEditor} />
        <Route path="/data" component={ContentDatatable} />
      </BrowserRouter>
    );
  }
}
