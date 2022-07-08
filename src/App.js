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
        {/* <p>
          Sample cho toàn bộ lab và project trong môn học Lập Trình Web
          Front-End với React với đầy đủ dependency.
        </p>
        <p>Phiên bản React hiện tại trên máy của bạn là: {React.version}</p>
        <p>Phiên bản React đã được sử dụng để thiết kế môn học: 16.14.0.</p> */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">This is Bootstrap</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
} // props trong tag Menu là dishes vơi tham số được truyền vào chính là biến state của class App

export default App;
