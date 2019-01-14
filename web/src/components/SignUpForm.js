import React from 'react'

function SignUpForm({ onSignUp }) {
  return (
    <form className="form--signin"
      onSubmit={event => {
        event.preventDefault()
        const elements = event.target.elements
        const email = elements.email.value
        const firstName = elements.firstName.value
        const lastName = elements.lastName.value
        const password = elements.password.value
        const klass = elements.class.value
        onSignUp({ firstName, lastName, email, password,klass })
      }}
    >
      <div className="form__group">
        <label className="form__label form__label--padding">
          {'Förnamn'}
          <input type="text" name="firstName" className="form__input" />
        </label>
      </div>
      <div className="form__group">
        <label className="form__label form__label--padding">
          {'Efternamn'}
          <input type="text" name="lastName" className="form__input" />
        </label>
      </div>
      <div className="form__group">
            <label className="form__label form__label--booking">
              {'Klass'}
              <select name="class" defaultValue="1801" required className="form__input form__input--select">
                <option value="1801">1801</option>
                <option value="1802">1802</option>
                <option value="1803">1803</option>
                <option value="180S">180S</option>
                <option value="1701">1701</option>
                <option value="1702">1702</option>
                <option value="1703">1703</option>
                <option value="1601">1601</option>
                <option value="1602">1602</option>
                <option value="1603">1603</option>
                <option value="1604">1604</option>
              </select>
            </label>
          </div>
      <div className="form__group">
        <label className="form__label form__label--padding">
          {'Mailadress'}
          <input type="email" name="email" className="form__input" required />
        </label>
      </div>
      <div className="form__group">
        <label className="form__label form__label--padding">
          {'Lösenord'}
          <input type="password" name="password" className="form__input" required />
        </label>
      </div>
      <button className="button button__form--submit">Registrera dig</button>
    </form>
  )
}

export default SignUpForm
