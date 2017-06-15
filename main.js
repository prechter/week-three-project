let nums = document.getElementsByClassName("num");
let displayArray = [];

for (var i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", displayNum);
  function displayNum() {
    let display = document.getElementById("display");
    displayArray.push(this.value);
    display.value = displayArray.join("");
    console.log(displayArray);
  }
}
