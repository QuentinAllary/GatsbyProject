import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class PayPal extends React.Component {
    render() {
        const onSuccess = payment => {
            console.log("Payment successful!", payment);
        };

        const onCancel = data => {
            console.log("Payment cancelled!", data);
        };

        const onError = err => {
            console.log("Error!", err);
        };

        let env = "sandbox";
        let currency = "EUR";
        let total = this.props.price;
        let item_list = [
            {
                name: "hat",
                description: "Brown color hat",
                quantity: "5",
            },
            {
                name: "hat2",
                description: "Brown color hat",
                quantity: "5",
            },
        ];

        let paymentOptions = {
            note_to_payer: "jaze==jnzekrjnziejrnizrn",
            intent: "simon le plus bo",
        };

        const client = {
            sandbox:
                "AQsjP3Z3PUI3-wJo-IRl_9uemobh8-5fSDGMQGukhCKVK4DLm0xS87MIYjJT0H4q-4219OKFlIqdNBAd",
            production: "YOUR-PRODUCTION-APP-ID",
        };

        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                paymentOptions={paymentOptions}
            />
        );
    }
}
