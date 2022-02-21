var photoQuantity;
var photoId=1;

fetch('http://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => {
        photoQuantity = data.length;
        showPic(data[0]);
    });
function showPrevious(){
    if(photoId > 1){
        photoId--;
        fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(res => res.json())
        .then(data => showPic(data));
    }
};

function showNext(){
    if(photoId <photoQuantity){
        photoId++;
        fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(res => res.json())
        .then(data => showPic(data));
    }
};

function showPic(data){
    document.getElementById('image-show').src = data.url;
}

