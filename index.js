// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCbwdd9IY-WxcGCTFRobtMqQhDhbsm4aEQ",
    authDomain: "lab-hosting-509cf.firebaseapp.com",
    databaseURL: "https://lab-hosting-509cf.firebaseio.com",
    projectId: "lab-hosting-509cf",
    storageBucket: "lab-hosting-509cf.appspot.com",
    messagingSenderId: "407886046690"
  };
  firebase.initializeApp(config);

function scrollWin(){
          window.scrollTo(0,0);
        }
var storageRef =firebase.storage().ref()
function imagehandle(){
  var Ref1 = storageRef.child('image/img1.JPG'); 
  var Ref2 = storageRef.child('image/img2.png');
  var Ref3 = storageRef.child('image/img3.jpg');
  Ref1.getDownloadURL().then(function(url){
    $('#starburst').attr("src",url);
  })
  Ref2.getDownloadURL().then(function(url){
    $('#textimg').attr("src",url);
  })
  Ref3.getDownloadURL().then(function(url){
    $('#caco').attr("src",url);
  })
}
$(document).ready(function(){
  imagehandle();
})