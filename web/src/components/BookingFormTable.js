import React from 'react'
import moment from 'moment'
import ColumnCell from './ColumnCell'

const BookingFormTable = props => (
  <table className="table--booking">
    <thead>
      <tr className="table__row table__row--header">
        <th colSpan="2" className="table__cell--header table__cell--level header__heading header__heading--column">{moment(props.date).format('MMMM Do YYYY')}</th>
      </tr>
      <tr scope="col" className="table__row table__row--subheader">
        <th className="table__cell--header">Tid</th>
        <th className="table__cell--header">Bokningar</th>
      </tr>
    </thead>
    <tbody className="table__body--booking">
      <tr className="table__row--full">
        <th scope="row">8</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={8}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">9</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={9}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">10</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={10}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">11</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={11}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">12</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={12}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">13</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={13}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">14</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={14}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">15</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={15}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">16</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={16}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">17</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={17}
            onShowBooking={props.onShowBooking}
          />
      </tr>
      <tr className="table__row--full">
        <th scope="row">18</th>
          <ColumnCell
            date={props.date}
            bookings={props.roomData.bookings}
            hour={18}
            onShowBooking={props.onShowBooking}
          />
      </tr>
    
    </tbody>
  </table>
)

export default BookingFormTable
