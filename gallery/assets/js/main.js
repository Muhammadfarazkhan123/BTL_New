

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
    postMyAd()
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
    var div=document.createElement("DIV")
    div.setAttribute("class","col-md-4")
    var a=document.createElement("A");
	// a.setAttribute("class","col-md-3")
	var img=document.createElement("IMG")
	img.setAttribute("src",imgUrl)
	// a.setAttribute("id","imid")
	
    a.appendChild(img)
    div.appendChild(a)
    box.appendChild(div)
    // box.appendChild(div)

	a.addEventListener("click",function(){openModal(imgUrl)})

})

function openModal(e){
console.log(e,">>>>>>>>>")
var modalurl=e

var modalDiv=document.getElementById("modalimg")
var a=document.createElement("A");
a.setAttribute("class","aimg")
// a.setAttribute("style","width:50%;margin:0px 25% 0px 25%")


var modalImg=document.createElement("IMG")

modalImg.setAttribute("src",modalurl)
modalImg.setAttribute("class","mimg")
// modalImg.setAttribute("style","width:100%;height:400px")
// modalImg.style.width="100%"

a.appendChild(modalImg)
modalDiv.appendChild(a)



document.getElementById('myModal').style.display = "block";
document.getElementById('modalimg').style.display = "block";
document.getElementById('mainModal').style.display = "block";



}

// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
document.getElementById('mainModal').style.display = "none";
    
	document.getElementById("modalimg").innerHTML=""
  }
  
 
// storage
function load(){
    var pass="faraz"
    var passval=localStorage.getItem("passval")
    console.log(passval)
    if(passval !== pass){
        document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="block"
        // document.getElementById("upload").style.display="none"
        
    }
    else if(passval === pass){
        document.getElementById("one").style.display="block";
        document.getElementById("two").style.display="none"
        // document.getElementById("upload").style.display="block"
        
    }
    // return localStorage.setItem("passval","")

}


// Get the modal
var modal = document.getElementById('myModalhead');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closehead")[0];

// When the user clicks the button, open the modal 
function clickBtn() {
    modal.style.display = "block";
    
}

// When the user clicks on <span> (x), close the modal
function closeClick() {
    modal.style.display = "none";
}
 function submit(){
 var password=document.getElementById("password").value
 localStorage.setItem("passval",password)
  modal.style.display = "none";
  load()
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}