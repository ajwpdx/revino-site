import React, { useState } from 'react'
import twoBottles from '../../images/two-bottle-side-graphic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const formValues = {
    email: "",
    message: "",
    name: ""
}

const ContactDialog = (props) => {

    const [formValues, setFormValues] = useState(formValues)

    const closeDialog = (evt) => {
        props.setContactOpen(false)
    }

    return (
        <div className='modal-dialog'>
            <FontAwesomeIcon icon={faTimes} className='cancel-x' onClick={closeDialog} />
            <form action="https://formsubmit.co/alexjwilliams1@gmail.com" method="POST">
                <h3>Stay in Touch!</h3>
                <label for='name'>Your name</label>
                <input type="text" id='name' name="name" required />
                <label for='email'>Your email</label>
                <input type="email" id='email' name="email" required />
                <label for='message'>Your message (optional)</label>
                <textarea type="text" id='message' name="message" type='textarea' />
                <input type="hidden" name="_subject" value="New Revino User Message" />
                <button type="submit">Submit</button>
            </form>
            <div className='modal-side-graphic'>
                <img src={twoBottles} />
            </div>
        </div>
    )
}

export default ContactDialog