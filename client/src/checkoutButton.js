import { gql, useLazyQuery } from '@apollo/client';

const CHECKOUT = gql`
    query Query {
        Checkout
}`

function CheckoutButton() {
    const [startCheckout, { loading, error, data } ] = useLazyQuery(CHECKOUT, {
        onCompleted: (queryData) => {
            console.log(queryData);
            let data = JSON.parse(queryData.Checkout);
            console.log(data);
            let checkoutUrl = data.url;
            window.location.assign(checkoutUrl);
        }
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;
    console.log(data);

    return (
        <button onClick={() => startCheckout()}>
            Checkout
        </button>
    );
};

export default CheckoutButton;