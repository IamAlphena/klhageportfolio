import React from 'react';
import ContactCard from "../components/Cards/contactcard";
import EmailCard from '../components/Cards/emailcard';
import contact from '../contact.json'

class Contact extends React.Component {

    state = {
        contact
    };

  render () {
    return(
        <>
            <EmailCard />
        {this.state.contact.map(info =>(
            <ContactCard
            key={info.id}
            format={info.format}
            details={info.details}
            info={info.info} />
        ))}
        </>
    )}
}

export default Contact;