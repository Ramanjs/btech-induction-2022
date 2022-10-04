import '../scss/schedule.scss';
import arrowl from '../assets/sched-left-arr.svg'
import arrowr from '../assets/sched-right-arr.svg'

const Schedule = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="schedule">
        <h1>Schedule</h1>
        <div className="slider">
          <img src={arrowl} alt="left arrow" />
          <div>
            <h2>27th</h2>
            <p>Monday</p>
          </div>
          <img src={arrowr} alt="right arrow" />
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Schedule;
