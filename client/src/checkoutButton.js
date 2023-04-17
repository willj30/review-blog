import { gql, useLazyQuery } from '@apollo/client';

const CHECKOUT = gql`
    query Query {
        createCheckoutSession
}`

function CheckoutButton() {
    const [startCheckout, { loading, error, data } ] = useLazyQuery(CHECKOUT, {
        onCompleted: (queryData) => {
            console.log(queryData);
            let data = JSON.parse(queryData.createCheckoutSession);
            let checkoutUrl = data.url;
            window.location.assign(checkoutUrl);
        }
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;
    console.log(data);

    return (
        <button className="btn btn-info btn-donate" onClick={() => startCheckout()}>
            Donate
        </button>
    );
};

export default CheckoutButton;