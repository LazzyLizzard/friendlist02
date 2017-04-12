import React, { Component, PropTypes } from 'react';
//import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import * as FriendsActions from '../actions/FriendsActions';
import { UsersList, AddUserForm } from '../components';

//@connect(state => ({
//    friendlist: state.friendlist
//}))
export default class UserListApp extends Component {

    //static propTypes = {
    //    friendsById: PropTypes.object.isRequired,
    //    dispatch: PropTypes.func.isRequired
    //}

    render () {
        //const { friendlist: { friendsById }, dispatch } = this.props;
        //const actions = bindActionCreators(FriendsActions, dispatch);

        return (
            <div>
                <h1>The UsersList</h1>

                //<AddFriendInput addFriend={actions.addFriend} />
                //<FriendList friends={friendsById} actions={actions} />
            </div>
        );
    }
}

