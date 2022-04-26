import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { connect } from "react-redux";
import {
  searchGifs,
  searchWallpapers,
  unSplashSearch,
  searchData,
} from "../actions";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import "../style/style.scss";

function Navbar() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  const responsiveWatcherNav = () => {
    if (screenSize.dynamicWidth >= 1070) {
      return <SearchInput />;
    } else {
      return null;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    responsiveWatcherNav();
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  });
  return (
    <div>
      <nav className="ui raised padded segment">
        <Container fluid>
          <Row>
            <Col lg={1} xs={2}>
              <div className="logoArea">
                <Link to="/">
                  <img
                    src={require("../images/logooo.png")}
                    alt="NinjaPics"
                  ></img>
                </Link>
              </div>
            </Col>
            <Col lg={4} xs={3}>
              <div className="navLinks">
                <NavLink to="/" exact>
                  <span className="mr-4">Trend Gifs</span>
                </NavLink>
                <NavLink to="/categories" className="mr-4">
                  <span>Categories</span>
                </NavLink>
                <NavLink to="/best" className="mr-4">
                  <span>Today's Best</span>
                </NavLink>
              </div>
            </Col>
            <Col lg={7} xs={7}>
              <div className="inputArea">
                <div className="responsiveInput">{responsiveWatcherNav()}</div>
                <div>
                  <Dropdown className="barMenu">
                    <Dropdown.Toggle
                      variant="black"
                      className="bar"
                      id="dropdown-basic"
                    >
                      <i class="fa-solid fa-bars"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <NavLink to="/" exact>
                          <span>Trend Gifs</span>
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink to="/categories">
                          <span>Categories</span>
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        {" "}
                        <NavLink to="/best">
                          <span>Today's Best</span>
                        </NavLink>{" "}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    gifsFromSearch: state.gifsFromSearch,
    wallpapersFromSearch: state.wallpapersFromSearch,
    searchData: state.searchData,
    unSplashFromSearch: state.unSplashFromSearch,
    selectedCategoryForSearchData: state.selectedCategoryForSearchData,
  };
};
export default connect(mapStateToProps, {
  searchGifs,
  searchWallpapers,
  unSplashSearch,
  searchData,
})(withRouter(Navbar));
