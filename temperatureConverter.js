/**
 * Created by irene.penuelas445 on 10/18/16.
 */


function calculate(temp) {
    var result;
    var celsius = document.getElementById('inputCelsius');
    var fahrenheit = document.getElementById('inputFahrenheit');
    var inputs = document.getElementsByClassName(inputsTemp);

    if (temp === "inputFahrenheit") {
        result = ( fahrenheit.value - 32) / 1.8;
        celsius.value = Math.round(result);

    }
    else {
        result = celsius.value * 1.8 + 32;
        fahrenheit.value = Math.round(result);
    }
    for (inputs; isNaN(inputs) || ""; inputs++) {
       alert("Please enter a numeric value");
        break;
    } //end loop

}//function end
