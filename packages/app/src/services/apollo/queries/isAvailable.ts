import {gql} from '@apollo/client'

//The isEmailAvailable query checks whether the specified email has already been used to create a customer account. 
//A value of true indicates the email address is available, and the customer can use the email address to create an account.

export const IS_EMAIL_AVAILABLE = gql`
    query IsEmailAvailable($email: String!){
        isEmailAvailable(email: $email) {
            is_email_available
        }
    }
`

//The isCompanyEmailAvailable query checks whether the specified email is valid for company registration. 
//The specified email can be the same as an existing customer or company administrator. 
//If the email matches an existing company email, the query returns a false value.

export const IS_COMPANY_EMAIL_AVAILABLE = gql`
    query IsCompanyEmailAvailable($email: String!){
        isCompanyEmailAvailable(email: $email){
            is_email_available
        }
    }
`

export const IS_COMPANY_ADMIN_EMAIL_AVAILABLE = gql`
    query IsCompanyAdminEmailAvailable($email: String!){
        isCompanyAdminEmailAvailable(email: $email){
            is_email_available
        }
    }
`

//The isCompanyRoleNameAvailable query checks whether a company role name is valid for creating into a company.

export const IS_COMPANY_ROLE_NAME_AVAILABLE = gql`
    query IsCompanyRoleNameAvailable($name: String!){
        isCompanyRoleNameAvailable(name: $name) {
            is_role_name_available
        }
    }
`

export const IS_COMPANY_USER_EMAIL_AVAILABLE = gql`
    query IsCompanyUserEmailAvailable($name: String!){
        isCompanyUserEmailAvailable(email: "roni_cost@example.com"){
            is_email_available
        }
    }
`