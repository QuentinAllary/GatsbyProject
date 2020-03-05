import React from "react";
import {Carousel} from "react-bootstrap";

export default class MyCarousel extends React.Component {
    render() {
        return (
            <Carousel interval="2000" class="carousel">
                <Carousel.Item>
                    <img className="d-block w-100" src={this.props.photo_1} alt="First slide"/>
                </Carousel.Item>

                {this.props.photo_2 !== "" ? (
                    <Carousel.Item>
                        <img className="d-block w-100" src={this.props.photo_2} alt="Second slide"/>
                    </Carousel.Item>
                ) : null}

                {this.props.photo_3 !== "" ? (
                    <Carousel.Item>
                        <img className="d-block w-100" src={this.props.photo_3} alt="Third slide"/>
                    </Carousel.Item>
                ) : null}
            </Carousel>
        );
    }
};
