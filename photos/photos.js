var gridData = {
  columns: 4,
  textColor: "white",
  modal: true,
  openNewWindow: true,
  data: []
}

for (var i = 0; i < imageData.length; i++) {
    var currentImage = imageData[i];

    var gridItem = {
        image: '../assets/images/gallery/' + currentImage,
        link: '../assets/images/gallery/' + currentImage,
        size: "1",
    }

    gridData.data.push(gridItem); // Add to data
}
