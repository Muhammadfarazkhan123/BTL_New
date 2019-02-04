

// var Durl;
// storage

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBKnYUaRAiVeI_kIcUjxaSA8LZVJHVD_oQ",
    authDomain: "biotechnologylabuok.firebaseapp.com",
    databaseURL: "https://biotechnologylabuok.firebaseio.com",
    projectId: "biotechnologylabuok",
    storageBucket: "biotechnologylabuok.appspot.com",
    messagingSenderId: "605074242158"
  };
  firebase.initializeApp(config);


console.log("here")
  // // File
var fileBtn = document.querySelector(".file");
// var progressBar = document.getElementById("uploader");

fileBtn.addEventListener("change", async function (e) {
    //   get a file
    file = e.target.files[0];
});

function postMyAd() {


// document.getElementById("uploader").style.display="block"

//     //   create a storage ref
var storageRef = firebase.storage().ref("btl/" + file.name);
//     //   upload a file
var uploadTask = storageRef.put(file);

//     // Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
function (snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    // progressBar.value = percentage;
    console.log('Upload is ' + percentage + '% done');
    switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
    }
},
 function (error) {

// //             // A full list of error codes is available at
// //             // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
        case 'storage/unauthorized':
            console.log(error, "User doesn't have permission to access the object");
            break;

        case 'storage/canceled':
            console.log(error, "User canceled the upload");
            break;

        case 'storage/unknown':
            console.log(error, "Unknown error occurred, inspect error.serverResponse");
            break;
    }
},

function () {

storageRef.getDownloadURL().then(function(url) {

	firebase.database().ref("biotechnologylab").child("images").push(url)

}

)

})}

firebase.database().ref("biotechnologylab").child("images").on("child_added",(data)=>{
	console.log(data.val())
	let imgUrl=data.val();

	var box=document.getElementById("orignal")
	var a=document.createElement("A");
	// a.setAttribute("href",imgUrl)
	var img=document.createElement("IMG")
	img.setAttribute("src",imgUrl)
	// a.setAttribute("id","imid")
	
	a.appendChild(img)
	box.appendChild(a)

	a.addEventListener("click",function(){openModal(imgUrl)})

})

function openModal(e){
console.log(e,">>>>>>>>>")
var modalurl=e

var modalDiv=document.getElementById("modalimg")
var a=document.createElement("A");
var modalImg=document.createElement("IMG")
modalImg.setAttribute("src",modalurl)
modalImg.setAttribute("style","width:100%")
// modalImg.style.width="100%"

a.appendChild(modalImg)
modalDiv.appendChild(a)



document.getElementById('myModal').style.display = "block";
document.getElementById('modalimg').style.display = "block";


}

// Close the Modal
function closeModal() {
	document.getElementById('myModal').style.display = "none";
	document.getElementById("modalimg").innerHTML=""
  }
  
 
// storage




/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

// $(function() {

// 	// Vars.
// 		var	$window = $(window),
// 			$body = $('body'),
// 			$wrapper = $('#wrapper');

// 	// Breakpoints.
// 		skel.breakpoints({
// 			xlarge:	'(max-width: 1680px)',
// 			large:	'(max-width: 1280px)',
// 			medium:	'(max-width: 980px)',
// 			small:	'(max-width: 736px)',
// 			xsmall:	'(max-width: 480px)'
// 		});

// 	// Disable animations/transitions until everything's loaded.
// 		$body.addClass('is-loading');

// 		$window.on('load', function() {
// 			$body.removeClass('is-loading');
// 		});

// 	// Poptrox.
// 		$window.on('load', function() {

// 			$('.thumbnails').poptrox({
// 				onPopupClose: function() { $body.removeClass('is-covered'); },
// 				onPopupOpen: function() { $body.addClass('is-covered'); },
// 				baseZIndex: 10001,
// 				useBodyOverflow: false,
// 				usePopupEasyClose: true,
// 				overlayColor: '#000000',
// 				overlayOpacity: 0.75,
// 				popupLoaderText: '',
// 				fadeSpeed: 500,
// 				usePopupDefaultStyling: false,
// 				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
// 			});

// 		});

// });