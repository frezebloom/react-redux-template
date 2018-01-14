import { combineReducers } from 'redux';

import showBlock from './showBlock'
import { items, itemsHasErrored, itemsIsLoading } from './items';

export default combineReducers({
   showBlock,
   items,
   itemsHasErrored,
   itemsIsLoading
})
