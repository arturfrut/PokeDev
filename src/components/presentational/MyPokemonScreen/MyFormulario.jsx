import React from 'react'
import '../../../styles/components/MyFormulario.css'

export const MyFormulario = () => {
    return (
        <section className = 'MyFormulario__section'>
            <h5 className = 'GOLD'>CONTACT</h5>
            <h2 className = "title">Get In Touch </h2>
            <p>If you have any suggestion, project or even you want to say “hello”, <br />
            please fill out the form below and I will reply you shortly.</p>

            <form className="MyFormulario__form">
		
                <input className="MyFormulario__input" type="text" placeholder="Name *"/>
                <input className="MyFormulario__input" type="text" placeholder="Email *" required/>
                <input className="MyFormulario__input" type="text" placeholder="Phone "/>
                <textarea className="MyFormulario__message" type="text" placeholder="Message"></textarea>
                <input className="MyFormulario__submit" id="MyFormulario__submit" type="submit" value="SEND MESSAGE"/>

            </form>
        </section>
    )
}