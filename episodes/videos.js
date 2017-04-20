var gridData = {
  columns: 6,
  textColor: "white",
  openNewWindow: false,
  data: []
}

// Populate grid data from videoData object
// Prepares the gridData object
for (var i = 0; i < videoData.length; i++) {
  var currentVideo = videoData[i];

  var gridItem = {
    title: currentVideo.title,
    subtitle: "Subtitle",
    description: "Description",
    image: currentVideo.imgURL,
    link: currentVideo.url,
    size: "2",
    category: {
      label: "Videos",
      color: "orange"
    }
  }

  gridData.data.push(gridItem); // Add to data
}
