import '../scss/team.scss';
import inductionlogo from '../assets/induction-logo.svg';

const Team = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="team">
        <img src={inductionlogo} alt="induction logo" />
        <h1>Meet the Team</h1>
      </div>
    </div>
  )
}

export default Team;
