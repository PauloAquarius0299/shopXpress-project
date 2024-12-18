import {render as rltRender} from '@testing-library/react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import authReducer from '../../features/auth/authSlice';
import { BrowserRouter as Router } from 'react-router-dom';


function reducer(ui, {
    preloadedState,
    store = configureStore({ reducer: {auth: authReducer},
    preloadedState}),
    ...renderOptions

} = {}
) {
    function Wrapper({children}){
        return(
            <Provider store={store}>
                <Router>{children}</Router>
            </Provider>
        )
    }
    return rltRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react';
export { reducer } 