import React from 'react'
import moment from 'moment'
import momentTimezone from 'moment-timezone'
import Button from './Button'
import { findRoomInfo } from '../helpers/bookingForm.js'

function BookingElement({
  bookingData,
  onDeleteBooking,
  roomData
}) {

  const roomInfo = findRoomInfo(bookingData.roomId, roomData)
  const startTime = momentTimezone.tz(bookingData.bookingStart, 'Europe/Stockholm').format('H.mm')
  const endTime = momentTimezone.tz(bookingData.bookingEnd, 'Europe/Stockholm').format('H.mm')

  return (
    <div className="booking__box">
      <div className="booking__innerbox--left">
        <h3 className="header__heading--sub--alt header__heading--small">{moment(bookingData.bookingStart).format('dddd, Do MMMM YYYY')}</h3>
        <p>{bookingData.businessUnit}</p>
        <p>{bookingData.purpose}</p>
      </div>
      <div className="booking__innerbox--middle">
        <p>Från {startTime} till {endTime}</p>
        <p>Tid {bookingData.duration} timmar</p>
        <p>På {roomInfo.floor}, {roomInfo.name}</p>
      </div>
      <div className="booking__innerbox--right">
        <Button
          onClick={() => onDeleteBooking(bookingData.roomId, bookingData._id)}
          text={`Ta bort`}
        />
      </div>
    </div>
  )
}

export default BookingElement