function cToF(celsius) 
{
  var celTemp = celsius;
  var celToFahr = celTemp * 9 / 5 + 32;
  var message = celTemp+'\xB0C is ' + celToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var farTemp = fahrenheit;
  var fToCel = (farTemp - 32) * 5 / 9;
  var message = farTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(100);
fToC(200);