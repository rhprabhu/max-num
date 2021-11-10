/*To calculate the max, define a JS function max() that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct.*/

//created function called max()
function Max(){
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;

    //using if-else 
    if(num1 >num2){
    document.getElementById("display_result").innerHTML=num1;
    }
    else{
        document.getElementById("display_result").innerHTML=num2;
    }
}
