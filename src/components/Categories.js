import React from "react";
import { CategoriesData } from "./CategoriesData";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
function Categories() {
  return (
    <Container fluid>
      <div className="ui three stackable cards mt-1">
        {CategoriesData.map((category) => (
          <div className="card">
            <div className="image">
              <Link to={`/images/${category.category}`.toLowerCase()}>
                <img
                  src={category.image}
                  alt={category.category}
                  className="categoryImages"
                />
              </Link>
            </div>
            <div className="content">
              <div className="header">
                <Link to={`/images/${category.category}`.toLowerCase()}>
                  <span>{category.category}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Categories;
