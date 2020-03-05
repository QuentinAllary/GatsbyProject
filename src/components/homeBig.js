import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default class HomeBig extends Component {
    render() {
        return (
            <div>
                <p style={{marginTop: "3rem", marginBottom: "3rem", textAlign: "center"}}>
                    <img src={this.props.logo} alt="logo" style={{maxWidth: "600px"}}/>
                </p>
                <hr/>
                <h1 style={{marginTop: "3rem", textAlign: "center"}}>{this.props.title}</h1>
                <Container>
                    <p style={{marginTop: "1.5rem", textAlign: "center"}}>{this.props.description}</p>
                </Container>
                <h2 style={{marginTop: "5rem", textAlign: "center"}}>Contributors</h2>
                <p style={{marginTop: "1.5rem", textAlign: "center"}}>{this.props.contributors}</p>
            </div>
        );
    }
}
