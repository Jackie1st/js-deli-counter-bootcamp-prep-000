
  var katzDeli = [];
  
function takeANumber(katzDeli, newCustomer) {
    katzDeli.push(newCustomer);
      return `Welcome, ${newCustomer}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli[0] === " ") {
    console.log("There is nobody waiting to be served!");
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
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





