var gridData = {
  columns: 4,
  textColor: "white",
  openNewWindow: true,
  data: []
}

for (var i = 0; i < imageData.length; i++) {
  var currentImage = imageData[i];

  var gridItem = {
    title: '',
    subtitle: '',
    description: '',
    image: '../assets/images/gallery/' + currentImage,
    link: '../assets/images/gallery/' + currentImage,
    size: "1",
    category: {
      label: '',
      color: 'clear'
    }
  }

  gridData.data.push(gridItem); // Add to data
}
