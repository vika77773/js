let h1=document.querySelector('h1');
console.log(h1);

let p1=document.querySelector('p');
console.log(p1);

let p2=document.querySelector('.text1');
console.log(p2);

let p3=document.querySelector('.text2');
console.log(p3);

let p4=document.querySelector('.num');
console.log(p4);

let input=document.querySelector('#i1');
console.log(input.value);

let div=document.querySelector('#list');
console.log(div);

let button=document.querySelector('#start1');

let button2=document.querySelector('#start2');

let button3=document.querySelector('#start3');

let button4=document.querySelector('#start4');

let button5=document.querySelector('#start5');

let a=document.querySelector('a');

let button6=document.querySelector('#cancel');

let img=document.querySelector('.img1');

let img2=document.querySelector('.img2');

let input2=document.querySelector('#i2');
console.log(input2.value);

let input3=document.querySelector('#i3');
console.log(input3.value);


let input4=document.querySelector('#i4');
console.log(input4.value);


let input5=document.querySelector('#i5');
console.log(input5.value);


let input6=document.querySelector('#i6');
console.log(input6.value);


let input7=document.querySelector('#i7');
console.log(input7.value);

console.log(img.src);

div.innerHTML='<h2> поменяли </h2>';
h1.innerHTML='текст';

button.addEventListener('click', function(){
    h1.innerHTML='Я ничего не знаю';
});

/*button2.addEventListener('click', function(){
    let a2=+input.value; let b=+input2.value;
input3.value=a2+b;
}); */

button6.addEventListener('click', function(){
input.value=''; input2.value=''; input3.value='';
});

//задача 1

button2.addEventListener('click',function(){
input.value='привет';
});

button.addEventListener('click',function(){
    input2.value='пока';
    });




//задача 2

button3.addEventListener('click', function(){
let num3=num.innerHTML;
console.log(num3);
num3++

});



//задача 3

button4.addEventListener('click', function(){
    div.innerHTML='<i> hello </i>';
});

//задача 4

button5.addEventListener('click', function(){
    input2.value=a;
});


//задача 5

button4.addEventListener('click', function(){
 let ass=img1.src;
 text1.innerHTML=ass;
});

//задача 6
let t=img.width;

button5.addEventListener('click', function(){
img.width=300;
});



//задача 7
let d=img.width;

button2.addEventListener('click', function(){
let h=img.width*2;

});


//задача 8

let as1=img.src;
let as2=img2.src
button3.addEventListener('click', function(){
img.src=as2;
img2.src=as1;
});

//задача 9

button.addEventListener('click', function(){

});



//задача 10

button2.addEventListener('click', function(){
let c1=+input.value; let c2=+input2.value; let c3=+input3; let c4=+input4;
let c5=+input5;
let c6=input6.value =(ruka1+ruka2+ruka3+ruka4+ruka5)/5;
});





