"use strict";
import React, { Component } from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
  /* khi sử dụng class component phải theo cú pháp sau :
  class Menu extends Component { 
    constructor(props) {
    super(props); 
    this.state = {};
    }
     render(){
        return ()
         }
  }
trong đó bắt buộc phải có phần render , mấy phần kia ko có cũng được
  */
  constructor(props) {
    super(props); // tương tự với việc ghi this.props = props
    this.state = {
      selectedDish: null,
    };
    console.log("Menu constructor");
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish }); // chỉ có thể thay đổi giá trị của state bằng lệnh setState
  }

  // tạo hàm render
  render() {
    console.log("Menu render");
    // tạo hàm menu với this.props là của class Menu ở trên
    const menu = this.props.monan.map((dish) => {
      // tham số truyền vào props của Menu có thuộc tính là monan, nó nằm ở file App.js
      return (
        // return của hàm map
        <div key={dish.id} className="col-12  col-md-5 mt-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    // mt-5 là căn lề margin top 5px , ml-5 là căn lề margin left 5px (xem lại video cho chắc)
    // các thẻ Media và các class của nó đều đã được viết tắt cú pháp, lên web bootstrap để hiểu rõ

    return (
      // của cú pháp render
      <div className="container">
        <div className="row">
          {/* <Media list>{menu}</Media> */}
          {menu}
        </div>
        <div className="row">
          <DishDetail detail={this.state.selectedDish} />
        </div>
      </div>
    ); // class component chạy ở constructor trước rồi mới đến render nên ta tạo hàm renderDish ở đó trước, chú ý phải dùng điều kiện (dish != null) kèm theo vì nếu ko có nó sẽ bị lỗi nó null ko thể render được
  }
  componentDidMount() {
    console.log("Menu componentDidMount");
  }

  componentDidUpdate() {
    console.log("Menu update");
  }
  // xem lại slide bài giảng tutor để biết thứ tự xuất hiện cho chính xác của chúng
}

export default Menu;
// muốn cho file js khác có thể import biến Menu được thì phải export nó
