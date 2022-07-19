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
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderComments(comments) {
  console.log(comments);
  return (
    <div>
      {comments.mang.map((e) => {
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
// nếu bỏ đi dấu {} thì sai vì sao thì tự suy nghĩ lại
function RenderDish({ dish }) {
  console.log(dish); // dish === props.detail (là 1 object)
  return (
    <div className="col-12 col-md-5 mt-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      //return của DishDetail
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <div className="col-12 col-md-5 mt-1">
            <h2>Comments</h2>
            <RenderComments mang={props.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
