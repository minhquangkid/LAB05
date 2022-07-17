import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/" style={{ color: "orange" }}>
              This is Bootstrap
            </NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Tieu de</h1>
                <p>something to write</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
{
  /* 
  <Jumbotron> chỉ định một số thông tin có thể được hiển thị ở trên cùng trong header của tôi
  */
}
export default Header;
