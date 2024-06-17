const imageData = [
    'https://media.assettype.com/newindianexpress%2F2024-05%2F829c5e53-1d2e-4869-a512-83b32a541eed%2Fhitlist.jpg',
    'https://i.ytimg.com/vi/mxphAlJID9U/mqdefault.jpg',
    'https://media.istockphoto.com/id/1032516536/photo/video-archives-concept.jpg?s=1024x1024&w=is&k=20&c=28oCHdZxYoTsB8eWhmt4oJwQ3gG-Z0jS2tUUpqrBhq4=',
    'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://media.istockphoto.com/id/1179772043/photo/vintage-film-projector-and-film-screening.jpg?s=612x612&w=0&k=20&c=jlnm994Z7Vq0uIndmSwfNrTI7WM2P5s43bSfBtKAG60=',
    'https://cdn.pixabay.com/photo/2017/08/01/08/07/sea-2563389_1280.jpg'
   
];

let currentIndex = 0;
const slideImage = document.getElementById('slideImage');

// Function to change the image
function changeImage() {
    currentIndex = (currentIndex + 1) % imageData.length;
    slideImage.src = imageData[currentIndex];
}

// Set the first image as the default image
slideImage.src = imageData[currentIndex];

// Change image every 2000ms (2 seconds)
setInterval(changeImage, 2000);
