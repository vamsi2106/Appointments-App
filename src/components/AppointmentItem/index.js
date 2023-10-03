import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentInfo, toggleStarredBtn} = props
  const {id, title, date, isStarred} = appointmentInfo
  const starredBtn = () => {
    toggleStarredBtn(id)
  }

  const StarredImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointments-card">
      <div className="ac-1">
        <p className="title">{title}</p>
        <button onClick={starredBtn} data-testid="star" type="button">
          <img alt="star" src={StarredImg} />
        </button>
      </div>
      <p>{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
    </li>
  )
}

export default AppointmentItem
