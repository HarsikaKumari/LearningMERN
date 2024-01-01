function add(num1,num2) {
    return num1 + num2;
  }
  function subtract(num1,num2) {
    return num1 - num2;
  }
  function multiply(num1,num2) {
    return num1 * num2;
  }
  function divide(num1,num2) {
    return num1 / num2;
  }
  function calculator(num1,num2,operater) {
    return operater(num1,num2);
  }
  
  
  var houseKeeper1 = {
    Name: "angela",
    yearsOfExperience: 5,
    aggrementOfWorking: 2,
  }


  function HouseKeeper (name,yearOfExperience,aggrementOfWorking) {
    this.name = name;
    this.yearOfExperience = yearOfExperience;
    this.aggrementOfWorking = aggrementOfWorking;
  }
  
  var houseKeeper1 = new HouseKeeper ("Ruchi", [10,2,3], 2);


  function HouseKeeper (name,yearOfExperience,aggrementOfWorking) {
    this.name = name;
    this.yearOfExperience = yearOfExperience;
    this.aggrementOfWorking = aggrementOfWorking;
    this.clean = function() {
      alert("Cleaning in progress...");
    }
  }
  
  var houseKeeper1 = new HouseKeeper ("Ruchi", [10,2,3], 2,);