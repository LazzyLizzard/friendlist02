import React, { Component, PropTypes } from 'react';

class UserListItem extends Component {

    render() {

        let ul = this.props.listToPass.list;

        return <div>
            Object.keys(ul).map((key) => {
            <li>{{ul[key].name}}</li>
        }
        </div>

    }
}
export default UserListItem;