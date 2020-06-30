import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolButton/CoolButton';

const Signup = () => {
    return (
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
                label="Email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
            />
            <FormField label="IH" type="number" placeholder="e.g IH" />
            <FormField
                label="Email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
            />
            <CoolButton classes='button is-success' name='Submit'/>
        </div>
    );
};

export default Signup;
// A Navbar
// A form with
// A FormField for name
// An FormField for email
// A FormField for password
// A CoolButton for submitting the form