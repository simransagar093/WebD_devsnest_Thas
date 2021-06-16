// ques-1
// / Write a JavaScript function to check whether an `input` is an array or not
// // Test Data :

// console.log(is_array('w3resource'));

// console.log(is_array([1, 2, 4, 0]));

// false

// True
// is_array

function is_array(x)
{
	console.log(Array.isArray(x));
}
console.log(is_array('w3schools'));
console.log(is_array([1,2,4,0]));



// ques-2
// Write a JavaScript function to clone an array
// Test Data :

// console.log(array_Clone([1, 2, 4, 0]));

// console.log(array_Clone([1, 2, [4, 0]]));

// [1, 2, 4, 0]

// [1, 2, [4, 0]]
function array_Clone(x) {

	console.log(x.slice(0));
}
console.log(array_Clone([1, 2, 4, 0]));

console.log(array_Clone([1, 2, [4, 0]]));


// ques-3
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :

// console.log(first([7, 9, 0, -2]));

// console.log(first([],3));

// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// Expected Output :

// 7

// []

// [7, 9, 0]

var arr=[7, 9, 0, -2]
function first(arr,n) {
	if(n==0)
		console.log(arr[0]);
	if(arr==null)
		console.log("[]")
	if(n<0)
		console.log('[]')
console.log(arr.slice(0,n));
}

// ques-4
// // Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];

// Expected Output :

// "Red,Green,White,Black"

// "Red,Green,White,Black"

// "Red+Green+White+Black"
function tojoin(array)
{
	console.log(array.join("+"));
}
console.log(tojoin(["Red", "Green", "White", "Black"]))

// ques-5
// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Sample Output : a ( 5 times )

function frequent(array)
{
	var k
	var max=0
	for(var i=0;i<array.length;i++)
	{
		var s=0
		for(var j=0;j<array.length;j++)
		{
			if(array[i]==array[j])
				s=s+1;
		}
		if(s>max)
		{
			max=s;
			k=array[i];
		}
	}
	console.log(k+" ( " +max+ " times )");
}
frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);