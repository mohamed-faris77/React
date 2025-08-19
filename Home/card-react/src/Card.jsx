import "./Card.css"
import farisImage1 from '../../../Images/tb.jpg';
import farisImage2 from '../../../Images/tw1.jpg';
import farisImage3 from '../../../Images/tb-grp.jpg';
import farisImage4 from '../../../Images/py-grp.jpg';
import farisImage5 from '../../../Images/shell.jpg';
import farisImage6 from '../../../Images/ramcafe.jpg';

function Card(){
  return(
    <div className="WholeContent">
    <div className="Container">
      <img src={farisImage1} alt="Onam Group"></img>
      <h2>TeamEhh...!</h2>
      <p>Onam Celebration❤️</p>
    </div>
    <div className="Container">
      <img src={farisImage2} alt="Graduation Group"></img>
      <h2>Graduation</h2>
      <p>Graduation day❤️</p>
    </div>
    <div className="Container">
      <img src={farisImage3} alt="Ooty-group"></img>
      <h2>Team TowerBuilding</h2>
      <p>Ooty Boat House❤️</p>
    </div>
    <div className="Container">
      <img src={farisImage4} alt="Pondicherry Group"></img>
      <h2>Team TowerBuilding</h2>
      <p>Pondicherry FrenchColony❤️</p>
    </div>
     <div className="Container">
      <img src={farisImage5} alt="Shell Group"></img>
      <h2>Team TowerBuilding</h2>
      <p>Shell Select @Bangalore❤️</p>
    </div>
     <div className="Container">
      <img src={farisImage6} alt="Rameshwaram Cafe"></img>
      <h2>Team TowerBuilding</h2>
      <p>Rameshwaram Cafe @Bangalore❤️</p>
    </div>
    </div>
  );
}


export default Card