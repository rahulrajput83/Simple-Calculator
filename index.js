/* $("#inc-btn").on("click", function () {
    let val = parseInt($("#counter").text());
    val++;
    $("#counter").text(val);
  });
  
  $("#dec-btn").on("click", function () {
    let val = parseInt($("#counter").text());
    val--;
    $("#counter").text(val);
  }); */
  
   let counter = document.getElementById("counter");
   let plus = document.getElementById("plus");
   let minus = document.getElementById("minus");
   let multiply = document.getElementById("multiply");
   let divide = document.getElementById("divide");
   let addOne = document.getElementById("1");
   let addTwo = document.getElementById("2");
   let addThree = document.getElementById("3");
   let addFour = document.getElementById("4");
   let addFive = document.getElementById("5");
   let addSix = document.getElementById("6");
   let addSeven = document.getElementById("7");
   let addEight = document.getElementById("8");
   let addNine = document.getElementById("9");
   let addZero = document.getElementById("0");
   let total = document.getElementById("=");
   let Clear = document.getElementById("C");


 addOne.addEventListener("click", function () {
    let val = counter.innerText;
   val += 1;
    counter.innerText = val;
  });

  addTwo.addEventListener("click", function () {
    let val = counter.innerText;
   val += 2;
    counter.innerText = val;
  });

  addThree.addEventListener("click", function () {
    let val = counter.innerText;
   val += 3;
    counter.innerText = val;
  });

  addFour.addEventListener("click", function () {
    let val = counter.innerText;
   val += 4;
    counter.innerText = val;
  });

  addFive.addEventListener("click", function () {
    let val = counter.innerText;
   val += 5;
    counter.innerText = val;
  });

  addSix.addEventListener("click", function () {
    let val = counter.innerText;
   val += 6;
    counter.innerText = val;
  });

  addSeven.addEventListener("click", function () {
    let val = counter.innerText;
   val += 7;
    counter.innerText = val;
  });

  addEight.addEventListener("click", function () {
    let val = counter.innerText;
   val += 8;
    counter.innerText = val;
  });

  addNine.addEventListener("click", function () {
    let val = counter.innerText;
   val += 9;
    counter.innerText = val;
  });

  addZero.addEventListener("click", function () {
    let val = counter.innerText;
   val += 0;
    counter.innerText = val;
  });

  plus.addEventListener("click", function () {
     let val = counter.innerText;
    val += this.innerText;
     counter.innerText = val;
  });

  minus.addEventListener("click", function () {
    let val = counter.innerText;
   val += this.innerHTML
    counter.innerText = val;
  });

  multiply.addEventListener("click", function () {
    let val = counter.innerText;
   val += this.innerText;
    counter.innerText = val;
  });

  divide.addEventListener("click", function () {
    let val = counter.innerText;
   val += this.innerText;
    counter.innerText = val;
  });

  total.addEventListener("click", function () {
    let val = eval(counter.innerText);
    counter.innerText = val;
  });


  Clear.addEventListener("click", function () {
    let val = "";
    counter.innerText = val;
  });
  
  