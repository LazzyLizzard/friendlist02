import React, { Component, PropTypes } from 'react';

class UserListItem extends Component {

    editUserHandler = (user) => {

        this.props.setEditMode(this.props.userId);

    };

    render() {

        return (
            <li>
                {this.props.userId} | {this.props.name}{' '}{this.props.lastName} | <span onClick={this.editUserHandler.bind(this)}>edit</span>
            </li>
        )

    }
}
export default UserListItem;
