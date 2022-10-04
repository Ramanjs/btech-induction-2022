import '../scss/team.scss';

const Team = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="team">
        <h1>Meet the Team</h1>
      </div>
    </div>
  )
}

export default Team;
