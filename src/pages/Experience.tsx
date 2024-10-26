const Experience = () => {
  return (
    <section className="py-5 wow" data-wow-delay="0.1s">
      <h2 className="title pb-3 mb-5 text-start">Expericence</h2>
      <div className="border-start border-2 border-light pt-2 ps-5">
        {experiences?.map((experience) => (
          <div className="position-relative mb-4">
            <span
              className="fas fa-arrow-right fs-4 text-light position-absolute"
              style={{ top: -5, left: -50 }}
            ></span>
            <h5 className="mb-1 text-start">{experience?.position}</h5>
            <p className="mb-2 text-start">
              {experience?.company} |{" "}
              <small>
                {experience?.start} - {experience?.end || "Current"}
              </small>
              <br />
              <small className="text-muted">
                {experience?.type} | {experience?.location}
              </small>
            </p>
            <p className="text-justify">{experience?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

const experiences = [
  {
    company: "Bizzntek Ltd.",
    position: "Software Engineer Intern",
    start: "July 2022",
    end: "September 2022",
    type: "On-site",
    location: "Uttara, Dhaka",
    description:
      "MERN Stack Development Intern with hands-on experience in building responsive React JS applications. Contributed to front-end projects utilizing react-bootstrap, Redux, and developed foundational skills in MongoDB and Node JS.",
  },
  {
    company: "Bizzntek Ltd.",
    position: "Software Engineer Trainee",
    start: "October 2022",
    end: "March 2023",
    type: "On-site",
    location: "Uttara, Dhaka",
    description:
      "Trainee Developer focused on strengthening MERN stack expertise, especially in React JS. Created interactive UIs using reactstrap and TailwindCSS, with experience in integrating REST APIs and GraphQL for data-driven applications.",
  },
  {
    company: "Bizzntek Ltd.",
    position: "Associate Software Engineer",
    start: "April 2023",
    end: "June 2024",
    type: "On-site",
    location: "Uttara, Dhaka",
    description:
      "Associate MERN Stack Developer contributing to scalable, user-focused applications with a React JS front end. Proficient in MongoDB, PostgreSQL, and Node JS, with additional experience in Chart JS and Signature-Pad for interactive elements.",
  },
  {
    company: "Therap (BD) Ltd.",
    position: "Associate Software Engineer",
    start: "July 2024",
    type: "On-site",
    location: "Banani, Dhaka",
    description:
      "Front-End Associate Developer skilled in React JS, Redux, Bootstrap, and other front-end frameworks. Experienced in creating intuitive, responsive interfaces with react-bootstrap and TailwindCSS, focusing on delivering efficient and engaging user experiences.",
  },
];
