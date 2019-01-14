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
    name: 'Grupprum 1',
    floor: 'Stora skolan',
    capacity: 6,
    assets: {
      whiteboard: true
    }
  },
  {
    name: 'Grupprum 2',
    floor: 'Stora skolan',
    capacity: 6,
    assets: {
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
    name: 'Enmannarum',
    floor: 'Stora skolan',
    capacity: 1,
    assets: {
      whiteboard: true
    }
  },
  {
    name: 'Enmannarum 2',
    floor: 'Stora skolan',
    capacity: 1,
    assets: {
      whiteboard: true
    }
  },
  {
    name: 'Enmannarum 3',
    floor: 'Stora skolan',
    capacity: 1,
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