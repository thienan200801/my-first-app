import { gql } from '@apollo/client';

export const GET_CUSTOMER = gql`
    query Query($customerId: ID!) {
        customer(customerId: $customerId) {
        id
        items {
            productId
            color
            size
            quantity
        }
        name
        location
        }
    }
`
export const GET_PRODUCT_DETAILS = gql`
    query Query($productId: ID!) {
        product(id: $productId) {
        id
        name
        price
        stock
        colors {
            name
        }
        pictures
        categories
        sizes
        }
    }
`