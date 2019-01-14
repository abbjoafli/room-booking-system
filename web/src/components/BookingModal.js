import React from 'react'
import ReactModal from 'react-modal'
import momentTimezone from 'moment-timezone'
import Button from './Button'
import { findRoomInfo } from '../helpers/bookingForm.js'

const BookingModal = props => {
  const deleteBooking = () => {
    const roomID = props.selectedBooking.roomId
    const bookingID = props.selectedBooking._id
    props.onDeleteBooking(roomID, bookingID)
    props.onCloseBooking()
    console.log(props.selectedBooking);
    console.log(props.user);
  }
  return (
    <ReactModal
      isOpen={!!props.selectedBooking}
      onRequestClose={props.onCloseBooking}
      ariaHideApp={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      contentLabel="Booking"
      appElement={document.getElementById('app')}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Boknings detaljer</h3>
      {!!props.selectedBooking && (
        <div className="modal__boday">
          <p className="modal__paragraph">{findRoomInfo(props.selectedBooking.roomId, props.roomData).name}{', på '}
          {findRoomInfo(props.selectedBooking.roomId, props.roomData).floor}</p>
          <p className="modal__paragraph">{`${momentTimezone
              .tz(props.selectedBooking['bookingStart'], 'Europe/Stockholm')
            .format('h.m')} to ${momentTimezone
              .tz(props.selectedBooking['bookingEnd'], 'Europe/Stockholm')
              .format('h.m')}`}
            <p className="modal__paragraph">{`${momentTimezone.tz(props.selectedBooking['bookingStart'], 'Europe/Stockholm').format('MMMM D, YYYY')} to ${momentTimezone.tz(props.selectedBooking['bookingEnd'], 'Europe/Stockholm').format('MMMM D, YYYY')}`}
          </p>
          </p>
          <p className="modal__paragraph"><strong>Bokat av </strong>{props.selectedBooking['name']}</p>
          <p className="modal__paragraph"><strong>Klass </strong>{props.selectedBooking['businessUnit']}</p>
          <p className="modal__paragraph"><strong>Syfte </strong>{props.selectedBooking['purpose']}</p>
          <p className="modal__paragraph"><strong>Beskrivning </strong>{props.selectedBooking['description']}</p>
        </div>

      )}
      {!!props.selectedBooking && props.user!==props.selectedBooking['mail'] && (
         <a href={`mailto:${props.user}`} className="button">Kontakta bokaren</a>
      )}
      {!!props.selectedBooking && props.user===props.selectedBooking['mail'] && (
         <Button
        onClick={deleteBooking}
        text={`Ta bort`}
      />
      )}
     
     
      <Button
        className="button__close button--alternative"
        onClick={props.onCloseBooking}
        text={`Stäng`}
      />
    </ReactModal>
  )
}
export default BookingModal
