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


const userListList = {

    list: {
        1: {
            name: 'john',
            lastName: 'doe'
        },
        2: {
            name: 'aaa',
            lastName: 'dow'
        }
    }
};

export default class App extends Component {
    render() {
        return (
            <div>
                <UserListApp usersList={userListList} />
            </div>
        );
    }
}
