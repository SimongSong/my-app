import { useDispatch } from "react-redux";
import { setContentState } from "../componentSlice";
function AboutMe() {
  const dispatch = useDispatch();
  return (
    <div id="AboutMe">
      <div
        className="BackButton"
        onClick={() => dispatch(setContentState("main"))}
      >
        BACK
      </div>
      <div className="Info">
        <br></br>
        <span className="Big Line">
          Hi! I am <b>Simong SONG</b>.
        </span>
        <span className="Divider"></span>
        <span className="Line">
          On May 2020, I graduated from <b>University of British Columbia</b>{" "}
          with a Bachelor’s degree in{" "}
          <b>Applied Science(Computer Engineering)</b>.
        </span>
        <span className="Divider"></span>
        <span>At my current job I am mostly using:</span>
        <span>
          <span className="LOption Language">JavaScript</span>
          <span className="LOption Language">GoLang</span>
          <span className="LOption Web">React JS</span>
          <span className="LOption Web">Vue JS</span>
          <span className="LOption Web">Electron JS</span>
          <span className="LOption Tool">Docker</span>
          <span className="LOption Tool">Kubernetes</span>
          <span className="LOption ETC">HTML/CSS</span>
          <span className="LOption ETC">SQL</span>
        </span>
        <br></br><br></br>
        <span>In the past, I have worked with:</span>
        <span>
          <span className="LOption Language">Python</span>
          <span className="LOption Language">Java</span>
          <span className="LOption Language">PHP</span>
          <span className="LOption Language">C#</span>
          <span className="LOption Web">Angular JS</span>
          <span className="LOption Web">Django</span>
          <span className="LOption Tool">AWS</span>
        </span>
        <span className="Divider"></span>
        <span>
          Before coming to <b>Canada</b> I lived in:<br></br>
          <span className="Country">[South Korea]_</span>
          <span className="Country">[The Philippines]_</span>
          <span className="Country">[South Africa]_</span>
          <span className="Country">[Zambia]</span>
        </span>
        <span className="Divider"></span>
        <span>
          Currently I am working at:
          <span className="Job">
            <span className="JobCompany">Ubisoft</span>
            <span className="JobTitle">Online Programmer</span>
            <span className="JobLength">From June 2020 till now</span>
            <span className="Description">
              <span className="LOption Key">Fullstack</span>
              <span className="LOption Language">JavaScript</span>
              <span className="LOption Language">GoLang</span>
              <span className="LOption Web">React JS</span>
              <span className="LOption Web">Vue JS</span>
              <span className="LOption Web">Electron JS</span>
              <span className="LOption Tool">Docker</span>
              <span className="LOption Tool">Kubernetes</span>
              <span className="LOption ETC">HTML/CSS</span>
              <span className="LOption ETC">SQL</span>
            </span>
          </span>
        </span>
        <span className="Divider"></span>
        <span>
          I have also worked at:
          <span className="Job">
            <span className="JobCompany">
              The Digital Lab, BC Children’s Hospital
            </span>
            <span className="JobTitle">
              Software(Web) Developer (Part-time, Full-time)
            </span>
            <span className="JobLength">From Sept 2019 to May 2020</span>
            <span className="Description">
              <span className="LOption Key">Fullstack</span>
              <span className="LOption Language">JavaScript</span>
              <span className="LOption Language">PHP</span>
              <span className="LOption Language">Python</span>
              <span className="LOption Web">React JS</span>
              <span className="LOption Web">Django</span>
            </span>
          </span>
          
          <span className="Job">
            <span className="JobCompany">The Shah Lab, BC Cancer</span>
            <span className="JobTitle">
              Software Developer for Molecular Oncology Research (Internship)
            </span>
            <span className="JobLength">From Jan 2019 to Aug 2019</span>
            <span className="Description">
              <span className="LOption Key">Fullstack</span>
              <span className="LOption Key">Data Visualization</span>
              <span className="LOption Language">Python</span>
              <span className="LOption Language">JavaScript</span>
              <span className="LOption Web">Django</span>
              <span className="LOption Web">Vue JS</span>
              <span className="LOption Tool">Docker</span>
              <span className="LOption Tool">Azure</span>
            </span>
          </span>
          <span className="Job">
            <span className="JobCompany">realtor.com</span>
            <span className="JobTitle">
              Android Automation Engineer/Quality Engineer (Internship)
            </span>
            <span className="JobLength">From May 2018 to December 2018</span>
            <span className="Description">
              <span className="LOption Key">Testing</span>
              <span className="LOption Key">Automation</span>
              <span className="LOption Key">Android</span>
              <span className="LOption Language">Python</span>
              <span className="LOption Language">Java</span>
              <span className="LOption Tool">Jenkins</span>
              <span className="LOption Tool">AWS</span>
            </span>
          </span>
        </span>
        <span className="Divider"></span>
        <span>
            CONTACT ME!
            <br></br>
            <span className="Contact">email:simong.song95[at][gmail.com]</span>
            <br></br>
            <span className="Contact">
              linkedin: <a href="https://www.linkedin.com/in/simongsong/">linkedin.com/in/simongsong</a>
            </span>
            <br></br>
            <br></br>
          </span>
      </div>
    </div>
  );
}

export default AboutMe;
