
  var katzDeli = [];
  newCustomer = ["Steven", "Blake", "Avi", "Grace"];
  katzDeliLine = ["number 1", "number 2", "number 3", "number 4"];
  
function takeANumber(katzDeli, newCustomer) {
    katzDeli.push(newCustomer);
    count++;
      return `Welcome, ${newCustomer}. You are number ${katzDeliLine} in line.`;
}

function nowServing(x) {
  if (x[0] === " ") {
    console.log("There is nobody waiting to be served!");
  } else {
    var newPerson = x[0];
    newPerson.splice(0, 1);
    return `Currently serving ${newPerson[0]}.`;
  }
}

function currentLine(katzDeliLine) {
  var line = ["1. Bill", " 2. Jane", " 3. Ann"];
  if (line[0] === "") {
    console.log("The line is currently empty");
  } else {
    return `The line is currently: ${line}`;
  }
}





