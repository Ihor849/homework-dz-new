import {createStore} from 'redux'
import { devToolsEnhancer } from '@redux-devtools/extension';

const  enchancer = devToolsEnhancer;

const initialState= {
  contacts: [],
  filter: '',
}
const rootReducer=(state=initialState, action)=>{
  return state;
}


export const store = createStore(rootReducer,enchancer);