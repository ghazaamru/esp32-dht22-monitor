
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration here (Do not use the existing configuration)
const firebaseConfig = {
apiKey: "AIzaSyCcy16JklIwUvoIjz3SqN-pEB1yqWVvJX0",
authDomain: "esp32-dev-ab590.firebaseapp.com",
databaseURL: "https://esp32-dev-ab590-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "esp32-dev-ab590",
storageBucket: "esp32-dev-ab590.firebasestorage.app",
messagingSenderId: "741669926498",
appId: "1:741669926498:web:ccc01bb26153fb2857433b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// getting reference to the database
var database = firebase.database();

//getting reference to the data we want
var dataRef1 = database.ref('/humidty');
var dataRef2 = database.ref('/temperature');

//fetch the data
dataRef1.on('value', function(getdata1){
var humi = getdata1.val();
document.getElementById('humidity').innerHTML = humi;
})

dataRef2.on('value', function(getdata2){
var temp = getdata2.val();
document.getElementById('temperature').innerHTML = temp;
})