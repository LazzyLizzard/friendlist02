import React, { Component, PropTypes } from 'react';
import UserListItem from './userItem';

const userList = {

    list: {
        1: {
            name: 'john',
            lastName: 'doe'
        },
        2: {
            name: 'john',
            lastName: 'doe'
        }
    }
}

class User extends React.Component {
    render () {
        return <div>User aaa</div>;
    }
}
export default User;