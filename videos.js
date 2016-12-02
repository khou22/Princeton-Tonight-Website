// console.log("loaded");

var PreviousVideos = React.createClass({
  render: function() {
    // console.log(videoData);

    // Get video link for first video
    var indicator = "?v="; // Indicate start of video id
    var currentVideoUrl = videoData[0].url.substring(videoData[0].url.indexOf(indicator));
    currentVideoUrl = currentVideoUrl.substring(indicator.length);

    // Create embedded YouTube iframe
    var currentVideo = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + currentVideoUrl + '" frameborder="0" allowfullscreen></iframe>'
    document.getElementById('currentVideo').innerHTML = currentVideo; // Inject into page

    var startAt = 1;
    var numVideos = startAt + 5;
    var counter = 0; // Keep track of num videos
    var videoNodes = videoData.map(function(video) {
      if (counter < numVideos && counter >= startAt) {
        counter++; // Add to counter
        return (
          <VideoBlock videoData={video} />
        )
      } else {
        counter++
        if (counter == numVideos + 1) { // Last slot links to YouTube channel
          var YouTubeChannel = {
            "title": "Princeton Tonight YouTube Channel",
            "imgURL": "assets/images/youtube-icon.png",
            "url": "https://www.youtube.com/channel/UCRVIKq9pzYzEE8arEE4H1LQ/videos"
          }
          return (
            <VideoBlock videoData={YouTubeChannel} />
          )
        }
      }
    });
    return (
      <div className="past-videos">
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
      <a className="video-block-link" href={video.url} target="_blank">
        <div className="video-block"
          onMouseEnter={this.handleHoverOn.bind(this)}
          onMouseLeave={this.handleHoverOff.bind(this)}>
          <img className={"video-thumbnail-img " + filter} src={video.imgURL} alt=""/>
          <div className="video-description-div">
            <p className={"video-description " + descriptionOpacity}>
              {video.title}
            </p>
          </div>
        </div>
      </a>
    )
  }
})

React.render(
  React.createElement(PreviousVideos, null),
  document.getElementById('previous-videos')
);
