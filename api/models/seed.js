const Room = require('./Room')

Room.create([
  {
    name: 'Akvariet',
    floor: 'Stora skolan',
    capacity: 12,
    assets: {
      tv: true,
      dator: true,
      whiteboard: true
    }
  },
  {
    name: 'Konferansrum',
    floor: 'Spetsen',
    capacity: 14,
    assets: {
      whiteboard: true,
      projector: true
    }
  },
  {
    name: 'Grupprum 1',
    floor: 'Stora skolan',
    capacity: 8,
    assets: {
      whiteboard: true
    }
  },
  {
    name: 'Grupprum 2',
    floor: 'Stora skolan',
    capacity: 7,
    assets: {
      whiteboard: true
    }
  }
])
  .then((rooms) => {
    console.log(`Created ${rooms.length} rooms.`)
  })
  .catch((error) => {
    console.error(error)
  })