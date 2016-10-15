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
        <MainVideo videoData={this.state.videoData} />
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

var MainVideo = React.createClass({
  render: function() {
    return (
      <div className="main-video-section">
        <div className="main-video-frame">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SXPdYRXzmY4" frameborder="0" allowfullscreen>
          </iframe>
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
      <a className="video-block-link" href={video.youTubeLink} target="_blank">
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
      </a>
    )
  }
})

React.render(
  React.createElement(VideosPage, null),
  document.getElementById('render-target')
);
