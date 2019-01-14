import moment from 'moment'
import { formatTime, timeSelectOptions} from '../helpers/bookingForm'

// Initial room filter parameters
export const floorParams = [ {name: 'Stora skolan', value: false}, {name: 'Spetsen', value: false}, {name: 'all', value: false}]

// initial feature filter parameters
export const filterParams = [ 
  {name: 'whiteboard', value: false},
  {name: 'dator', value: false},
  {name: 'tv', value: false},
  {name: 'projector', value: false} ]

// Initial Capacity parameters
export const capacityParams = [
  {capacity: 1, id: '1seats', value: false},
  {capacity: 6, id: '6seats', value: false},
  {capacity: 12, id: '12seats', value: false},
  {capacity: 14, id: '14seats', value: false},
]

// Filtering Functions

// Filter roomData by floor
export  const onFilterByFloor = (param, filteredData) => {
  if (param === 'all') {
    return filteredData
  } else {
    return filteredData.filter(room => room.floor === param)
  }
}

// Filter data by feature
export const onFilterByFeature = (params, filteredData) => {
  params.forEach(feature => {
    if (feature.name === 'whiteboard' && feature.value === true) {
      console.log(feature.name+ "  --  ")
      console.log(filteredData);
      filteredData = filteredData.filter(room => room.assets.whiteboard === true)
    } else if (feature.name === 'dator' && feature.value === true) {
      filteredData = filteredData.filter(room => room.assets.dator === true)
    } else if (feature.name === 'tv' && feature.value === true) {
      filteredData = filteredData.filter(room => room.assets.tv === true)
    } else if (feature.name === 'projector' && feature.value === true) {
      filteredData = filteredData.filter(room => room.assets.projector === true)
    }
  })
  return filteredData
}

// Filter data by capacity
export const onFilterByCapacity = (params, filteredData) => {
  let roomsByCapacity = []
  params.forEach(capacity => {
    if (capacity.value === true) {
      roomsByCapacity.push(...filteredData.filter(room => room.capacity === capacity.capacity))
    }
  })
  if (roomsByCapacity.length > 0) {
    return roomsByCapacity
  } else {
    return filteredData
  }
}

// Filter data by availability
export const onFilterByAvailablity = (params, filteredData) => {
  if (params === 'fullyAvail') {
    filteredData = filteredData.filter(room => room.bookings.length === 0)
  } else if (params === 'partAvail') {
    filteredData = filteredData.filter(room => room.bookings.length > 0)
  } else if (params === 'fullBooked') {
    filteredData =
      !filteredData.filter(room => room.bookings.length > 0) &&
      !filteredData.filter(room => room.bookings.length === 0)
  }
  else if (params === 'all') {
    filteredData =filteredData      
  }
  return filteredData
}
