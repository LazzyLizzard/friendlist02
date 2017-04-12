import React, { Component, PropTypes } from 'react';
import UserListItem from './UserItem';

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

class UsersList extends React.Component {
    render () {
        return <div>

            <h3>Users list</h3>

            <UserListItem listToPass={userListList} />
        </div>;
    }
}
export default UsersList;