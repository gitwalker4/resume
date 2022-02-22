const jobs = [
  {
    id: '1',
    company: "Treehouse",
    title: "Front End Web Development Techdegree",
    roles: [
      "Gained proficiency in the fundamentals of HTML, CSS, and JavaScript",
      "Learned how to write clean and concise code"
    ]
  },
  {
    id: '2',
    company: "Fieldwork Brewing",
    title: "Taproom Associate",
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
      <h2>{ props.company }</h2>
      <h5>{ props.title }</h5>
      <ul>
        
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
          { ...job }
        />
      )}
    </div>
  )
}

ReactDOM.render(
  <Container jobs={ jobs } />,
  document.getElementById('job-positions')
);