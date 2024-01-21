import React from 'react'
import { Container, Title } from '../components'

export default function Impressum() {
  return (
    <div className='w-full h-full pt-24 pb-10 bg-linear-gradient text-dark mx-auto px-3 lg:px-10'>
        <Container className='lg:px-24 lg:w-2/3'>
        <Title>Impressum</Title>
            <div className='flex flex-col justify-center mt-3'>
                <h3 className='font-semibold text-xl'>Angaben gemäß § 5 TMG:</h3>
                <div className='flex gap-3'>
                    <h4 className='font-semibold'>Firmenname:</h4>
                    <p>"Vier Ecken" Hausmasterservices </p>
                </div>
                <div className='flex gap-3'>
                    <h4 className='font-semibold'>Geschäftführer:</h4>
                    <p>Konstantinos Kolpaxidis</p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='font-semibold'>Adresse:</h4>
                    <p>Sudetenstr. 11</p>
                    <p>82538 Geretsried</p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='font-semibold'>Kontakt:</h4>
                    <div className='flex flex-row font-light items-center gap-2'>
                        <label className='font-light'>
                            Telefon: 
                        </label> 
                        <a 
                        href="tel:+491626983111" 
                        target="_blank"
                        className='hover:text-lemon hover:underline transform transition-colors'>+491626983111</a>
                    </div>
                    <div className='flex flex-row font-light items-center gap-2'>
                        <label className='font-light'>
                            Email: 
                        </label> 
                        <a 
                        href="mailto:info.vierecken@gmail.com" 
                        target="_blank"
                        className='hover:text-lemon hover:underline transform transition-colors'>info.vierecken@gmail.com</a>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold'>Umsatzsteuer-ID:</h4>
                    <p>169/238/90126</p>
                </div>
                <h3 className='text-xl font-semibold'>
                Haftungsausschluss (Disclaimer):
                </h3>
                <h4 className='font-semibold'>Haftung für Inhalte</h4>
                <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect;&nbsp;7&nbsp;Abs.1&nbsp;TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect;&nbsp;8&nbsp;bis 10&nbsp;TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu&nbsp;&uuml;berwachen oder nach Umst&auml;nden zu&nbsp;forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p>

                <h4 className='font-semibold'>Haftung für Links</h4>
                <p>Unser Angebot enth&auml;lt Links zu&nbsp;externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

                <h4 className='font-semibold'>Urheberrecht</h4>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            </div>
        </Container>
            
    </div>
  )
}
