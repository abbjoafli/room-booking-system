import React from 'react'

// the <option> elements for the startTime and endTime <select> dropdowns
export const startTimeSelectOptions = [
  <option value="8:00">8:00</option>,
  <option value="8:30">8:30</option>,
  <option value="9:00">9:00</option>,
  <option value="9:30">9:30</option>,
  <option value="10:00">10:00</option>,
  <option value="10:30">10:30</option>,
  <option value="11:00">11:00</option>,
  <option value="11:30">11:30</option>,
  <option value="12:00">12:00</option>,
  <option value="12:30">12:30</option>,
  <option value="13:00">13:00</option>,
  <option value="13:30">13:30</option>,
  <option value="14:00">14:00</option>,
  <option value="14:30">14:30</option>,
  <option value="15:00">15:00</option>,
  <option value="15:30">15:30</option>,
  <option value="16:00">16:00</option>,
  <option value="16:30">16:30</option>,
  <option value="17:00">17:00</option>,
  <option value="17:30">17:30</option>,
]

export const endTimeSelectOptions = [
  <option value="8:30">8:30</option>,
  <option value="9:00">9:00</option>,
  <option value="9:30">9:30</option>,
  <option value="10:00">10:00</option>,
  <option value="10:30">10:30</option>,
  <option value="11:00">11:00</option>,
  <option value="11:30">11:30</option>,
  <option value="12:00">12:00</option>,
  <option value="12:30">12:30</option>,
  <option value="13:00">13:00</option>,
  <option value="13:30">13:30</option>,
  <option value="14:00">14:00</option>,
  <option value="14:30">14:30</option>,
  <option value="15:00">15:00</option>,
  <option value="15:30">15:30</option>,
  <option value="16:00">16:00</option>,
  <option value="16:30">16:30</option>,
  <option value="17:00">17:00</option>,
  <option value="17:30">17:30</option>,
  <option value="18:00">18:00</option>,
]

// formats the time extracted from the time inputs into an array, eg 8:30 => [8, 30]
export const formatTime = (time) => {
  let formatedTimeArray = []
  formatedTimeArray = time.split(':').map((item) => parseInt(item, 10))
  console.log(formatedTimeArray);
  return formatedTimeArray
}

// Find the Room and floor number from the booking ID
export const findRoomInfo = (roomId, roomData) => {
  let roomInfo
  roomData.forEach(room => {
    if (room._id === roomId) {
      roomInfo = room
    }
  })
  return roomInfo
}

