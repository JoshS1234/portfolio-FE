import "../styles/BiographyPage.css";

const BiographyPage = () => {
  return (
    <div className="BiographyContainer">
      <h1>Link to CV?</h1>
      <div className="summaryBox">
        <h2>My goals</h2>
        <p>
          I have recently begun my journey into a tech career, through online
          courses and the Northcoders bootcamp. I am keen to get my first job in
          a software developer role, and apply all that I have learned so far.
        </p>
        <p>
          I get huge satisfaction from working on coding projects, and I would
          love to work on the development of an industry scale project and see
          some of my code make it out into the world.
        </p>
      </div>
      <div className="summaryBox">
        <h2>Relevant skills</h2>
        <div>
          <div>
            <p>Languages and </p>
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>MATLAB</li>
            </ul>
          </div>
          <div>
            <p>Frameworks + Other</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>PostgreSQL</li>
              <li>Node</li>
              <li>React</li>
              <li>React Native</li>
              <li>React Native with Expo</li>
              <li>Github</li>
              <li>Firebase</li>
              <li>Express</li>
              <li>Axios</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="summaryBox">
        <h2>Qualifications</h2>
        <p>
          I studied Maths at university, completing my Masters degree in 2016. I
          then went on to complete a research Masters degree in Electrical
          Engineering at the University of Manchester. For both degrees I used
          MATLAB for some small coding projects, this was mostly to simulate
          physics problems and solve differential equations.
        </p>
        <p>
          Since then, I completed my teacher training as a secondary school
          Maths teacher, and then worked as a qualified teacher for 3 years.
          During this time I also completed online courses in Python, as I still
          enjoyed coding as a hobbyist
        </p>
        <p>
          Over the summer of 2022, I completed the Northcoders coding bootcamp.
          I learned so much over the course of the bootcamp, and thoroughly
          enjoyed it also. It really enhanced my coding practices, and I was
          exposed to industry standards such as pair-coding, using Git, and
          formalised testing packages like Jest.
        </p>
      </div>

      <div className="summaryBox">
        <h2>Professional experience</h2>
        <p>
          My primary experience in a professional environment has been my work
          as a teacher for the last 4 years. During this time I have developed
          many key skills which will be transferrable to a tech role.
        </p>
        <p>
          Time management and planning is a key skill as a teacher, as often
          there are tight deadlines for marking and feedback, so planning around
          this is essential. Client-facing interactions are also something that
          I refined during my time as a teacher, it is often necessary to
          contact parents of students to give feedback on progress and put plans
          in place to help the student to reach their potential. Being clear and
          transparent with successes and issues is essential, but finding the
          best way to convey these to the parent can sometimes be challenging.
        </p>
        <p>
          In my final year as a teacher, I also was the lead on the Core Maths
          team, which required me to oversee two of my colleagues and ensure
          that they were progressing through the syllabus at a similar rate to
          each other. I also had to liaise with the Head of Maths, and put
          contingency plans in place in case of a lockdown
        </p>
      </div>
    </div>
  );
};
export default BiographyPage;
