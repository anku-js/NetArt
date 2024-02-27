import "./SecondPage.css";
export default function SecondPage() {
  return (
    <div className="secondpage-container">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF OWER FOR THE
        NATION.
      </p>
      <div>
        <div className="secondpage-img-div">
          <img src="images/3.png" className="secondpage-img" />
        </div>
        <p className="secondpage-img-caption">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr className="secondpage-hr"></hr>
      <div className="diverse-segments-container">
        <p className="diverse-segments-heading">
          <b>C.R.I FLUID SYSTEMS PRODUCTS CATERS TO DIVERSE SEGMENTS</b>
        </p>
        <div>
          <p className="diverse-segments-list">
            CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER &
            WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA{" "}
            <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP{" "}
            <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING{" "}
            <span>|</span> FOOD & BEVERAGE
            <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR
            BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING
            <span>|</span> AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
    </div>
  );
}
