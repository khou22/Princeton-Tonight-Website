// React framework for Videos Page

var VideosPage = React.createClass({
  getInitialState: function() {
    console.log(videoData);
    return {
      videoData: videoData
    }
  },
  render: function() {
    return (
      <div>
        <PageHeader />
        <VideoGrid videoData={this.state.videoData} />
      </div>
    );
  }
})

var PageHeader = React.createClass({
  render: function() {
    return (
      <div className="page-header">
        <div className="page-header-title">
          VIDEOS
        </div>
      </div>
    )
  }
})

var VideoGrid = React.createClass({
  render: function() {
    var videoData = this.props.videoData;
    console.log(videoData);
    var videoNodes = videoData.map(function(video) {
      return (
        <VideoBlock videoData={video} />
      )
    });

    return (
      <div className="video-grid">
        {videoNodes}
      </div>
    )
  }
})

var VideoBlock = React.createClass({
  getInitialState: function() {
    return {
      hovering: false
    }
  },
  handleHoverOn: function() {
    this.setState({
      hovering: true
    })
  },
  handleHoverOff: function() {
    this.setState({
      hovering: false
    })
  },
  render: function() {
    var video = this.props.videoData;

    // Video hovering effects
    var filter = this.state.hovering ? "video-fade" : "";
    var descriptionOpacity = this.state.hovering ? "description-hover" : "";

    return (
      <div className="video-block"
        onMouseEnter={this.handleHoverOn.bind(this)}
        onMouseLeave={this.handleHoverOff.bind(this)}>
        <img className={"video-thumbnail-img " + filter} src={video.thumbnailImage} alt="hello"/>
        <div className="video-description-div">
          <p className={"video-description " + descriptionOpacity}>
            {video.description}
          </p>
        </div>
      </div>
    )
  }
})

React.render(
  React.createElement(VideosPage, null),
  document.getElementById('render-target')
);
