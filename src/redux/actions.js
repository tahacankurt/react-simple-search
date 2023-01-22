import {
  LIST_CUSTOMERS_SUCCESS,
  LIST_CUSTOMERS
} from "./action-types";

export const customerActions = {
  listCustomers: customers => ({
    type: LIST_CUSTOMERS,
    payload: { customers }
  }),

  listCustomersSucceed: customers => ({
    type: LIST_CUSTOMERS_SUCCESS,
    payload: { customers }
  })

};
