import { useEffect } from "react";
import { connect } from "react-redux";
import { apiRequestTrends } from "../actions";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Spinner from "react-bootstrap/Spinner";
import "react-lazy-load-image-component/src/effects/blur.css";
function Trend(props) {
  const apiRequest = props.apiRequestTrends;
  useEffect(() => {
    apiRequest();
  }, [apiRequest]);

  return (
    <Container fluid className="categoryView">
      <Row>
        {props.apiDatas.map((trends) => (
          <>
            {props.isLoading ? (
              <Col lg={4} className="mt-4 spinnerAlign ">
                {" "}
                <Spinner animation="border" role="status">
                  {" "}
                </Spinner>
              </Col>
            ) : (
              <Col lg={4} md={6} className="mt-3 justifyCenter">
                {" "}
                <LazyLoadImage
                  effect="blur"
                  className="imageSize"
                  src={trends.images.original.url}
                />
              </Col>
            )}
          </>
        ))}
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    apiDatas: state.apiDatas,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { apiRequestTrends })(Trend);
