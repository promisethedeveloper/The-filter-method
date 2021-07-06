const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using the filter method
const output = movements.filter(function(mov) {
  return mov > 0;
});
console.log(movements);
console.log(output);


console.log('+++++++++++++++')

// Using For of method
const outPutArray = [];
for (const mov of movements) {
  if (mov > 0) {
    outPutArray.push(mov);
  }
}
console.log(outPutArray);

// Using the filter method
const withdrawals = movements.filter(function(mov) {
  return mov < 0;
})
console.log(withdrawals);