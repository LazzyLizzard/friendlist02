import React, { Component, PropTypes } from 'react';

class AddUserForm extends Component {

    render() {
        return (
            <div>

                <h3>Add user</h3>

                <form action="">

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
    }
}


export default AddUserForm;