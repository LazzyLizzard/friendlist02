import React, { Component, PropTypes } from 'react';

class AddUserForm extends Component {

    //static propTypes = {
    //    name: PropTypes.func.isRequired,
    //    lastName: PropTypes.func.isRequired
    //};

    constructor(props, context) {
        super(props, context);
        this.state = {name:'', lastName:''}
    }

    handleNameChange = (e, id) => {
        this.setState({[id]: e.target.value})
    }



    render() {
        return (
            <div>

                <h3>Add user</h3>

                <form action="" className="myform" onSubmit={this.handleSubmit.bind(this)}>

                    <div>
                        Name: <input type="text"
                                     onChange={(e) => { this.handleNameChange(e, 'name') }}
                                     name="name"
                                     value={this.state.name}
                                     placeholder="name"/>
                    </div>

                    <div>Last name <input type="text"
                                          value={this.state.lastName}
                                          onChange={(e) => { this.handleNameChange(e, 'lastName') }}
                                          name="lastName"
                                          placeholder="last (family) name"/>
                    </div>

                    <button type="submit">go</button>

                </form>
            </div>
        )
    };

    handleSubmit(event) {

        event.preventDefault();

        const user = {
            name: this.state.name,
            lastName: this.state.lastName,
        }
        if(user.name && user.lastName) {
            this.props.handleAddUser(user);
            this.setState({
                name:'',
                lastName:''
            })
        }



    };

}


export default AddUserForm;