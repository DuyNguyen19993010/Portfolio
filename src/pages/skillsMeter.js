// CSS
import '../css/SkillMeter.css';
const SkillMeter=(props)=> {

  return (
    <div className="SkillMeter">
        <ul>
            <li><p className="name">{props.name}</p></li>
            <li>
            <div className="meter-bar">
                <div style={{width:props.percentage*300/100+"px"}} className="meter-fill"/>
                </div>
            </li>
            <p className="percentage">{props.percentage}%</p>
        </ul>
       
    </div>
  );
}

export default SkillMeter;
