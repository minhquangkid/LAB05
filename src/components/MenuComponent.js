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
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />

      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    // tham số truyền vào props của Menu có thuộc tính là monan, nó nằm ở file App.js
    return (
      // return của hàm map
      <div key={dish.id} className="col-12  col-md-5 mt-1">
        <RenderMenuItem dish={dish} onClick={props.click} />
      </div>
    );
  });

  return (
    // của cú pháp render
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
// muốn cho file js khác có thể import biến Menu được thì phải export nó
