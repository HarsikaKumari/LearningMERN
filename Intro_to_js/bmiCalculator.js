function bmiCalculator(weight, height) {
    var calcBmi = Math.round(weight / Math.pow(height, 2));
    return calcBmi;
  }
  var bmi = bmiCalculator(65, 1.8);
  console.log(bmi); //20
  
  var n = Math.random();
  n *= 6;
  n = Math.floor(n) + 1;
  console.log(n);
  
  
  
  function bmiCalculator(weight, height) {
    var caclBmi = weight / Math.pow(height, 2);
  
    if (caclBmi <= 18.5) {
      return "Your BMI is " + caclBmi + ", so you are underweight.";
    }
  
    if (caclBmi >= 18.5 && caclBmi <= 24.9) {
      return "Your BMI is " + caclBmi + ", so you have a normal weight.";
    } else {
      return "Your BMI is " + caclBmi + ", so you are overweight.";
    }
  }
  