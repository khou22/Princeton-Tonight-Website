var gridData = {
  columns: 4,
  textColor: "white",
  openNewWindow: true,
  data: []
}

/************  Episodes  ************
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
*/

/************  Playlists  ************/
for (var i = 0; i < playlistData.length; i++) {
  var currentPlaylist = playlistData[i];

  var gridItem = {
    title: currentPlaylist.name,
    subtitle: currentPlaylist.subtitle,
    description: currentPlaylist.description,
    image: currentPlaylist.image,
    link: currentPlaylist.slug,
    size: "2",
    category: {
      label: currentPlaylist.category,
      color: currentPlaylist.categoryColor
    }
  }

  gridData.data.push(gridItem); // Add to data
}
