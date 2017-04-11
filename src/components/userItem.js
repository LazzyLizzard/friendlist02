import React, { Component, PropTypes } from 'react';

class UserListItem extends Component {
    render() {
        //return (
            Object.keys(userList).map((key) => {
                return <li>{{ userList[key].name }}</li>
            }
            //<li>{name}</li>
        );
    }
}

export default UserListItem;