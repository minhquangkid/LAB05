"use strict";
// được sử dụng như 1 container component
"use strict";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
//import "./App.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES, // DISHES được import ở trên
      selectedDish: null,
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId }); // chỉ có thể thay đổi giá trị của state bằng lệnh setState
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">This is Bootstrap</NavbarBrand>
          </div>
        </Navbar>

        <Menu
          monan={this.state.dishes}
          click={(dishID) => this.onDishSelect(dishID)}
        />
        <DishDetail
          detail={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}
{
  /* <Menu></Menu> là phần thân trên hiện thị 4 cái ảnh thức ăn ban đầu */
}
{
  /* <DishDetail></DishDetail> là phần khi nhấn vào sẽ hiện chi tiết từng món ăn */
}
export default Main;
