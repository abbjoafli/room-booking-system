import React, {Fragment} from 'react'
import BookingFormTable from './BookingFormTable'
import Datetime from 'react-datetime'
import moment from 'moment'
import {Link} from 'react-router-dom'
import Button from './Button'
import { formatTime, startTimeSelectOptions, endTimeSelectOptions } from '../helpers/bookingForm'

function BookingForm({ onMakeBooking, user, roomData, date, updateCalendar, onShowBooking, disableRecurring, onToggleRecurring }) {
  // Disable sunday (day 0) on the calendar as an booking option
  const valid = function(current) {
    return current.day() !== 0
  }

  const handleEndDate = (dateArray) => {
    let recurringEndDate = []
    dateArray.forEach(item => {
      recurringEndDate.push(parseInt(item))
    })
    return recurringEndDate
  }

  // Format the recurring data into an array
  const handleRecurringData = (type, date) => {
    let recurringData = []
    if (type !== "none") {
      recurringData = [ date, type]
      recurringData[0][1] = recurringData[0][1] - 1
    } else {
        recurringData = []
    }
    return recurringData
  }

  // Array used for handleData function
  let dateArray = []

  // Update the current date in the application state
  const handleDate = event => {
    updateCalendar(moment(event)._i)
  }

  return (
    <Fragment>
      <div className="header__page">
        <h2 className="header__heading header__heading--sub">På {roomData.floor} | {roomData.name}</h2>
      </div>
      <form className="form__grid form--booking" onSubmit={event => {
          event.preventDefault()
          // Extract date array from current date in state
          const dateArray = moment(date)
            .format('Y M D')
            .split(' ')
            .map(item => parseInt(item, 10))
            dateArray[1] = dateArray[1] - 1
            // Data from input
            const formData = event.target.elements
            const roomId = roomData._id
            // startDate data
            const startTime = formatTime(formData.startTime.value)
            const startDate = [...dateArray, ...startTime]
            // endDate data
            const endTime = formatTime(formData.endTime.value)
            const endDate = [...dateArray, ...endTime]
         
            // Booking specifics
            const businessUnit = localStorage.getItem("Klass")
            let recurringEnd = handleEndDate(formData.recurringEndDate.value.split('-'))
            const recurringType = formData.recurring.value
            let recurringData = handleRecurringData(recurringType, recurringEnd)
            const purpose = formData.purpose.value
            const description = formData.description.value
          onMakeBooking({ startDate, endDate, businessUnit, purpose, roomId, recurringData })
        }}>
        <div className="content__calendar">
          <Datetime
            dateFormat="YYYY-MM-DD"
            timeFormat={false}
            input={false}
            utc={true}
            isValidDate={valid}
            onChange={event => handleDate(event._d)}
        />
        </div>
        <div className="content__table">
          <BookingFormTable roomData={roomData} date={date} onShowBooking={onShowBooking} />
        </div>
        <div className="content__form">
          <h3 className="header__heading header__heading--column">Boka en tid</h3>
          <div className="form__group form__group--margin-top">
            <label className="form__label form__label--booking">
              {'Starttid'}
              <select name="startTime" className="form__input form__input--select">
                {startTimeSelectOptions.map(option => {
                  return option
                })}
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Sluttid'}
              <select name="endTime" className="form__input form__input--select">
                {endTimeSelectOptions.map(option => {
                  return option
                })}
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Återkommande'}
              <span>
                <select name="recurring" defaultValue="none" onChange={(event) => onToggleRecurring(event.target.value)} className="form__input form__input--select">
                  <option value="none">Icke återkommande</option>
                  <option value="daily">Dagligen</option>
                  <option value="weekly">Varje vecka</option>
                  <option value="monthly">Varje månad</option>
                </select>
              </span>
            </label>
          </div>
          <label className="form__label form__label--booking">
            {'Recurring end date'}
            <input type="date" name="recurringEndDate" disabled={disableRecurring} className="form__input--date"/>
          </label>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Purpose'}
              <select name="purpose" defaultValue="Scheduled class" className="form__input form__input--select">
                <option value="lektion">Lektion</option>
                <option value="gruppmöte">Gruppmöte</option>
                <option value="studier">Studier</option>
                <option value="annat">Annat</option>
              </select>
            </label>
          </div>
          <div className="form__group">
            <label className="form__label form__label--booking">
              {'Description'}
              <textarea type="textarea" name="description" className="form__input--textarea"></textarea>
            </label>
          </div>
          <div className="form__group--button">
            <Button className="button button__form--booking" text={'Boka!'} />
            <Link to="/bookings" className="button button--alternative button__form--booking" >Visa tillgänglighet</Link>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default BookingForm
