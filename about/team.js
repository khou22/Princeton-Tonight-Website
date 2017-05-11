var TeamPage = React.createClass({
  getInitialState: function() {
    return {
      teamData: teamBios
    }
  },
  render: function() {
    return (
      <div className="team-container">
        <TeamList data={ this.state.teamData }/>
      </div>
    );
  }
})

var TeamList = React.createClass({
  getInitialState: function() {
    return {
      members: this.props.data,
    };
  },
  render: function() {
    var index = -1; // Adding one immediately
    var projectNodes = this.props.data.map(function(data) {
    return (
      <div className="team-member">
        <div className="team-member-image-div">
          <img src={data.image} className="team-member-image" />
        </div>
        <div className="team-member-info">
          <h4 className="team-name">{data.name}</h4>
          <p className="team-bio">{data.bio}</p>
        </div>
      </div>
    )
      // }
    });
    return (
      <div>
        {projectNodes}
      </div>
    )
  }
})

React.render(
  React.createElement(TeamPage, null),
  document.getElementById('team')
);
