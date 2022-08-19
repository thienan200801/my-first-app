import { gql } from '@apollo/client';

export const SET_LOCATION = gql`
    mutation UpdateCustomer($customer: CustomerInput!) {
        updateCustomer(customer: $customer) {
        id
        }
    }
`