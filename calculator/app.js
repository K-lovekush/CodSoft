let btn=document.querySelector(".NUM");
let inp=document.querySelector("#input");
console.dir(inp);
let one=document.querySelector("#one");
one.addEventListener("click",function(){
    inp.value=inp.value+one.innerText;
} )
let two=document.querySelector("#two");
two.addEventListener("click",function(){
    inp.value=inp.value+two.innerText;
} )
let three=document.querySelector("#three");
three.addEventListener("click",function(){
    inp.value=inp.value+three.innerText;
} )

let four=document.querySelector("#four");
four.addEventListener("click",function(){
    inp.value=inp.value+four.innerText;
} )

let five=document.querySelector("#five");
five.addEventListener("click",function(){
    inp.value=inp.value+five.innerText;
} )
let six=document.querySelector("#six");
six.addEventListener("click",function(){
    inp.value=inp.value+six.innerText;
} )

let seven=document.querySelector("#seven");
seven.addEventListener("click",function(){
    inp.value=inp.value+seven.innerText;
} )

let eight=document.querySelector("#eight");
eight.addEventListener("click",function(){
    inp.value=inp.value+eight.innerText;
} )

let nine=document.querySelector("#nine");
nine.addEventListener("click",function(){
    inp.value=inp.value+nine.innerText;
} )

let plus=document.querySelector("#plus");
plus.addEventListener("click",function(){
    inp.value=inp.value+plus.innerText;
} )

let devi=document.querySelector("#dev");
devi.addEventListener("click",function(){
    inp.value=inp.value+"/";
} );
let sub=document.querySelector("#sub");
sub.addEventListener("click",function(){
    inp.value=inp.value+sub.innerText;
})

let equl=document.querySelector("#equl");
equl.addEventListener("click",function(){
    inp.value=eval(inp.value);
})

let dzero=document.querySelector("#dzero");
dzero.addEventListener("click",function(){
    inp.value=inp.value+dzero.innerText;
} )

let zero=document.querySelector("#zero");
zero.addEventListener("click",function(){
    inp.value=inp.value+zero.innerText;
} );
let mul=document.querySelector("#multi");
mul.addEventListener("click",function(){
    inp.value=inp.value+mul.innerText;
} )

let ac=document.querySelector("#ac");
ac.addEventListener("click",function(){
    inp.value=' '
} )
let per=document.querySelector("#per");
per.addEventListener("click",function(){
    inp.value=inp.value+per.innerText;
} );

let del=document.querySelector("#del");
del.addEventListener("click",function(){
    inp.value=inp.value.slice(0,-1);
} );
let point=document.querySelector("#point");
point.addEventListener("click",function(){
    inp.value=inp.value+point.innerText;
} )