import React from "react";
import { connect } from "react-redux";
import {
  selectedCategoryForSearch,
  searchGifs,
  searchWallpapers,
  unSplashSearch,
} from "../actions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
function SearchResultsView(props) {
  const checker = () => {
    switch (props.selectedCategoryForSearchData) {
      case "Gif":
        return props.gifsFromSearch.map((images) => (
          <Col lg={4} className="mt-4 justifyCenter">
            {" "}
            <LazyLoadImage
              effect="blur"
              className="size"
              src={images.images.original.url}
            />
          </Col>
        ));
      case "Wallpapers":
        return [
          props.wallpapersFromSearch.map((images) => (
            <Col lg={4} className="mt-4 justifyCenter">
              {" "}
              <LazyLoadImage
                effect="blur"
                className="size"
                src={images.webformatURL}
              />
            </Col>
          )),

          props.unSplashFromSearch.map((images) => (
            <Col lg={4} className="mt-4 justifyCenter">
              {" "}
              <LazyLoadImage
                effect="blur"
                className="size"
                src={images.urls.regular}
              />
            </Col>
          )),
        ];
      default:
        return <div>Somethings went wrong.</div>;
    }
  };
  const gifWarning = () => {
    return (
      <div className="gifWarning">
        <img
          src={require("../images/logooo.png")}
          alt={"NinjaPics"}
          id="wellcomeImage"
        />
      </div>
    );
  };
  const warningChecker = () => {
    if (
      !props.gifsFromSearch.length &&
      props.selectedCategoryForSearchData === "Gif"
    ) {
      return gifWarning();
    }
  };
  useEffect(() => {
    warningChecker();
  });

  return (
    <Container fluid>
      <Row>
        {checker()}
        {warningChecker()}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    gifsFromSearch: state.gifsFromSearch,
    wallpapersFromSearch: state.wallpapersFromSearch,
    unSplashFromSearch: state.unSplashFromSearch,
    selectedCategoryForSearchData: state.selectedCategoryForSearchData,
  };
};

export default connect(mapStateToProps, {
  searchGifs,
  searchWallpapers,
  selectedCategoryForSearch,
  unSplashSearch,
})(SearchResultsView);
