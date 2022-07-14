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

class DishDetail extends Component {
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
  }

  render() {
    const tam = this.props.detail;
    if (tam != null) {
      class PrintTable extends Component {
        constructor(props) {
          super(props);
          //   const test = this.props.mang.map((e) => {
          //     return new Date(e.date);
          //   });
        }
        render() {
          return (
            <div>
              {this.props.mang.map((e) => {
                return (
                  <React.Fragment>
                    <p>{e.comment}</p>
                    <p>
                      --{e.author},{String(new Date(e.date))}
                    </p>
                  </React.Fragment>
                );
              })}
            </div>
          );
        } // render của Printable
      }

      return (
        //return của DishDetail
        <React.Fragment>
          <div className="col-12 col-md-5 mt-1">
            <Card>
              <CardImg width="100%" src={tam.image} alt={tam.name} />
              <CardBody>
                <CardTitle>{tam.name}</CardTitle>
                <CardText>{tam.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 mt-1">
            <h2>Comments</h2>
            <PrintTable mang={tam.comments} />
          </div>
        </React.Fragment>
      );
    } else {
      return <div></div>;
    }
  } // không thể dùng hàm forEach hay các function nào khác (for, while) trong dấu {} bên trong JSX được, {} chỉ được dùng để chứa biểu thức gán hoặc tính toán, nên nếu ta muốn trả về 1 mảng thì dùng cách tạo mảng bằng map như  printTable
}
export default DishDetail;
