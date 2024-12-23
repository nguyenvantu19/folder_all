var modal= document.querySelector('.modal')
var back = document.querySelector("button.btn.back");
var logout = document.querySelector("#logout");
var login = document.querySelector("#login");
var dk = document.querySelector("#dk");
var dn= document.querySelector("#dn");
var trolai = document.querySelector("#trolai");


dk.addEventListener('click',()=>{
    modal.setAttribute("id", "active");
    logout.setAttribute("id", "off");
});
dn.addEventListener('click',()=>{
    modal.setAttribute("id", "active");
    login.setAttribute("id", "off");
});
back.addEventListener('click',()=>{
    modal.removeAttribute("id","acrive");
    logout.removeAttribute("id", "off");
    login.removeAttribute("id", "off");
});
trolai.addEventListener('click',()=>{
    modal.removeAttribute("id","acrive");
    login.removeAttribute("id", "off");
});