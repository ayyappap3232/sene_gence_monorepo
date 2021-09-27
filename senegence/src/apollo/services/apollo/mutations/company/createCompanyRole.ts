//Create a new company role

// PermissionsArray Ex: [
//     "Magento_Company::index"
//     "Magento_Company::view"
//     "Magento_Company::view_account"
//     "Magento_Company::edit_account"
//     "Magento_Company::view_address"
//     "Magento_Company::edit_address"
//     "Magento_Company::contacts"
//     "Magento_Company::payment_information"
//     "Magento_Company::shipping_information"
//     "Magento_Company::user_management"
//     "Magento_Company::roles_view"
//     "Magento_Company::roles_edit"
//     "Magento_Company::users_view"
//     "Magento_Company::users_edit"
//     "Magento_Company::credit"
//     "Magento_Company::credit_history"
//   ]

import {gql} from '@apollo/client';

export const CREATE_COMPANY_ROLE = gql`
mutation CreateCompanyRole($name: String!, $permissions: [String]!){
  createCompanyRole(
    input: {
      name: $name
      permissions: $permissions
    }
  ) {
    role {
      id
      name
      permissions {
        id
        text
        sort_order
        children {
          id
          text
          sort_order
        }
      }
    }
  }
}
`

export interface Child {
    id: string;
    text: string;
    sort_order: number;
}

export interface Permission {
    id: string;
    text: string;
    sort_order: number;
    children: Child[];
}

export interface Role {
    id: string;
    name: string;
    permissions: Permission[];
}

export interface CreateCompanyRole {
    role: Role;
}

export interface Data {
    createCompanyRole: CreateCompanyRole;
}

export interface RootObject {
    data: Data;
}
