import { Col, Row } from 'reactstrap';

const About = () => {
	const getExperience = (short = false) => {
    const joiningDate = new Date("2022-06-30");
    const todayDate = new Date();
    const years = todayDate.getFullYear() - joiningDate.getFullYear();
    const months = (todayDate.getMonth() - joiningDate.getMonth() + 12) % 12;

    const experience = years + Number((months / 12).toFixed(1));
    if (short) return experience;

    return `${years} Years ${months} Months`;
  };

  return (
    <section className="py-5 border-bottom wow" data-wow-delay="0.1s">
      <h2 className="title pb-3 mb-5 text-start">About Me</h2>
      <p className="text-justify">
        I am a dedicated MERN stack web developer with a core specialization in
        React JS and comprehensive expertise across both front-end and back-end
        technologies. With a strong command over MongoDB, PostgreSQL, Node JS,
        and Nest JS, I deliver end-to-end solutions that prioritize performance,
        scalability, and seamless user experiences. My toolkit extends to modern
        CSS frameworks, such as Bootstrap and TailwindCSS, along with
        proficiency in jQuery, REST APIs, and GraphQL, ensuring robust and
        responsive applications.
        <br />
        <br />
        In my front-end work, I apply a deep understanding of the React
        ecosystem, utilizing reactstrap, react-bootstrap, JSX, Redux, and
        react-redux to build maintainable and intuitive user interfaces.
        Additionally, I have integrated advanced libraries like Bootstrap Chart
        JS, Video JS, PDFjs, and Signature-Pad to create interactive and
        visually engaging components.
        <br />
        <br />
        With a commitment to best practices and a forward-looking approach to
        technology, I am passionate about delivering solutions that drive
        success and adapt to evolving business needs.
      </p>
      <Row className="mb-4 text-start">
        <Col sm="6" className="py-1">
          <span className="fw-medium text-primary">Name: </span>Manik Hosen
        </Col>
        <Col sm="6" className="py-1">
          <span className="fw-medium text-primary">Position: </span>Associate
          Software Engineer
        </Col>
        <Col sm="6" className="py-1">
          <span className="fw-medium text-primary">Experience: </span>
          {getExperience()}
        </Col>
        <Col sm="6" className="py-1">
          <span className="fw-medium text-primary">Degree: </span>
          Bachelor of Engineering
        </Col>
        <Col sm="6" className="py-1">
          <span className="fw-medium text-primary">Birthday: </span>September
          1998
        </Col>
        <Col sm="6" className="py-1">
          <span className="fw-medium text-primary">Phone: </span>+880 1743
          612180
        </Col>
        <Col sm="6" className="py-1">
          <span className="fw-medium text-primary">Email: </span>
          rahathossenmanik@gmail.com
        </Col>
        <Col sm="6" className="py-1">
          <span className="fw-medium text-primary">Address: </span>
          Dhaka, 1230
        </Col>
      </Row>
      <Row className="g-4">
        <Col md="6">
          <div className="d-flex bg-secondary p-4">
            <h2
              className="flex-shrink-0 display-5 text-primary mb-0"
              data-toggle="counter-up"
            >
              {getExperience(true)}
            </h2>
            <div className="ps-3 my-auto">
              <h5 className="mb-0">Years of Experience</h5>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="d-flex bg-secondary p-4">
            <h2
              className="flex-shrink-0 display-5 text-primary mb-0"
              data-toggle="counter-up"
            >
              05
            </h2>
            <div className="ps-3 my-auto">
              <h5 className="mb-0">Completed Projects</h5>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
