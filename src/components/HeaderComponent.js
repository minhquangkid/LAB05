import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    // để chỉ định rằng this.toggleNav sẽ hiện có sẵn dưới dạng this.toggleNav (ràng buộc nó thay vì phải dùng arrow function như các bài trước)
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    //Navbar expand="md" tức là thanh điều hướng sẽ được hiển thị ở dạng đầy đủ chỉ cho kích thước màn hình trung bình đến cực lớn, và Collapse sẽ thu gọn lại đối với màn hình cỡ nhỏ (nếu giá trị thuộc tính isOpen là true thì được hiển thị, còn false thì ko)
    // NavbarToggler sẽ thêm 1 nút 3 gạch khi navbar được thu gọn trong chế độ nhỏ, giúp cho người dùng hiển thị các mục, kích hoạt bằng event onclick, sẽ làm thay đổi trạng thái true hoặc false của isNavOpen trong Collapse
    //NavbarBrand className="mr-auto" sẽ thêm 1 quyền ký quỹ càng nhiều càng tốt

    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                atl="logo"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1 style={{ color: "red" }}>Tieu de</h1>
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
