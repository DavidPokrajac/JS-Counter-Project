window.onload = function(){

  // Referencing HTML tags
  var number = document.querySelector("#number");

  var lowerCount = document.getElementById("lower-count");

  var addCount = document.getElementById("add-count");

  var arr = 0;
  number.textContent = arr;

  // Adding event listener when lower count button is clicked
  lowerCount.addEventListener("click", function(){

    //When clicked, arr variable will decrement by 1 and we'll set the textContent of the number equale to that array value
    arr--;
    number.textContent = arr;

    // If less than 0, the color of the text will be red; if equal to 0, the text will remain black
    if(arr < 0){
      number.style.color = "firebrick";
    } else if(arr === 0){
      number.style.color = "black";
    }

  });

  // Adding event listener when add coutn button is clicked
  addCount.addEventListener("click", function(){

    // When clicked, arr variable will increment by 1 amd we'll again set the textContent of number to array value
    arr++;
    number.textContent = arr;

    // If more than 0; the color of the text will be green; if equal to 0, the text will remain black
    if(arr > 0){
      number.style.color = "seagreen";
    }else if(arr === 0){
      number.style.color = "black";
    }

  });

}
