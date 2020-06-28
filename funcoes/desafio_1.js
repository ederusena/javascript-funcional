// somar(3)(4)(5)

function somar(num1) {
    return function(num2){
        return function(num3) {
            return num1 + num2 + num3
        }
    }
}

const somarPrimeiro = somar(2)
const somarSegundo = somarPrimeiro(2)
console.log(somarSegundo(2))

console.log(somar(1)(1)(1))

// calcular(3)(7)(fn)
function calcular(arg1){
    return function(arg2){
        return function(fn){
            return fn(arg1,arg2)
        }
    }
}

const calc = calcular(10)(2)
function mult(arg1,arg2){
    return arg1 * arg2
}


function div(arg1,arg2){
    return arg1 / arg2
}


function sub(arg1,arg2){
    return arg1 - arg2
}


function sum(arg1,arg2){
    return arg1 + arg2
}

console.log(calc(mult))
console.log(calc(div))
console.log(calc(sub))
console.log(calc(sum))