import React, { Component, PropTypes } from 'react';
import UserListItem from './userItem';

const userList = {

    list: {
        1: {
            name: 'john',
            lastName: 'doe'
        },
        2: {
            name: 'aaa',
            lastName: 'doe'
        }
    }
};

class User extends React.Component {
    render () {
        return <ul>
            <UserListItem listToPass={userList} />
        </ul>;
    }
}
export default User;