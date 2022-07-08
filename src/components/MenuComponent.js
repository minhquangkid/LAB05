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
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  // tạo hàm render
  render() {
    // tạo hàm menu
    const menu = this.props.dishes.map((dish) => {
      return (
        // sử dụng thẻ media
        // <div key={dish.id} className="col-12 mt-5">
        //   <Media tag="li">
        //     <Media left middle>
        //       <Media object src={dish.image} alt={dish.name} />
        //     </Media>
        //     <Media body className="ml-5">
        //       <Media heading>{dish.name}</Media>
        //       <p>{dish.description}</p>
        //     </Media>
        //   </Media>
        // </div>

        // sử dụng thẻ Card
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
    );
  }
}

export default Menu;
// muốn cho file js khác có thể import biến Menu được thì phải export nó
