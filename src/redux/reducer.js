import {
  LIST_CUSTOMERS,
  LIST_CUSTOMERS_SUCCESS
} from "./action-types";

const INITIAL_STATE = {
  items: [],
  loading: true,
}

export default function customerReducer(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case LIST_CUSTOMERS:
      return {
        ...state,
        loading: true,
      };

    case LIST_CUSTOMERS_SUCCESS:
      return {
        ...state,
        items: payload.customers.map(customer => ({ ...customer, fullTextSearchString: customer.name + ' ' + customer.policyNo })),
        loading: false,
      };

    default:
      console.log(type);
      return state;
  }
}
