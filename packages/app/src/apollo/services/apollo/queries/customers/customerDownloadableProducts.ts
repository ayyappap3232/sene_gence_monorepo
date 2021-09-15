//It retrieve the list of purchased downloadable products for the logged-in customer.

import {gql} from '@apollo/client';

export const CUSTOMER_DOWNLOADABLE_PRODUCTS = gql`
{
  customerDownloadableProducts {
    items {
      date
      download_url
      order_increment_id
      remaining_downloads
      status
    }
  }
}
`