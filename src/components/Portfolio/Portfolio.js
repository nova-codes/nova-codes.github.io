import './Portfolio.css'
import Card from '../Card/Card'
import projects from '../../utils/projects'

const Portfolio = () => {

    const card = (project) => {
        return (
            <Card 
                key={project.id} 
                title={project.title} 
                repo={project.href} 
                image={project.img} 
                alt={project.alt} 
            />
        );
    }

    return (
        <div>
            <h1> featured work </h1>
            <div>
                {projects.map(card)}
            </div>
        </div>
    )
}

export default Portfolio
