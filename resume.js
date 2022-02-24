// ---  Skills Section  --- //

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6)",
  "Bootstrap",
  "SASS",
  "Git",
  "Flexbox",
  "Grids",
  "SVG"
];

const Skills = (props) => {
  return (
    <div>
      <h4 className="skills-title">SKILLS</h4>
      <ul className="skills-list">
          {
            props.skills.map( skill =>
              <li key={ skill }>{ skill }</li>
            )
          }
      </ul>
    </div>
  )
}

// ---  School Section  --- //

const schools = [
  {
    id: '1',
    school: "California State University",
    major: "Liberal Studies, B.A.",
    time: "May 2020",
  },
  {
    id: '2',
    school: "Treehouse",
    major: "Front End Web Development Techdegree",
    time: "Feb 2022",
  }
];

const Schools = (props) => {
  return (
    <div className="my-3">
      <p className="fs-6 fw-bold">{ props.school }</p>
      <p>{ props.major }</p>
      <p>{ props.time }</p>
    </div>
  )
}

const Education = () => {
  return (
    <div>
      {schools.map( school =>
        <Schools 
          key={ school.id }
          school={ school.school }
          major={ school.major }
          time={ school.time }
        />
      )}
    </div>
  )
}

// ---  Job Section  --- //

const jobs = [
  {
    id: '1',
    company: "Treehouse",
    title: "Front End Web Development Techdegree",
    time: "Aug 2021 - Feb 2022",
    roles: [
      "Gained proficiency in the fundamentals of the web and used those skills to build real-world projects",
      "Utilized the Fetch API and integrated a JavaScript search function to display a faux employee directory that lets users navigate through various search functions",
      "Develop animated web dashboard using Javascript that displays data and can change in real time based on user selection",     
      "Skilled in writing clean and concise HTML5, CSS3, and JavaScript (ES6) code in addition to following best practices",
      "Designed and styled user-friendly webpages by way of Bootstrap, Flexbox, and Grids"
    ]
  },
  {
    id: '2',
    company: "Fieldwork Brewing",
    title: "Taproom Associate",
    time: "Aug 2020 - Feb 2021",
    roles: [
      "Provide excellent table service to guests including inputting orders in the POS, running food and drinks, opening and closing checks, clearing plates and glassware",
      "Maintain the highest level of customer service and professionalism with guests, management, and coworkers",
      "Follow checklists and standard operating procedures as well as demonstrate flexibility in scheduling and assist as needed with ensuring all shifts are appropriately staffed",
      "Maintain full knowledge of ingredients and other pertinent information about beer and food being served as well as educate all guests about the beer and food available on the current menu"
    ]
  },
  {
    id: '3',
    company: "Eko Health",
    title: "Quality Assurance Intern",
    time: "Oct 2019 - Mar 2020",
    roles: [
      "Process and handle returns and complaints of EKO devices",
      "Assist with quality control and regulatory processes by investigating devices, reporting issues, and following HIPAA policies to protect user data",
      "Gather feedback to enhance usability and overall product experience for users to better increase customer satisfaction",
      "Monitored all outcomes and discrepancies of both hardware and software testing with accuracy",
      "Provided accurate and complete data entry records for inspections and submitted required reports to the VP of Quality and Regulatory Affairs",
      "Reviewed and recommended compliance issues to meet quality specifications"
    ]
  },
  {
    id: '4',
    company: "Equinox Fitness",
    title: "Front Desk Associate",
    time: "Nov 2017 - Feb 2019",
    roles: [
      "Respond to member questions, concerns and discrepancies",
      "Provide the highest level of customer service to members, prospective members, and guests and provided answers to member questions, concerns, and/or discrepancies",
      "Update member's accounts if needed as well as maintain an orderly and clean work area",
      "Fulfilled clerical duties including scheduling appointments, maintaining and updating client records, and collecting bill payments",
      "Aid other departments with other related tasks"
    ]
  }
];

const Card = (props) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h5 className="company fw-bold text-uppercase">{ props.company }</h5>
        <h5 className="time fw-bold">{ props.time }</h5>
      </div>
      <h6 className="title fst-italic">{ props.title }</h6>
      
      <ul className="roles">
        {
          props.roles.map( role =>
            <li key={ role }>{ role }</li>
          )
        }
      </ul>
    </div>
  )
}

const Container = () => {
  return (
    <div className="job-container">
      {jobs.map( job =>
        <Card 
          key={ job.id }
          company={ job.company }
          title={ job.title }
          time={ job.time }
          roles={ job.roles }
        />
      )}
    </div>
  )
}

// ---  Render Section  --- //

ReactDOM.render(
  <Skills skills={ skills } />,
  document.getElementById('skills')
);

ReactDOM.render(
  <Education schools={ schools } />,
  document.getElementById('schools')
);

ReactDOM.render(
  <Container jobs={ jobs } />,
  document.getElementById('job-positions')
);

