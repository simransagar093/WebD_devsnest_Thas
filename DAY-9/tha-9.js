var box = document.querySelectorAll('.int');

var b = 0; //b=book seat
var r = 24; //r=remaning seat

 document.getElementById("but1").innerHTML= b+'';
 document.getElementById("but2").innerHTML= r+'';
box.forEach(item=>
 {
    item.addEventListener("click",function()
    {
	       if(item.classList.contains("clicked"))
	      {
	       item.classList.remove("clicked");

	       b--;
	       r++;

	       document.getElementById("but1").innerHTML= b+'';
	       document.getElementById("but2").innerHTML= r+'';
	      }

			      else{

			        item.classList.add("clicked");

			        b++;
			        r--;
			        document.getElementById("but1").innerHTML= b+'';
			        document.getElementById("but2").innerHTML= r+'';
			        console.log("clicked");
      }
    })
})


