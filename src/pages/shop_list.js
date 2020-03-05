import React from "react";
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import {Button, Media} from "react-bootstrap";
import Truncate from "react-truncate";

export default ({data}) => {
    function addToCart(node) {
        sessionStorage.setItem("cart", sessionStorage.getItem("cart") +
            node.mysqlId + "&&" + node.title + "&&" + node.price + "||");
        sessionStorage.setItem("item_" + node.mysqlId, "1");
    }

    return (
        <Layout>
            <ul className="list-unstyled">
                {data.allMysqlShoppingList.edges.map(({node}) => (
                    <Media as="li" style={{margin: `1.5rem auto`, padding: `0 1rem`, maxWidth: `850px`}}>
                        <Link to={`/item_${node.mysqlId}`} activeClassName="active" style={{color: "black"}}>
                            <img width={64} height={64} className="mr-3" src={node.photo_1} alt={node.title}/>
                        </Link>
                        <Media.Body>
                            <h5>
                                <Link to={`/item_${node.mysqlId}`} activeClassName="active" style={{color: "black"}}>
                                    {node.title}
                                </Link>
                                <small className="text-muted">&nbsp;&nbsp;{node.price}€</small>
                            </h5>
                            <Truncate lines={2} ellipsis={<span style={{color: "blue"}}> more...</span>}>
                                <p>{node.description}</p>
                            </Truncate>
                            <br/>
                            <br/>
                            <Button onClick={() => addToCart(node)}>Add to Cart</Button>
                            <hr/>
                        </Media.Body>
                    </Media>
                ))}
            </ul>
        </Layout>
    );
}

export const query = graphql`
    query MyQuery {
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
