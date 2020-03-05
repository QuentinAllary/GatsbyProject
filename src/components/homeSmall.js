import React, {Component} from "react";

export default class HomeSmall extends Component {
    render() {
        return (
            <div style={{margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`}}>
                <div>
                    <p style={{float: "left"}}>
                        <img style={{height: "150px", width: "150px"}} src={this.props.logo} alt="logo"/>
                    </p>
                    <h1 style={{textAlign: "center"}}>{this.props.title}</h1>
                </div>
                <div>
                    <p style={{paddingTop: "5%"}}>{this.props.description}</p>
                </div>
                <div>
                    <h2 style={{marginTop: "3rem", marginBottom: "3rem", textAlign: "center"}}>Contributors</h2>
                    <p style={{
                        marginTop: "3rem",
                        marginBottom: "3rem",
                        textAlign: "center"
                    }}>{this.props.contributors}</p>
                </div>
            </div>
        );
    }
}
