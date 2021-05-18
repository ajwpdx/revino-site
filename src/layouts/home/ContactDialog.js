import React from 'react'
import twoBottles from '../../images/two-bottle-side-graphic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ContactDialog = (props) => {

    const closeDialog = (evt) => {
        props.setContactOpen(false)
    }

    return (
        <div className='modal-dialog'>
            <FontAwesomeIcon icon={faTimes} className='cancel-x' onClick={closeDialog}/>
            <form>
            <h3>Stay in Touch!</h3>
                <label for='name'>Your name</label>
                <input id='name' />
                <label for='email'>Your email</label>
                <input id='email' />
                <label for='message'>Your message (optional)</label>
                <textarea id='message' type='textarea' />
                <button>Submit</button>
            </form>
        <div className='modal-side-graphic'>
        <img src={twoBottles}/>
        </div>
        </div>
    )
}

export default ContactDialog