import React, { Component, PropTypes } from 'react';

class UserListItem extends Component {

    render() {


        return (
            <li>{this.props.name}{' '}{this.props.lastName}</li>
        )

    }
}
export default UserListItem;
