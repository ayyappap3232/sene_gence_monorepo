//

import {gql} from '@apollo/client';

export const GET_CUSTOMER_CART = gql`
{
  customerCart{
    id
    email
    billing_address{
      firstname
      lastname
      company
      city
    }
    items{
      id
      prices{
        price{
          value
        }
        discounts{
          amount{
            currency
}
          label
        }
      }
      product{
        color
        description{
          html
        }
        fashion_size
        fashion_style
        has_video
        image{
          url
          label
        }
        name
      }
      
      quantity
    }
    
  }
}
`