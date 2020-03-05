import React from "react";
import Layout from "../components/layout";
import {Badge, Button, ListGroup} from "react-bootstrap";
import PayPal from "../components/paypal";

export default class Cart extends React.Component {
    render() {
        let items = [];
        let total = 0;
        const ID = 0;
        const TITLE = 1;
        const PRICE = 2;

        const decr = id => {
            let n = sessionStorage.getItem("item_" + id);
            sessionStorage.setItem("item_" + id, n - parseInt(1, 10));
            console.log(sessionStorage.getItem("item_" + id));

            if (sessionStorage.getItem("item_" + id) === "0") {
                remove(id);
            }
            this.forceUpdate();
        };

        const add = id => {
            let n = sessionStorage.getItem("item_" + id);
            sessionStorage.setItem("item_" + id, 1 + parseInt(n, 10));
            console.log(sessionStorage.getItem("item_" + id));
            this.forceUpdate();
        };

        const remove = id => {
            let copy = sessionStorage.getItem("cart").split("||");
            const newList = copy.filter(item => item[0] !== id);
            sessionStorage.setItem("cart", newList.join("||"));
            this.forceUpdate();
        };

        if (sessionStorage.getItem("cart") !== null) {
            items = sessionStorage.getItem("cart").split("||");
        }

        const items_set = new Set(items);
        const uniqItems = [...items_set];
        let list = uniqItems.map(items => {
            let item = items.split("&&");
            let title = item[TITLE];
            let id = item[ID];
            let price = item[PRICE];

            if (price !== undefined) {
                total += parseInt(price, 10) * parseInt(sessionStorage.getItem("item_" + id), 10);

                return (
                    <ListGroup.Item as="li">
                        <Badge letiant="info">{sessionStorage.getItem("item_" + id)}</Badge>
                        {"  "}
                        {title}
                        <Button style={{marginLeft: `1rem`, float: "right"}} onClick={() => remove(id)}>x</Button>
                        <Button style={{marginLeft: `1rem`, float: "right"}} onClick={() => add(id)}>+</Button>
                        <Button style={{marginLeft: `1rem`, float: "right"}} onClick={() => decr(id)}>-</Button>
                    </ListGroup.Item>
                );
            }
        });

        return (
            <Layout>
                <ListGroup as="ul">{list}</ListGroup>
                <p>Total : {total} €</p>
                <PayPal price={total}/>
            </Layout>
        );
    }
}
