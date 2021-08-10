function saturdayFun(activity="roller-skate") {
  let fun = `This Saturday, I want to ${activity}!`;
  return fun;
}

function mondayWork(activity="go to the office") {
  let fun = `This Monday, I will ${activity}.`;
  return fun;
}

function wrapAdjective(flair="*") {
  const result = function(description="special") {
    return `You are ${flair}${description}${flair}!`
    //const encouragingPromptFunction = wrapAdjective("!!!")
  }
       return result;
}


let Calculator = {};

Calculator.add = add;
Calculator.subtract = subtract;
Calculator.multiply = multiply;
Calculator.divide = divide;
Calculator.actionApplyer = actionApplyer;

function add(num1, num2) {
  return num1 + num2;
};

function subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
};

function divide(num1, num2) {
  return num1 / num2;
};

function actionApplyer(init, arry) {
  debugger;
  let num = arry.reduce(function(accumulator, element){ return element(accumulator)}, init);
  debugger;
  return num;

};







