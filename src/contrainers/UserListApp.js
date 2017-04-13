import React, { Component, PropTypes } from 'react';
//import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import * as FriendsActions from '../actions/FriendsActions';
import { UsersList, AddUserForm } from '../components';


export default class UserListApp extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            editId: false,
        };
    }

    static propTypes = {
        //    friendsById: PropTypes.object.isRequired,
        //dispatch: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.setState({
            usersList: this.props.usersList

        })
    }

    handleAddUser = (user) => {
        this.setState({
            usersList: {
                list: {
                    ...this.state.usersList.list,
                    [Object.keys(this.state.usersList.list).length + 1]: user
                }
            }
        })
    }

    handleEditUser = (user) => {

        this.setState({
            ...this.state,
            editId: false,
            usersList: {
                ...this.state.usersList,
                list: {
                    ...this.state.usersList.list,
                    [user.key]: {
                        name: user.name,
                        lastName: user.lastName
                    }
                }
            }
        })
    }

    setEditMode = (id) => {
        this.setState({editId: id})
    }

    render() {
        //const { friendlist: { friendsById }, dispatch } = this.props;
        //const actions = bindActionCreators(FriendsActions, dispatch);
        const editId = this.state.editId

        const userToEdit = editId ? this.state.usersList.list[editId] : false;
        console.log()

        return (
            <div>
                <h1>The UsersList</h1>
                <AddUserForm editId={editId} userToEdit={userToEdit} handleAddUser={this.handleAddUser}
                             handleEditUser={this.handleEditUser}/>
                <UsersList setEditMode={this.setEditMode} usersList={this.state.usersList}/>
            </div>
        );
    }
}

