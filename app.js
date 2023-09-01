let firstvalue ='';
let operation = '';
let secondvalue = '';
//Screen
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const deleete = document.querySelector('.delete')
//operators
const division = document.querySelector('.division');
const multiplication = document.querySelector('.multiplication');
const substraction = document.querySelector('.substraction');
const addition = document.querySelector('.addition');
const egal = document.querySelector('.egal');

//numbers
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const zeero = document.querySelector('.zeero');
// append met en liaison
// addEventListener ajout levenement qu'on attend
// querySelector nous permet de selectionner un element precis
    // Equal button
egal.addEventListener('click',function (event) {
    //addition
    if (operation === '+') {
        secondvalue = display.innerText;
        display.innerText = "";
        return display.append(parseInt(firstvalue) + parseInt(secondvalue));
        


        // subs
    } else if (operation === '-') {
        secondvalue = display.innerText;
        display.innerText = "";
        return display.append(firstvalue - secondvalue);


        //multiply
    } else if (operation === '*') {
        secondvalue = display.innerText;
        display.innerText = "";
        return display.append(firstvalue * secondvalue);


        //division
    } else if (operation === '/') {
        secondvalue = display.innerText;
        display.innerText = "";
        return display.append(firstvalue / secondvalue);
    } else {
        return 'null'
    }
} )




//Addition
addition.addEventListener('click',function(event){
    firstvalue = display.innerText
    display.innerText = "";
    console.log(firstvalue)
    operation = event.target.innerText
    display.innerText = "";
})
//substraction
substraction.addEventListener('click', function(event){
    firstvalue = display.innerText
    display.innerText = "";
    console.log(firstvalue)
    operation = event.target.innerText
    display.innerText = "";
})
//Multiplication
multiplication.addEventListener('click',function(event){
    firstvalue = display.innerText
    display.innerText = "";
    console.log(firstvalue)
    operation = event.target.innerText
    display.innerText = "";
})
//Division
division.addEventListener('click',function(event){
    firstvalue = display.innerText
    display.innerText = "";
    console.log(firstvalue)
    operation = event.target.innerText
    display.innerText = "";
})


//Button DEL
deleete.addEventListener('click',function(event){
    let del= display.innerText.split('')
    del.pop()

    del = del.join('')

    display.innerText = del
    console.log(del)
})

//Button CLEAR
clear.addEventListener('click',function(event){
   display.innerText = "";
})

seven.addEventListener('click', function(event){
    let result7= event.target.innerHTML;
    return display.append(result7);
} );

eight.addEventListener('click', function(event){
    let result8= event.target.innerHTML;
    return display.append(result8);
} );

nine.addEventListener('click', function(event){
    let result9= event.target.innerHTML;
    return display.append(result9);
} );
four.addEventListener('click', function(event){
    let result4= event.target.innerHTML;
    return display.append(result4);
} );
five.addEventListener('click', function(event){
    let result5= event.target.innerHTML;
    return display.append(result5);
} );
six.addEventListener('click', function(event){
    let result6= event.target.innerHTML;
    return display.append(result6);
} );
one.addEventListener('click', function(event){
    let result1= event.target.innerHTML;
    return display.append(result1);
} );
two.addEventListener('click', function(event){
    let result2= event.target.innerHTML;
    return display.append(result2);
} );
three.addEventListener('click', function(event){
    let result3= event.target.innerHTML;
    return display.append(result3);
} );
zeero.addEventListener('click', function(event){
    let result0= event.target.innerHTML;
    return display.append(result0);
} );






