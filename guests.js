var Guests = React.createClass({
  render: function() {
    var max = 4; // max 4 guests listed
    var index = 0;
    return (
      <div className="guests">
        <GuestList guestData={guestData} numGuests={max} />
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
          <div className="guest-listing">
            <h3 className="guest-name">{guest.name}</h3>
            <p className="guest-description">{guest.description}</p>
          </div>
        )
      }
    }.bind(this)) // Closure

    return (
      <div class="guest-list">
        {listNodes}
      </div>
    )
  }
})

React.render(
  React.createElement(Guests, null),
  document.getElementById('previous-guests')
);
