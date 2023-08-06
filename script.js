function toFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").innerHTML = fahrenheit;
  }
  
  function toCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").innerHTML = celsius;
  }
  
  document.getElementById("to-fahrenheit").addEventListener("click", toFahrenheit);
  document.getElementById("to-celsius").addEventListener("click", toCelsius);
  