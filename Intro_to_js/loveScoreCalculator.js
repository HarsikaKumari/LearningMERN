prompt("Give the first number");
  prompt("Give the second number");
  var n = Math.random();
  n *= 100;
  n = Math.round(n) + 1;
  
  if (n > 70) {
    alert(
      "Your love score is " + n + ", you love each other like romio and juliet"
    );
  }
  if (n > 30 && n < 70) {
    alert("Your love score is " + n);
  } else {
    alert(
      "Your love score is " + n + ", you go with each other like oil and water"
    );
  }