import React from 'react'
import Button from './Button'
import moment from 'moment'
import { formatTime, startTimeSelectOptions, endTimeSelectOptions } from '../helpers/bookingForm'

function FilterElement({
  onSetFloorParam,
  onToggleFeature,
  onToggleCapacity,
  onSetAvailabilityParam,
  floorParam,
  filterParams,
  capacityParams,
  availabilityParam,
  date
}) {

  return (
    <div className="sidebar__box--filter filter">
      <h3 className="header__heading header__heading--sidebar">Filtrera</h3>
      <form className="form form--filter">
        <h4 className="form__heading form__heading--filter">Lokal</h4>
        <div className="form__group" onChange={(event) => onSetFloorParam(event.target.value)}>
          <div className="form_group">
            <input type="radio" value="Stora skolan" name="floor-select" className="form__input--radio" checked={floorParam === 'Stora skolan' ? true : false}/>
            <label for="floor8" className="form__label form__label--inline">Stora skolan</label>
          </div>
          <div className="form_group">
            <input type="radio" value="Spetsen" name="floor-select" className="form__input--radio" checked={floorParam === 'Spetsen' ? true : false}/>
            <label for="floor13" className="form__label form__label--inline">Spetsen</label>
          </div>
          <div className="form_group">
            <input type="radio" value="all" name="floor-select" className="form__input--radio" checked={floorParam === 'all' ? true : false}/>
            <label for="all" className="form__label form__label--inline">All lokaler</label>
          </div>
        </div>

        <h4 className="form__heading form__heading--filter">Tillbehör</h4>
        <div onChange={(event) => onToggleFeature(event.target.name)} >
        <div className="form_group">
            <input type="checkbox" id="whiteboard" name="whiteboard" className="form__input--checkbox" checked={filterParams[0].value} />
            <label for="whiteBoard" className="form__label form__label--inline">Whiteboard</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="dator" name="dator" className="form__input--checkbox" checked={filterParams[1].value} />
            <label for="dator" className="form__label form__label--inline">Dator</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="tv" name="tv" className="form__input--checkbox" checked={filterParams[2].value} />
            <label for="tv" className="form__label form__label--inline">TV</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="projector" name="projector" className="form__input--checkbox" checked={filterParams[3].value} />
            <label for="projector" className="form__label form__label--inline">Projektor</label>
          </div>
        </div>
        <h4 className="form__heading form__heading--filter">Platser</h4>
        <div onChange={ (event) => onToggleCapacity(event.target.id)}>
          <div className="form_group">
            <input type="checkbox" id="1seats" name="1seats" className="form__input--checkbox" checked={capacityParams[0].value} />
            <label for="16seats" className="form__label form__label--inline">1 Plats</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="6seats" name="18seats" className="form__input--checkbox" checked={capacityParams[1].value} />
            <label for="6seats" className="form__label form__label--inline">6 Platser</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="12seats" name="20seats" className="form__input--checkbox" checked={capacityParams[2].value} />
            <label for="12seats" className="form__label form__label--inline">12 Platser</label>
          </div>
          <div className="form_group">
            <input type="checkbox" id="14seats" name="24seats" className="form__input--checkbox" checked={capacityParams[3].value} />
            <label for="14seats" className="form__label form__label--inline">14 Platser</label>
          </div>
         
        </div>
        <h4 className="form__heading form__heading--filter">Tillgänglighet</h4>
          <div onChange={(event) => onSetAvailabilityParam(event.target.value)} >
            <div className="form_group">
              <input type="radio" id="fullyAvailable" value="fullyAvail" name="availability" className="form__input--radio" checked={availabilityParam === 'fullyAvail' ? true : false} />
              <label for="fullyAvailable" className="form__label form__label--inline">Helt lediga</label>
            </div>
            <div className="form_group">
              <input type="radio" id="partialAvailable" value="partAvail" name="availability" className="form__input--radio" checked={availabilityParam === 'partAvail' ? true : false} />
              <label for="partialAvailable" className="form__label form__label--inline">Delvis lediga</label>
            </div>
            <div className="form_group">
              <input type="radio" id="fullyBooked" value="fullBooked" name="availability" className="form__input--radio" checked={availabilityParam === 'fullBooked' ? true : false} />
              <label for="fullyBooked" className="form__label form__label--inline">Fullbokade</label>
            </div>
            <div className="form_group">
              <input type="radio" id="all" value="all" name="availability" className="form__input--radio" checked={availabilityParam === 'all' ? true : false} />
              <label for="all" className="form__label form__label--inline">Alla</label>
            </div>
          </div>
      </form>
    </div>
  )
}

export default FilterElement