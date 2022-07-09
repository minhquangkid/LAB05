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

class Menu extends Component {
  /* khi sử dụng class component phải theo cú pháp sau :
  class Menu extends Component { 
    constructor(props) {
    super(props); 
    this.state = {};
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
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish }); // chỉ có thể thay đổi giá trị của state bằng lệnh setState
  }

  renderDish(dish) {
    if (dish != null) {
      const printTable = dish.comments.map((e) => {
        // <p>{e.id}</p>;
        console.log(e.id);
        return (
          <React.Fragment>
            <p>{e.comment}</p>
            <p>{e.author}</p>
          </React.Fragment>
        ); // một khi đã dùng JSX trong return thì không thể dùng cách lệnh js bên ngoài tag html như console.log được
      });
      return (
        <React.Fragment>
          <div className="col-12 col-md-5 mt-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 mt-1">
            <h2>Comments</h2>
            <div>{printTable}</div>
            {/* <div>
              {dish.comments.forEach((e) => {
                return <p>{e.id}</p>;
              })}
            </div> */}
          </div>
        </React.Fragment>
      );
    } else {
      return <div></div>;
    }
  } // không thể dùng hàm forEach hay các function nào khác (for, while) trong dấu {} bên trong JSX được, {} chỉ được dùng để chứa biểu thức gán hoặc tính toán, nên nếu ta muốn trả về 1 mảng thì dùng cách tạo mảng bằng map như  printTable

  // tạo hàm render
  render() {
    // tạo hàm menu với this.props là của class Menu ở trên
    const menu = this.props.monan.map((dish) => {
      // tham số truyền vào props của Menu có thuộc tính là monan, nó nằm ở file App.js
      return (
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
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    ); // class component chạy ở constructor trước rồi mới đến render nên ta tạo hàm renderDish ở đó trước, chú ý phải dùng điều kiện (dish != null) kèm theo vì nếu ko có nó sẽ bị lỗi nó null ko thể render được
  }
}

export default Menu;
// muốn cho file js khác có thể import biến Menu được thì phải export nó
