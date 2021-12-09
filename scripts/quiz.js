"use strict";
var review =  function () {
  document.getElementById("quiz").submit();
};
var checkQuiz = function() {
  var q1 = document.getElementsByName("q1");
  var q2 = document.getElementsByName("q2");
  var q3a1 = document.getElementById("q3a1");
  var q3a2 = document.getElementById("q3a2");
  var q3a3 = document.getElementById("q3a3");
  var q3a4 = document.getElementById("q3a4");
  var q3a5 = document.getElementById("q3a5");
  var q4a1 = document.getElementById("q4a1");
  var q4a2 = document.getElementById("q4a2");
  var q4a3 = document.getElementById("q4a3");
  var q4a4 = document.getElementById("q4a4");
  var q5 = document.getElementById("q5").value;
  
  for (var i = 0; i < q1.length; i++) {
    document.getElementById(q1[i].id).nextElementSibling.innerHTML = " ";
  }
  for (var i = 0; i < q2.length; i++) {
    document.getElementById(q2[i].id).nextElementSibling.innerHTML = " ";
  }
  document.getElementById("q3a1").nextElementSibling.innerHTML = " ";
  document.getElementById("q3a2").nextElementSibling.innerHTML = " ";
  document.getElementById("q3a3").nextElementSibling.innerHTML = " ";
  document.getElementById("q3a4").nextElementSibling.innerHTML = " ";
  document.getElementById("q3a5").nextElementSibling.innerHTML = " ";
  document.getElementById("q4a1").nextElementSibling.innerHTML = " ";
  document.getElementById("q4a2").nextElementSibling.innerHTML = " ";
  document.getElementById("q4a3").nextElementSibling.innerHTML = " ";
  document.getElementById("q4a4").nextElementSibling.innerHTML = " ";
  for (var i = 0; i < q1.length; i++) {
    if (q1[i].checked) {
      if (q1[i].value == "longexposure") {
        document.getElementById(q1[i].id).nextElementSibling.innerHTML = "  Correct";
        break;
      }
      else {
        document.getElementById(q1[i].id).nextElementSibling.innerHTML = "  Incorrect";
        break;
      }
    }
  }
  for (var i = 0; i < q2.length; i++) {
    if (q2[i].checked) {
      if (q2[i].value == "tripod") {
        document.getElementById(q2[i].id).nextElementSibling.innerHTML = "  Correct";
        break;
      }
      else {
        document.getElementById(q2[i].id).nextElementSibling.innerHTML = "  Incorrect";
        break;
      }
    }
  }
  
  if (q3a1.checked) {
    document.getElementById("q3a1").nextElementSibling.innerHTML = "  Correct";
  }
  else {
    document.getElementById("q3a1").nextElementSibling.innerHTML = "  Incorrect";
  }
  if (q3a2.checked) {
    document.getElementById("q3a2").nextElementSibling.innerHTML = "  Correct";
  }
  else {
    document.getElementById("q3a2").nextElementSibling.innerHTML = "  Incorrect";
  }
  if (q3a3.checked) {
    document.getElementById("q3a3").nextElementSibling.innerHTML = "  Correct";
  }
  else {
    document.getElementById("q3a3").nextElementSibling.innerHTML = "  Incorrect";
  }
  if (q3a4.checked) {
    document.getElementById("q3a4").nextElementSibling.innerHTML = "  Correct";
  }
  else {
    document.getElementById("q3a4").nextElementSibling.innerHTML = "  Incorrect";
  }
   if (q3a5.checked) {
    document.getElementById("q3a5").nextElementSibling.innerHTML = "  Incorrect";
  }
   if (q4a1.checked) {
    document.getElementById("q4a1").nextElementSibling.innerHTML = "  Correct";
  }
  else {
    document.getElementById("q4a1").nextElementSibling.innerHTML = "  Incorrect";
  }
  if (q4a2.checked) {
    document.getElementById("q4a2").nextElementSibling.innerHTML = "  Correct";
  }
  else {
    document.getElementById("q4a2").nextElementSibling.innerHTML = "  Incorrect";
  }
  if (q4a3.checked) {
    document.getElementById("q4a3").nextElementSibling.innerHTML = "  Incorrect";
  }
  if (q4a4.checked) {
    document.getElementById("q4a4").nextElementSibling.innerHTML = "  Correct";
  }
  else {
    document.getElementById("q4a4").nextElementSibling.innerHTML = "  Incorrect";
  }
  if (q5.toLowerCase() == "cs2800") {
    document.getElementById("q5").nextElementSibling.innerHTML = "  Correct";
  }
  else if (q5.toLowerCase() == "") {
    document.getElementById("q5").nextElementSibling.innerHTML = "";
  }
  else {
    document.getElementById("q5").nextElementSibling.innerHTML = "  Incorrect";
  }
};
window.onload = function() {
  document.getElementById("check").onclick = checkQuiz;
  document.getElementById("review").onclick = review; 
}