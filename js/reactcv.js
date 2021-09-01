'use strict';

let Header = (props) => {
    return (
        <header>
            <img id="profile_pic" src="img/icon.png"/>
            <div id="blurb">
                <h1>{props.name}</h1>
                <q>{props.phrase}</q>
            </div>
        </header>
    )
}

let BodyItem = (props) => {
    return (
        <div>
            <h2 id="sectionTitle">{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )

}
let Body = (props) => {
    let compAbilities = props.abilities.map((d) => <li>{d}</li>);
    return (
        <div>
            <BodyItem title="Biography" content={props.bio}/>
            <BodyItem title="Education" content={props.education}/>
            <BodyItem title="Job Experience" content={props.jobExperience}/>
            <BodyItem title="Abilities" content={compAbilities}/>
            <BodyItem title="Schedule" content={props.schedule}/>
        </div>
    )
}
let Footer = (props) => {
    return (
        <div>
            <BodyItem title="Contact Info"/>
            <footer>
                <a href={"tel:".concat(props.cellphone)}>{props.cellphone}</a>
                <a href={"mailto:".concat(props.mail)}>{props.mail}</a>
                <a href={"https://" + props.github}>{props.github}</a>
                <a href={"https://" + props.linkedin}>{props.linkedin}</a>
                <p>Copyright {props.name}</p>
            </footer>
        </div>
    )
}
let CV = (props) => {
    let person = props.person
    return (
        <div>
            <Header name={person.name} phrase={person.phrase}/>
            <Body bio={person.bio} education={person.education} jobExperience={person.jobExperience}
                  abilities={person.abilities} schedule={person.schedule}/>
            <Footer name={person.name} cellphone={person.cellphone} mail={person.mail} github={person.github}
                    linkedin={person.linkedin}/>
        </div>
    )
}


let student = {
    name: "Migue Valer Castro",
    phrase: "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.",
    cellphone: "(+52 ) 55 3508 7893",
    mail: "osv@outlook.com",
    github: "github.com/Mauville",
    linkedin: "linkedin.com/in/pasder",
    bio: `When I was volunteering on one of the poorest states here in Mexico, I got tasked with creating a set of scripts to help a farm worker keep track of business data. After finishing the job, the farmer
invited me and my team to have dinner with his family in his house. When we were done, he told us it was
thanks to the work that we did for him that he could enjoy a meal with his family once again. At that moment
I understood that software engineering isn't just programming; it's about making people lives better through
it. My passion (aside from programming) is learning new things from multiple spheres; I've gone from the arts, to finances and negotiation. I enjoy solving hard problems and leading teams through complicated projects. `,
    education: `Bachelor’s Degree in Computer Science, ITESM (CCM), Mexico Current GPA: 90/100 Expected graduation: Dec, 2022`,
    jobExperience: `Internship@Nutrihana: Designed and implemented the architecture and front-end for an E-commerce site, using AWS EC2, Woocommerce and Wordpress. Sales increased by 13% in Q1 after deployment. 
    `,
    abilities: ["SQL", "Python", "Java", "React", "Docker", "Git", "MapReduce", "Hardening"],
    schedule: "tba"
}

ReactDOM.render(
    <CV person={student}/>,
    document.getElementById('root')
);

