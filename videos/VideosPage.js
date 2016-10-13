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
        <div className="video-block">
          <img className="video-thumbnail-img" src={video.thumbnailImage} alt="hello"/>
        </div>
      )
    });

    return (
      <div className="video-grid">
        {videoNodes}
      </div>
    )
  }
})

React.render(
  React.createElement(VideosPage, null),
  document.getElementById('render-target')
);
