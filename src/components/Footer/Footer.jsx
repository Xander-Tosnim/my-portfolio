import './Footer.css'

function Footer() {

    return(
        <footer className='footer'>
            <h2>&lt;Want To Contact With Me /&gt;</h2>
            <ul className='contact-list'>
                <li><img src="/icons/call1.png" alt="phone img" />Number: +880 1739-334038 (Whatsapp)</li>
                <li><img src="/icons/email.png" alt="" />Email:tosnimila69@gmail.com</li>
                <li><img src="/icons/linkedin.png" alt="" />LinkedIn: <a href="https://www.linkedin.com/in/tosnim-rahman-243872321" target='blank'>Tosnim Rahman</a></li>
            </ul>
        </footer>
    )
}

export default Footer;