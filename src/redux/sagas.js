import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LIST_CUSTOMERS } from "./action-types";

import { customerActions } from './actions';
import { CustomerService } from "./services";

const _customerService = new CustomerService();

function* listCustomersSaga() {
  try {
    const response = yield call(_customerService.list);
    if (!response.message) {
      yield put(customerActions.listCustomersSucceed(response.data));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* listCustomersWatcher() {
  yield takeEvery(LIST_CUSTOMERS, listCustomersSaga);
}


export default function* customerSaga() {
  yield all([
    fork(listCustomersWatcher),
  ]);
}
