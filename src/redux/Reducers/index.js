import {combineReducers} from 'redux';
import {rankReducer} from './rankReducer';

const reducers = combineReducers({

        allRank:rankReducer,


})

export default reducers;