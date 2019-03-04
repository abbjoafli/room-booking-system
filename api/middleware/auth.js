const passport = require('passport')
const JWT = require('jsonwebtoken')
const PassportJWT = require('passport-jwt')
const User = require('../models/User')

const jwtSecret = 'eyJqd3RTZWNyZXQiOiJhcGEifQ'
const jwtAlgorithm = 'HS256'
const jwtExpiresIn = 2240
// const jwtSecret = process.env.JWT_SECRET 
// const jwtAlgorithm = process.env.JWT_ALGORITHM
// const jwtExpiresIn = process.env.jwtExpiresIn

passport.use(User.createStrategy())

const signUp = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send('Inget användarnamn eller lösenord försett.')
  }

  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    klass: req.body.klass
  })

  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error)
    }
  })

  req.user = user
  next()
}

const signJWTForUser = (req, res) => {
  const user = req.user
  const token = JWT.sign(
    {
      email: user.email
    },
    jwtSecret,
    {
      algorithm: jwtAlgorithm,
      expiresIn: jwtExpiresIn,
      subject: user._id.toString()
    }
  )
  User.findOne({ email: user.email }, function(err, usr) {
    if (err)
    {
       res.send(err)
    console.log(usr)
    }
    else
    res.json({
      token: token,
      user: usr
    })
  })
}

passport.use(
  new PassportJWT.Strategy(
    {
      jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
      algorithms: [jwtAlgorithm]
    },
    (payload, done) => {
      User.findById(payload.sub)
        .then(user => {
          if (user) {
            done(null, user)
          } else {
            done(null, false)
          }
        })
        .catch(error => {
          done(error, false)
        })
    }
  )
)

module.exports = {
  initialize: passport.initialize(),
  signUp,
  signIn: passport.authenticate('local', { session: false }),
  requireJWT: passport.authenticate('jwt', { session: false }),
  signJWTForUser
}
