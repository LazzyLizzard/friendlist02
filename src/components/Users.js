import React, { Component, PropTypes } from 'react';
import UserListItem from './UserItem';

const userList = {

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

class User extends React.Component {
    render () {
        return <div>
            <UserListItem listToPass={userList} />
        </div>;
    }
}
export default User;