var chocolateBars = [snickers, hundred grand, kitkat, skittles];

function addElementToBeginningOfArray (arr, el) {
  var new = arr;
  new.unshift(el);
  return new;
}

function destructivelyAddElementToBeginningOfArray (arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray (arr, el) {
  var new = arr;
  new.push(el);
  result new;
}

function destructivelyAddElementToEndOfArray (arr, el) {
  arr.push(el);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray (arr) {
  var new = arr.slice(0, arr.length-1);
  return new;
}
