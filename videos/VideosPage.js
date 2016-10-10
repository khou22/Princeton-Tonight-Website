// React framework for Videos Page

var VideosPage = React.createClass({
  getInitialState: function() {
    return {
      data: videoData
    }
  },
  render: function() {
    return (
      <div>
        <PageHeader />
      </div>
    );
  }
})

var PageHeader = React.createClass({
  render: function() {
    return (
      <div>
        Hello world
      </div>
    )
  }
})

  React.render(
    React.createElement(VideosPage, null),
    document.getElementById('render-target')
  );
