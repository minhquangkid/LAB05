"use strict";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
//import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES, // DISHES được import ở trên
    };
  }

  render() {
    return (
      // <div className="App">
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">This is Bootstrap</NavbarBrand>
          </div>
        </Navbar>
        <Menu monan={this.state.dishes} />
      </div>
    );
  }
} // props trong tag Menu là dishes vơi tham số được truyền vào chính là biến state của class App ở trên
// monan là thuộc tính được tạo để thêm vào trong props của Menu, đóng vai trò như là 1 key của object Menu vậy
export default App;
