import './About.css'
import pdf from '../../utils/docs/hge_resume.pdf';

const About = () => {
    return (
        <div>
            <h1 id='about'> about </h1>
            <div className='catwrap'>
                <div className='desc2'>
                    <p className='about-me'> My name is Hannah Elliott and I am a data analyst by day, and a web developer by night. I was born in Ann Arbor, Michigan and at the formitive age of twelve, I moved 15 minutes away to Ypsilanti, Michigan. </p>

                    <p> I have been working as a contractor for Toyota North America for the past two years, but I have been doing web design since the days of geocities drag and drop website editing. I found an internet home in the jcink collaborative writing communities, and as the forum host expanded, I began skinning the forums I spent so much of my youth on. You can see a few of the projects I'm most proud of <a href='portfolio.html'>here</a>. </p>

                    <p className='about-me'> When the pandemic hit, I had already been working 50 hour weeks. Our ability to work from home was only the catalyst for 60 hour weeks at the hands of corporate overlords. Three months in, I applied for a job as a junior web developer, but the skills I had already taught myself weren't enough. Who knew trying to use CSS to get the same effects as javascript were so looked down on? </p>

                    <p> As month six of the state-sanctioned stay-cation loomed closer, my brother offered to help me pay for a coding bootcamp to gain the necessary knowledge to jumpstart a career in web development. I enrolled, and the rest - as they say - is history. <span className='color'>♥</span></p>

                    <span className='resume-btn'><a target='_blank' rel='noreferrer' href={pdf} > view my resume here </a></span>
                </div>
            </div>
        </div>
    )
}

export default About
