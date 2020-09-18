import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth2103486Saga from '../features/EmailAuth2103486/redux/sagas';
import CalendarView11103478Saga from '../features/CalendarView11103478/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth2103486Saga,
CalendarView11103478Saga,
    
  ]);
}