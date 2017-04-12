import React, { Component, PropTypes } from 'react';

class UserListItem extends Component {

    render() {

        let list = this.props.listToPass.list,
            items = Object.keys(list).map((key) => {
               return <li key={key.toString()}>{list[key].name} {list[key].lastName}</li>
            });

        return <ul>{items}</ul>;

    }
}
export default UserListItem;
