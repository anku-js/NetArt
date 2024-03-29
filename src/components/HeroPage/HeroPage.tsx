import "./HeroPage.css";

export default function HeroPage() {
  return (
    <div className="heroPage-container">
      <div className="heroPage-logo-div">
        <img src="images/logo.png" className="heroPage-logo" />
      </div>
      <div className="heroPage-flex">
        <div className="heroPage-award-img-div">
          <img src="images/1.png" className="heroPage-award-img" />
        </div>
        <div className="heroPage-content-container">
          <p className="heroPage-heading">
            <b>
              C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>
          </p>
          <div className="heroPage-pointers-container">
            <ul>
              <li>
                C.R.I's energy efficient products are well recognized by various
                Government Institutions, as trustworthy products for various
                projects across the globe to save energy.
              </li>
              <li>
                C.R.I is the highest contributor in the country for the projects
                of EESL(Energy Effeciency Services Limited) to replace the old
                inefficient pumps with 5 Star rated energy efficient smart pumps
                with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <img src="images/2.png" className="heroPage-image" />
          <p>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
}
