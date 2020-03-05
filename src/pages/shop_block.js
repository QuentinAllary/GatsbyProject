import React from "react";
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import Truncate from "react-truncate";
import {Button, Card, CardColumns} from "react-bootstrap";

export default ({data}) => {
    function addToCart(node) {
        sessionStorage.setItem("cart", sessionStorage.getItem("cart") +
            node.mysqlId + "&&" + node.title + "&&" + node.price + "||");
        sessionStorage.setItem("item_" + node.mysqlId, "1");
        console.log(sessionStorage.getItem("cart"));
    }

    return (
        <Layout>
            <CardColumns style={{margin: `1.5rem auto`, padding: `0 1rem`, maxWidth: `850px`}}>
                {data.allMysqlShoppingList.edges.map(({node}) => (
                    <Card>
                        <Card.Header>
                            {node.title}
                            <small className="text-muted">&nbsp;&nbsp;{node.price}€</small>
                        </Card.Header>
                        <Link to={`/item_${node.mysqlId}`} activeClassName="active" style={{color: "black"}}>
                            <Card.Img variant="top" src={node.photo_1}
                                      style={{height: "150px", width: "150px", display: "block", margin: "auto"}}/>
                        </Link>
                        <Card.Body style={{height: `150px`, padding: "0.45rem"}}>
                            <Card.Text>
                                <Truncate lines={4} ellipsis={<span style={{color: "blue"}}> more...</span>}>
                                    <p>{node.description}</p>
                                </Truncate>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={() => addToCart(node)}>Add to Cart</Button>
                        </Card.Footer>
                    </Card>
                ))}
            </CardColumns>
        </Layout>
    );
};

export const query2 = graphql`
    query MyQuery2 {
        allMysqlShoppingList {
            edges {
                node {
                    title
                    price
                    photo_1
                    mysqlId
                    description
                }
            }
            totalCount
        }
    }
`;
