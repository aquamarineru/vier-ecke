import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
import { Button } from './'
import Link from 'next/link';


export default function ContactForm() {
    const [popup, setPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const form = useRef();
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    function hidePopup() {
        setPopup(false);
    }
    function sendEmail(e) {
        e.preventDefault();
        const { name, email, message } = e.target.elements;
        const templateParams = {
            from_name: name.value,
            from_email: email.value,
            message: message.value,
          };

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
            .then((result) => {
                setPopupMessage('Nachricht erfolgreich gesendet!');
                setPopup(true);
                form.current.reset(); 
            }, (error) => {
                setPopupMessage('Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
                setPopup(true);
                console.log(error.text);
            });
    }
  return (
    <div className="flex justify-around font-light text-sm items-center pt-5">
        <form 
        ref={form}
        action=""
        onSubmit={sendEmail} >
        <div className='relative h-[4rem]'>
        <input 
        type="text" 
        name="name" 
        placeholder='Ihr Name' 
        required
        className=" border-b-[1px] border-blue bg-transparent px-3 py-3 mt-2 w-full  "/>
        </div>
        <div className='relative  h-[4rem]'>
            <input 
            type="email" 
            name="email"  
            placeholder='Ihre E-Mail' 
            required
            className=" border-b-[1px] border-blue bg-transparent px-3 py-3 mt-2 w-full  "/>
        </div>
        <div className='relative  h-[4rem]'>
            <textarea
            name='message' 
            cols="30" 
            rows="3" 
            placeholder='Senden Sie mir Ihre Nachricht'
            required
            className=" border-b-[1px] border-blue bg-transparent px-3 py-3 mt-2 w-full  ">
            </textarea>
        </div>
        <div className="mt-10 flex items-center">
            <input 
            type="checkbox" 
            id="agreeTerms" 
            required
            defaultChecked={false} 
            className="mr-2"/>
            <label 
            htmlFor="agreeTerms" 
            className="text-xs text-dark w-[350px] ">
                *Ich stimme&nbsp;zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage gem&auml;&szlig; der 
                <Link 
                href="/datenschutz"
                className='hover:text-blue hover:underline'> Datenschutzerkl&auml;rung </Link>
                verarbeitet werden.
            </label>
        </div>
        <div className='mt-4 '>
            <Button
            aria-label="Submit form"
            type="submit">
                Absenden
            </Button>
        </div>
        {popup && <div className="absolute top-0 left-0 right-0 bottom-0 bg-dark/80 flex items-center justify-center">
            <div className="bg-light rounded-md p-5 flex flex-col items-center justify-center gap-5">
                <p className="text-dark text-center">{popupMessage}</p>
                <button
                aria-label="Close popup"
                role="Close popup"
                onClick={hidePopup}
                className="bg-dark text-light px-4 py-2 rounded-md"
                >
                    Schließen
                </button>
            </div>
        </div>}

        </form>
    
</div>
  )
}
