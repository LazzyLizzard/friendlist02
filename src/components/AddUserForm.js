import React, { Component, PropTypes } from 'react';

class AddUserForm extends React.Component {

    render () {
        return (

            <form action="">

                <div>
                    Name: <input type="text"
                            name="name"
                            placeholder="name" />
                </div>

                <div>Last name <input type="text"
                                      name="lastName"
                                      placeholder="last (family) name" />
                </div>

                <button type="submit">go</button>

            </form>

        )
    }

}


export default AddUserForm;