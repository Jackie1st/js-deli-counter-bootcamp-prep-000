
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
  if (katzDeli.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(katzDeli) {
  var line = [];
  let i = 0;
  while (i < katzDeli.length) {
    line.push();
    i++;
  }
  if (line.length === 0) {
    return ("The line is currently empty");
  } else {
    return `The line is currently: ${ line}`;
  }
}





