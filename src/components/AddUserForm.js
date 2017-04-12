import React, { Component, PropTypes } from 'react';

class AddUserForm extends Component {

    static propTypes = {
        name: PropTypes.func.isRequired,
        lastName: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>

                <h3>Add user</h3>

                <form action="" className="myform" onSubmit={this.handleSubmit.bind(this)}>

                    <div>
                        Name: <input type="text"
                                     name="name"
                                     placeholder="name"/>
                    </div>

                    <div>Last name <input type="text"
                                          name="lastName"
                                          placeholder="last (family) name"/>
                    </div>

                    <button type="submit">go</button>

                </form>
            </div>
        )
    };

    handleSubmit(event) {

        var target = event.target;
        var inputs = target.querySelectorAll('input[type=text]');

        var data = {
            name: inputs[0].value.trim(),
            lastName: inputs[1].value.trim()
        };

        if (data.name !== '' && data.lastName !== '') {

            console.log('1')

        } else {
            console.log('0')
        }



        event.preventDefault();


    };

}



export default AddUserForm;