// let secondbb=document.getElementByClassName("secondb");
let btn1text=document.getElementById("textfield");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn2text=document.getElementById('textfield2')

btn1.addEventListener('click', () =>{
    btn1text.classList.toggle('hidden');
});

btn2.addEventListener('click',()=>{
    btn2text.classList.toggle('hidden');
})
