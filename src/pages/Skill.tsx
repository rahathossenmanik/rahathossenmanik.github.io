import { Col, Progress, Row } from 'reactstrap';

const Skill = () => {
  return (
    <section className="py-5 border-bottom wow" data-wow-delay="0.1s">
      <h2 className="title pb-3 mb-5 text-start">Skills</h2>
      <Row>
        {skills?.map((skill) => (
          <Col sm="6">
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">{skill?.label}</p>
                <p className="mb-2">{skill?.expertise}%</p>
              </div>
              <Progress
                color="primary"
                value={skill?.expertise}
                className="progress"
              />
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Skill;

const skills = [
  { label: "JavaScript", expertise: 95 },
  { label: "Typescript", expertise: 90 },
  { label: "React", expertise: 95 },
  { label: "Node JS", expertise: 70 },
  { label: "Nest JS", expertise: 70 },
  { label: "Express JS", expertise: 60 },
  { label: "Axios", expertise: 90 },
  { label: "Git", expertise: 80 },
  { label: "MOngoDB", expertise: 75 },
  { label: "PostgreSQL", expertise: 65 },
  { label: "REST API", expertise: 80 },
  { label: "GraphQL", expertise: 60 },
  { label: "Bootstrap", expertise: 98 },
  { label: "TailwindCSS", expertise: 80 },
];
