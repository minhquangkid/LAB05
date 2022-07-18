"use strict";
// được sử dụng như 1 container component
"use strict";
import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES, // DISHES được import ở trên
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
//nếu router không khớp với bất kỳ tuyến nào trong số này là home hoặc menu thì đều được chuyển hướng tới home thông qua Redirect
{
  /* <Menu></Menu> là phần thân trên hiện thị 4 cái ảnh thức ăn ban đầu */
}
{
  /* <DishDetail></DishDetail> là phần khi nhấn vào sẽ hiện chi tiết từng món ăn */
}
export default Main;
