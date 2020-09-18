import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp27103482Reducer from '../features/SignUp27103482/redux/reducers'
import CalendarView11103478Reducer from '../features/CalendarView11103478/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp27103482: SignUp27103482Reducer,
CalendarView11103478: CalendarView11103478Reducer,

});