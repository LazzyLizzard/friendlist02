/**
 * общий контейнер приложения
 */

import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

//import { createStore, renderDevTools } from '../utils/devTools';

import UserListApp from './UserListApp';
//import * as reducers from '../reducers';

//const reducer = combineReducers(reducers);
//const store = createStore(reducer);

import UsersList from './../components/Users'


export default class App extends Component {
    render() {
        return (
            <div>

                <UsersList />


            </div>
        );
    }
}
