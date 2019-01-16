import React, { Fragment } from "react";
import BookingFormTable from "./BookingFormTable";
import BookingModal from "./BookingModal";
import {Link} from 'react-router-dom'
import Datetime from "react-datetime";
import moment from "moment";
import Button from "./Button";
import Clock from 'react-clock';

class LookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Allroom: [],
      Chosenroom:0,
      date: moment(),
      Clockdate: new Date(),
      weekenddays:0
    };
  }

  changeroom(roomnumber)
  {
    console.log(this.state.Allroom[roomnumber].name)
    this.setState({ Chosenroom: roomnumber }) 
  
  }

  componentDidMount() {
    this.props.listRooms().then(res => this.setState({ Allroom: res }));
    console.dir(this.state.Allroom);
    if(moment().isoWeekday()==4||moment().isoWeekday()==5)
    this.setState({ weekenddays: 2 })
    setInterval(
      () => this.setState({ Clockdate: new Date() }),
      1000
    );
    console.log(moment().isoWeekday())
  }

  render() {
    if (this.state.Allroom.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <Fragment>
        <div className="header__page">
        <Link to="/"  ><img className="back" src="https://img.icons8.com/metro/1600/circled-left-2.png" ></img> </Link>
          <h2 className="header__heading header__heading--sub buttons">
            Bokningar {this.state.Allroom[this.state.Chosenroom].name}
          </h2>
          <div>
        <Clock className="clock"
          value={this.state.Clockdate}
          size="350"
          renderNumbers="true"
        />
      </div>
        </div>

        <div className="content__table">
          <div className="buttons">
            {this.state.Allroom.map((room, index)=> { 
              return <a  key={index} className={this.state.Chosenroom==index ? "active": null} onClick={e => this.changeroom(index)} >{room.name}</a>;
            })}
          </div>

          <BookingFormTable
            extraheader="sameview"
            specnamn="Idag"
            roomData={this.state.Allroom[this.state.Chosenroom]}
            date={this.state.date}
            onShowBooking={this.props.onShowBooking}
          />
          <BookingFormTable
            extraheader="sameview"
            specnamn="Imorgon"
            roomData={this.state.Allroom[this.state.Chosenroom]}
            date={ moment().isoWeekday() ==5  ? moment(new Date()).add(1+this.state.weekenddays, "days"):  moment(new Date()).add(1, "days")}
            onShowBooking={this.props.onShowBooking}
          />
          <BookingFormTable
            extraheader="sameview"
            roomData={this.state.Allroom[this.state.Chosenroom]}
            date={moment().isoWeekday() ==4 || moment().isoWeekday() ==5  ? moment(new Date()).add(2+this.state.weekenddays, "days"):  moment(new Date()).add(2, "days")}
            onShowBooking={this.props.onShowBooking}
          />
        </div>
        <BookingModal
          selectedBooking={this.props.selectedBooking}
          onCloseBooking={this.props.onCloseBooking}
          roomData={this.state.Allroom}
        />
      </Fragment>
    );
  }
}
export default LookingForm;
