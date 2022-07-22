import "./styles.css"
import profileImage from "../images/profile.jpg"

const Intro = () => {
  return (
    <div className="container">
      {/* left component */}
      <div className="left">
        <div className="left-wrapper">
          <h2 className="introduction">Hi, my name is</h2>
          <h1 className="name">Joshua Feng</h1>

          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Software Engineering Sutdent</div>
              <div className="title-item">Software Engineering Intern @ Clearhead</div>
            </div>
          </div>

          <div className="description">
            <p class="about__description">
              I am a penultimate year Sofware Engineering Sutdent studying at the University of Auckland.
            </p>

            <p class="about__description">
              I have a passion for design and problem solving, and would love to
              see where it can take me in the future!
            </p>
          </div>
        </div>
      </div>

      {/* right component */}
      <div className="right">
        <div className="background">
          <img src={profileImage} alt="" className="image"/>
        </div>

      </div>
    </div>
  )
}

export default Intro;

