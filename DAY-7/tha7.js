// // 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = 
// { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// Sample Output: name,sclass,rollno

var student = { 
	name : "David Rayy", sclass : "VI", rollno : 12 
    }; 
    console.log(Object.keys(student));
    document.write(Object.keys(student)+"<br>");

//  ques-2
// . Write a JavaScript program to delete the rollno property from the following object.
//  Also print the object before or after deleting the property.
//  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

	var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
	console.log("The objects before deleting the property");
	 console.log(student);

	 console.log(delete(student.rollno));

	 console.log("The objects after deleting the property");
	 console.log(student);

// ques-3
// Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log("The length is : " +Object.keys(student).length);

// oues-4. Write a JavaScript program to display the reading 
// status (i.e. display book name, author name and reading status) of the following books.
//  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
//   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

for(var i=0 ; i<library.length ; i++)
 {
     console.log(library[i].author);
     // document.write(library[i].title +"<br>");
     console.log(library[i].title);
     // document.write(library[i].author +"<br>");
     console.log(library[i].readingStatus);
     // document.write(library[i].readingStatus +"<br>");
 }
// ques-5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
// Try To Attempt : Difficult Level Increased

var vol={
		r:10,
        h:39.10,
    }
	var volume= 2*3.14* vol.r * vol.h;

        console.log( "Volume of cylinder is:" + volume.toFixed(5));


// Write a JavaScript program to sort an array of JavaScript objects.  
// Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
//  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
//  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
//  Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
//   [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
// [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]
 console.log(Object.entries(library).sort((a,b)=>a[0]-b[0])); 