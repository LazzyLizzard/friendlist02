import React, { Component, PropTypes } from 'react';
import UserListItem from './UserItem';



class UsersList extends React.Component {



    render () {
        const usersList = this.props.usersList && this.props.usersList.list;
        return <div>

            <h3>Users list</h3>
            <ul>
                {Object.keys(usersList).map((key) => {
                    //let k = key;
                    return <UserListItem
                        key={key}
                        name={usersList[key].name}
                        lastName={usersList[key].lastName}
                        userId={key}
                        setEditMode={this.props.setEditMode}
                         />
                })}
            </ul>

        </div>;
    }
}
export default UsersList;