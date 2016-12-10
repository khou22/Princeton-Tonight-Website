var Guests = React.createClass({
  getInitialState: function() {
    return {
      index: 0
    }
  },
  updateSelected: function(index) {
    // Update which guest was selected
    this.setState({
      index: index
    })
  },
  render: function() {
    var max = 10; // max 4 guests listed
    var currentGuest = guestData[this.state.index];
    return (
      <div className="guests">
        <div className="guest-focus">
          <h2 className="guest-name">{currentGuest.name}</h2>
          <p className="guest-description">{currentGuest.description}</p>
        </div>
        <GuestList guestData={guestData} numGuests={max} update={this.updateSelected}/>
      </div>
    )
  }
})

var GuestList = React.createClass({
  render: function() {
    var index = 0;
    var listNodes = this.props.guestData.map(function(guest) {
      if (index < this.props.numGuests) {
        index++; // Counter
        return (
          <td className="guest-item">
            <a onMouseOver={this.props.update.bind(this, index - 1)} className="guest-name">{guest.name}</a>
          </td>
        )
      }
    }.bind(this)) // Closure

    return (
      <div className="guest-list">
        <table>
          <tr width="100%">
            {listNodes}
          </tr>
        </table>
        <p className="guest-instructions">
          And many more!<br/><br/>
          Hover over a name to learn more
        </p>
      </div>
    )
  }
})

React.render(
  React.createElement(Guests, null),
  document.getElementById('previous-guests')
);
