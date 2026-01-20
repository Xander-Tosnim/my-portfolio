import './About.css'


function About() {

    return(
        <div className='about'>
            <div className='about-content'>
                <h2>&lt;About Me /&gt;</h2>
                <p>Hi! My name is Md. Tosnim Rahman Mumin. I am a full-stack web developer based on PERN stack. Learned from Codecademy.</p>
            </div>
            <div className='about-img'>
                <img src="/my-image-cropped.JPG" alt="" />
            </div>
        </div>
    )
}

export default About;