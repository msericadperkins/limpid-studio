//Drop down menu-esque
var submenu = document.getElementById('submenu');
var subcontrol = document.getElementById('subcontrol');

subcontrol.addEventListener('mouseover', function() {
	submenu.classList.remove('none');
});
subcontrol.addEventListener('mouseout', function() {
	submenu.classList.add('none');
});

/*
Javascript Alternative if more images

function attachEvents() {
	var images = getImages()
  images.forEach(function(image) {
  	attachMouseOverEvent(image);
    attachMouseLeaveEvent(image);
  });
}

function attachMouseOverEvent(element) {
	element.addEventListener('mouseover', function(e) {
  	var clonedImage = e.target.cloneNode();
    addImageToPreview(clonedImage);
  });
}

function attachMouseLeaveEvent(element) {
	element.addEventListener('mouseleave', function(e) {
    removeImageFromPreview();
  });
}

function getImages() {
	return document.querySelectorAll('.img');
}

function getImagePreviewElement() {
	return document.querySelector('.imageholder');
}

function addImageToPreview(imageElement) {
	var previewElement = getImagePreviewElement();
  previewElement.classList.add('previewing');
  previewElement.appendChild(imageElement);
}

function removeImageFromPreview() {
	var previewElement = getImagePreviewElement();
  previewElement.classList.remove('previewing');
  var image = previewElement.querySelector('.img');
  image.remove();
}

attachEvents();
*/