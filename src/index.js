import React from "react"
import ReactDOM from "react-dom"
import "./scss/styles.scss"
import PageContainer from "./components/PageContainer"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>      
      <PageContainer/>
    </Router>
  </React.StrictMode>, 
  document.getElementById("root")
)