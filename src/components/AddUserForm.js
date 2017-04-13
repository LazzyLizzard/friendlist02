import React, { Component, PropTypes } from 'react';

class AddUserForm extends Component {

    //static propTypes = {
    //    name: PropTypes.func.isRequired,
    //    lastName: PropTypes.func.isRequired
    //};

    constructor(props, context) {
        super(props, context);

        // заранее описаное состояние
        this.state = {
            key: '',
            name: '',
            lastName: ''
        }
    }

    componentWillReceiveProps = (newProps) => {
        const { editId, userToEdit: { name: editName, lastName: editLastName} } = newProps;
        //if(editId || editName || editLastName) {
            this.setState({
                key: editId,
                name: editName,
                lastName: editLastName,
            })
        //}
    }

    handleNameChange = (e, fieldName) => {
        this.setState({[fieldName]: e.target.value})
    }


    handleSubmit(event) {

        event.preventDefault();

        if (this.props.editId) {

            this.props.handleEditUser(this.state);
            this.setState({
                key: '',
                name: '',
                lastName: ''
            })

        } else {

            const user = {
                key: this.state.key,
                name: this.state.name,
                lastName: this.state.lastName
            }
            if (user.name && user.lastName) {
                this.props.handleAddUser(user);

                this.setState({
                    key: '',
                    name: '',
                    lastName: ''
                })
            }
        }




    };


    render() {
        return (
            <div>

                <h3>Add user</h3>

                <div>user</div>

                <form action="" onSubmit={this.handleSubmit.bind(this)}>

                    <div>
                        Name:
                        <input type="text"
                               onChange={(e) => { this.handleNameChange(e, 'name') }}
                               name="name"
                               value={this.state.name}
                               placeholder="name"/>
                    </div>

                    <div>Last name
                        <input type="text"
                               value={this.state.lastName}
                               onChange={(e) => { this.handleNameChange(e, 'lastName') }}
                               name="lastName"
                               placeholder="last (family) name"/>
                    </div>

                    <button type="submit">{ this.props.editId ? 'save' : 'add' }</button>

                </form>
            </div>
        )
    };

}


export default AddUserForm;