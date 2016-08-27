import { combineReducers } from 'redux';
import profile from './profile';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  profile,
  form: formReducer
});

export default rootReducer;
