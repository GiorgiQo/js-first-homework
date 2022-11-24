
let a  = 10;
let b = "10";
function equal (a,b) {
    if(a==b)
    return "true"
    else 
    if (a !==b)
    return "false"
}
console.log (equal(a,b))


let fahrenheit = 100;

function fahrenheitToC (fahrenheit) {
    if (typeof fahrenheit =="number")
    return (fahrenheit -32)*5/9;
    else { (typeof fahrenheit !=="number")
    return "please enter number"
    }

}

console.log (fahrenheitToC (fahrenheit))


let c = 10;
let d = 20;
let op = "/";


function notNumber (c,d,op) {
    if(typeof c !== "number" && typeof d !== "number"){
        return "enter number"
    }

        if ( op == "+" ||  op == "-" ||  op == "/" ||  op == "*") {
            return operations()}
            else {
                return "false"
            }
}

function operations (){
    if (op == "+") {
        return c+d;
    }
    else if (op == "-") {
        return c-d
    }
    else if (op == "*") {
        return c*d
    }

    else if (op == "/") {
        return c/d
    }
}

console.log(notNumber (c,d,op))







