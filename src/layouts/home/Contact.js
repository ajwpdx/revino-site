import React, { useState } from 'react'

const Contact = (props) => {

    const [contactOpen, isContactOpen] = useState(false)
    return(
        <section id='contact'>
            <div className='section-container'>
                <h3>The refillable bottle economy is here to stay.</h3>
                <h3><strong>How are you going to play a role?</strong></h3>
                <button>Fill Out Form</button>
            </div>

            <div className='modal-dialog'>
                <h3>Stay in Touch!</h3>
                <form>
                <label for='name'>Your name</label>
                <input id='name'/>
                <label for='email'>Your email</label>
                <input id='email'/>
                <label for='message'>Your message (optional)</label>
                <textarea id='message' type='textarea'/>
                <button>Submit</button>
                </form>
                
            </div>
        </section>
    )

}

export default Contact