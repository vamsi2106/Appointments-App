import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    appointmentList: [
      {id: uuidv4(), title: 'Dentist', date: '2023-10-03', isStarred: false},
      {
        id: uuidv4(),
        title: 'IOT Workshop',
        date: '2023-10-21',
        isStarred: true,
      },
    ],
    title: '',
    date: '',
    isFilterActive: false,
  }

  onChangeTitle = event => {
    console.log(event.target.value)
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  FilterStarred = () => {
    this.setState(prevState => ({isFilterActive: !prevState.isFilterActive}))
  }

  render() {
    const {appointmentList, title, date, isFilterActive} = this.state

    const btnColor = isFilterActive ? 'btn-2Inverse' : ''

    const appointmentLists = isFilterActive
      ? appointmentList.filter(eachItem => eachItem.isStarred === true)
      : appointmentList

    return (
      <div className="mainBg">
        <div className="appointment-container">
          <div className="input-feilds-container">
            <div className="inputFeild">
              <h1 style={{color: '#171f46'}}>Add Appointment</h1>
              <form>
                <div>
                  <label htmlFor="title">TITLE</label>
                  <br />
                  <input
                    onChange={this.onChangeTitle}
                    id="title"
                    type="name"
                    placeholder="Title"
                    value={title}
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="date">DATE</label>
                  <br />
                  <input
                    onChange={this.onChangeDate}
                    id="date"
                    value={date}
                    type="date"
                  />
                </div>
                <br />
                <button onClick={this.onAdd} className="btn-1" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="img-div">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h1 style={{color: '#171f46'}}>Appointments</h1>
              <button
                onClick={this.FilterStarred}
                className={`btn-2 ${btnColor}`}
                type="submit"
              >
                Starred
              </button>
            </div>
            <ul>
              {appointmentLists.map(eachItem => (
                <AppointmentItem
                  key={eachItem.id}
                  toggleStarredBtn={this.toggleStarred}
                  appointmentInfo={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
