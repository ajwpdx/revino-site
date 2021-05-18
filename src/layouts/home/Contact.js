import React, { useState } from 'react'
import ContactDialog  from './ContactDialog'

const Contact = (props) => {

    const [contactOpen, setContactOpen] = useState(false)

    const openContactDialog = (evt) =>{
        setContactOpen(true)
        console.log(contactOpen)
    }

    return(
        <section id='contact'>
            <div className='section-container'>
                <h3>The refillable bottle economy is here to stay.</h3>
                <h3><strong>How are you going to play a role?</strong></h3>
                <button onClick={openContactDialog}>Fill Out Form</button>
            </div>
            {contactOpen && <ContactDialog setContactOpen={setContactOpen}/>}
        </section>
    )

}

export default Contact