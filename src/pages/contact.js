import React from 'react';
import ContactCard from "../components/Cards/contactcard";
import contact from '../contact.json'

class Contact extends React.Component {

    state = {
        contact
    };

  render () {
    return(
        <>
        {this.state.contact.map(info =>(
            <ContactCard
            key={info.id}
            format={info.format}
            details={info.details} />
        ))}
        </>
    )}
}

export default Contact;