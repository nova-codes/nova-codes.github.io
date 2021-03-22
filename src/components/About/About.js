import './About.css'
import pdf from '../../utils/docs/hge_resume.pdf';

const About = () => {
    return (
        <div>
            <h1 id='about'> about </h1>
            <div className='catwrap'>
                <div className='desc2'>
                    <img src='./images/me.png' alt='My face' />
                    <p className='about-me'> Cosmic Chill Lounge is the product of six sleepless months balancing a full-time job and learning full stack web development. This portfolio was put together over the course of two weeks between work, class, and bites of food.</p> 
                    
                    <p className='about-me'>Hi there! My name is Hannah Elliott and I'm a web developer. My specialty is front end, using technologies like React, Handlebars, Javascript, jQuery, and good ol' HTML and CSS.</p>

                    <p className='about-me'>I have been doing web design since the early days of the internet, back when geocities and angelfire were <em>the</em> places to build and host your drag and drop web page. From geocities, I moved to Neopets to continue my journey into development - the guild pages back in the spring of '97 allowed users to input their own HTML and CSS.</p>


                    <p className='about-me'>Learning how to finally get things to do what I needed them to do really allowed me to play around more with design elements. The knowledge, coupled with my horrenous perfectionist tendencies, let me push the boundaries of what can be achieved with a <strike>little</strike> lot of coffee and patience.</p>

                    <p className='about-me'>Lastly, I put my heart and soul into the appearance of any website or application I build. Creating an atmosphere or experience on the web is something I am passionate about, and I would love to bring that attention to detail to your business. <span className='color'>♥</span></p>

                    <span className='resume-btn'><a href={pdf} target='_blank' rel='noreferrer'> view my resume here </a></span>
                </div>
            </div>
        </div>
    )
}

export default About
