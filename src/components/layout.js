import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, Navbar} from "react-bootstrap";
import ui from "../../ui.json";

let shop = ui.custom.shop;

export default ({children}) => (
    <div>
        <div style={{margin: `3rem auto`, maxWidth: 850, padding: `0 1rem`}}>
            <header style={{marginBottom: `1.5rem`}}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {shop === "list" ? (
                                <Nav.Link href="/shop_list/">Shop</Nav.Link>
                            ) : (
                                <Nav.Link href="/shop_block/">Shop</Nav.Link>
                            )}
                            <Nav.Link href="/cart/">My Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
        <div>
            {children}
        </div>
    </div>
);
