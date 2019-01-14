import React from 'react'
import RoomRow from './RoomRow'
import { roomSorter } from '../helpers/sorter'

const RoomsList = props => (
  <table className="table">
    <tr className="table__row table__row--header">
      <th scope="colgroup" colSpan="15" className="table__cell--header table__cell--level table__cell--align-left">
        Stora skolan
      </th>
    </tr>
    <tr className="table__row table__row--subheader">
      <th scope="col" className="table__cell--header table__cell--align-left">
        Rum
      </th>
      <th scope="col" className="table__cell--header">
        8
      </th>
      <th scope="col" className="table__cell--header">
        9
      </th>
      <th scope="col" className="table__cell--header">
        10
      </th>
      <th scope="col" className="table__cell--header">
        11
      </th>
      <th scope="col" className="table__cell--header">
        12
      </th>
      <th scope="col" className="table__cell--header">
        13
      </th>
      <th scope="col" className="table__cell--header">
        14
      </th>
      <th scope="col" className="table__cell--header">
        15
      </th>
      <th scope="col" className="table__cell--header">
        16
      </th>
      <th scope="col" className="table__cell--header">
        17
      </th>
      <th scope="col" className="table__cell--header">
        18
      </th>
    </tr>
    <tbody className="table__body">
      {props.rooms &&
        roomSorter(props.rooms, 'Stora skolan').map(room => (
          <RoomRow
            key={room._id}
            room={room}
            bookings={room.bookings}
            date={props.date === null ? new Date() : props.date}
            onShowBooking={props.onShowBooking}
            onSetRoom={props.onSetRoom}
          />
        ))}
    </tbody>
    <tr className="table__row table__row--header">
      <th scope="colgroup" colSpan="15" className="table__cell--header table__cell--level table__cell--align-left">
        Spetsen
      </th>
    </tr>
    <tr className="table__row table__row--subheader">
      <th scope="col" className="table__cell--header table__cell--width table__cell--align-left">
        Rum
      </th>
      <th scope="col" className="table__cell--header">
        8
      </th>
      <th scope="col" className="table__cell--header">
        9
      </th>
      <th scope="col" className="table__cell--header">
        10
      </th>
      <th scope="col" className="table__cell--header">
        11
      </th>
      <th scope="col" className="table__cell--header">
        12
      </th>
      <th scope="col" className="table__cell--header">
        13
      </th>
      <th scope="col" className="table__cell--header">
        14
      </th>
      <th scope="col" className="table__cell--header">
        15
      </th>
      <th scope="col" className="table__cell--header">
        16
      </th>
      <th scope="col" className="table__cell--header">
        17
      </th>
      <th scope="col" className="table__cell--header">
        18
      </th>
    </tr>
    <tbody className="table__body">
      {props.rooms &&
        roomSorter(props.rooms, 'Spetsen').map(room => (
          <RoomRow
            key={room._id}
            room={room}
            bookings={room.bookings}
            date={props.date === null ? new Date() : props.date}
            onShowBooking={props.onShowBooking}
            onSetRoom={props.onSetRoom}
          />
        ))
      }
    </tbody>
  </table>
)

export default RoomsList
