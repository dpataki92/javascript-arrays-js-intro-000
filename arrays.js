var chocolateBars = [snickers, hundred grand, kitkat, skittles];

function addElementToBeginningOfArray (arr, el) {
  var new = arr.unshift(el);
  return new;
}

function destructivelyAddElementToBeginningOfArray (arr, el) {
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray (arr, el) {
  var new = arr.push(el);
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
