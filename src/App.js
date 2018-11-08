import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome'
import {connect} from 'react-redux'
import {handleMenu} from "./action/NavAction";
import Burger from "./components/Burger";
import Nav from "./components/Nav"
import {BrowserRouter,Route} from 'react-router-dom'
import Portfolio from './components/Portfolio'
import About from './components/About'

class App extends Component {

  render() {
      return (
          console.log(this.props),
          <BrowserRouter>
      <div className="App">
          <Burger isActivated={this.props.isActivate} handleClick={this.props.handleMenu} className="static"/>
          <Nav isActivated={this.props.isActivate} handleClick={this.props.handleMenu} className="static"/>
          <Route exact path="/" component={Welcome}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <p className="footer">Fell free to contact me ^^ : <a href="mailto:edmmonchan@gmail.com" target="_top">edmmonchan@gmail.com</a></p>

      </div>

          </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
        isActivate : state.MenuReducer.burgerIsActive
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        handleMenu : ()=>{dispatch(handleMenu())}
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(App)
