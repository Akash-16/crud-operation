import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import userSlice from './sliceMethod';

// export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const store = configureStore({reducer: rootReducer, middleware:[thunk]});
export const store = configureStore({
    reducer: {
        user: userSlice
    }, middleware: [thunk]
});
