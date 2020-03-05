import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import {Col, Container, Row} from "react-bootstrap";
import MyCarousel from "../components/myCarousel";

export default ({data}) => {
    const item = data.mysqlShoppingList;

    return (
        <Layout>
            <MyCarousel
                photo_1={item.photo_1}
                photo_2={item.photo_2}
                photo_3={item.photo_3}
            />
            <Container>
                <Row>
                    <Col md={{span: 4, offset: 5}}>{item.title} - {item.price} €</Col>
                </Row>
            </Container>
        </Layout>
    );
};
export const query = graphql`
    query($id: Int!) {
        mysqlShoppingList(mysqlId: { eq: $id }) {
            id
            photo_1
            photo_2
            photo_3
            price
            title
            mysqlId
        }
    }
`;
