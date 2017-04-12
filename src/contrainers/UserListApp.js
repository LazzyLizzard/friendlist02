import React, { Component, PropTypes } from 'react';
//import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import * as FriendsActions from '../actions/FriendsActions';
import { UsersList, AddUserForm } from '../components';



export default class UserListApp extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    static propTypes = {
        //    friendsById: PropTypes.object.isRequired,
        //dispatch: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.setState({ usersList: this.props.usersList })
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

    render() {
        //const { friendlist: { friendsById }, dispatch } = this.props;
        //const actions = bindActionCreators(FriendsActions, dispatch);



        return (
            <div>
                <h1>The UsersList</h1>
                <AddUserForm handleAddUser={this.handleAddUser} />
                <UsersList usersList={this.state.usersList}/>
            </div>
        );
    }
}

