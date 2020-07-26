// Calculate Percentage/
var number1=document.getElementById("number1");
var number2=document.getElementById("number2");
var form=document.getElementById("calculatePercentage");

form.addEventListener("submit", function(event)
                     {
    if (!number1.value || !number2.value)
    {alert("Please enter the values to calculate percentage");}
    else {
        var x=parseFloat(number1.value);
        var y=parseFloat(number2.value);
        var result = x/y*100 ;
        
    percentage.innerText="Result is : " + result + " %" ;
    }
    event.preventDefault();
})

// Calculate Interest//
var principle=document.getElementById("principle");
var time =document.getElementById("time");
var roi=document.getElementById("roi");
var result1=document.getElementById("result1");
var form=document.getElementById("calculateInterest");

form.addEventListener("submit", function(stop)
    { 
    if (!principle.value || !time.value || !roi.value)
    {alert("Please enter values");}
    else
    {
        var x=parseFloat(principle.value);
        var y=parseFloat(time.value);
        var z=parseFloat(roi.value);
        var result=x*y*z/100;
        interest.innerText="Interest is : "+result + " Rupees";
    }
   stop.preventDefault(); 
    
})

