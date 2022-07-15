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
  constructor(props) {
    super(props); // tương tự với việc ghi this.props = props
    console.log("Detail constructor");
  }

  render() {
    console.log("Detail render");
    const tam = this.props.detail;
    if (tam != null) {
      class PrintTable extends Component {
        constructor(props) {
          super(props);
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
        <div className="container">
          <div className="row">
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
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  } // không thể dùng hàm forEach hay các function nào khác (for, while) trong dấu {} bên trong JSX được, {} chỉ được dùng để chứa biểu thức gán hoặc tính toán, nên nếu ta muốn trả về 1 mảng thì dùng cách tạo mảng bằng map như  printTable

  componentDidMount() {
    console.log("Detail componentDidMount");
  }
  // componentDidMount đặt trước hay đằng sau render đều được nhưng khi chạy nó sẽ luôn chạy sau render
  componentDidUpdate() {
    console.log("Detail update");
  }
}
export default DishDetail;
