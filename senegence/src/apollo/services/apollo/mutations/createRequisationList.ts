//Create an empty requisition list
//Ex: name: "Frequently Ordered Products"

import { gql } from "@apollo/client";


export const CREATE_REQUISATION_LIST = gql`
mutation CreateRequisationList($name: String!, $description: String){
  createRequisitionList(input:{
    name: $name
    description: $description
  }
  ) {
    requisition_list {
      uid
      name
      description
    }
  }
}
`

export interface Root {
    data: Data
}
  
export interface Data {
createRequisitionList: CreateRequisitionList
}

export interface CreateRequisitionList {
requisition_list: RequisitionList
}

export interface RequisitionList {
uid: string,
name: string,
description: string
}