import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
export default function CategoryView(props) {
  const [pixaResults, setPixaResults] = useState([]);
  const [unsplashResults, setUnsplashResults] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    let category = props.match.params.category;
    axios
      .get(
        `https://pixabay.com/api/?key=25459789-16936a0114649c4b999ee26f0&q=${category}&image_type=photo&per_page=200`
      )
      .then((response) => {
        setIsloading(true);
        setPixaResults(response.data.hits);
      });
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=H2Crqny9TAW6McDMqxyE0gI79TaHNt6YkaaFEqBZgY4&query=${category}&per_page=200`
      )
      .then((response) => setUnsplashResults(response.data.results));
  }, [props.match.params.category]);
  console.log(unsplashResults);

  return (
    <Container fluid className="categoryView">
      <Row>
        {pixaResults.map((results) => (
          <>
            {isLoading ? (
              <Col lg={4} className="mt-4 justifyCenter">
                <LazyLoadImage
                  effect="blur"
                  className="imageSize"
                  src={results.webformatURL}
                />
              </Col>
            ) : (
              <Col lg={4} className="mt-4 spinnerAlign">
                {" "}
                <Spinner animation="border" role="status">
                  {" "}
                </Spinner>
              </Col>
            )}
          </>
        ))}
        {unsplashResults.map((results) => (
          <>
            {isLoading ? (
              <Col lg={4} className="mt-4 justifyCenter">
                {" "}
                <LazyLoadImage
                  effect="blur"
                  className="imageSize"
                  src={results.urls.regular}
                />{" "}
              </Col>
            ) : (
              <Col lg={4} className="mt-4 spinnerAlign">
                {" "}
                <Spinner animation="border" role="status">
                  {" "}
                </Spinner>
              </Col>
            )}
          </>
        ))}
      </Row>
    </Container>
  );
}
