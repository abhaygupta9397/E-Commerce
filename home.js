// function dropdown(){
//    document.getElementById("myDropdown").classList.toggle("show");
// }

//  or delete it find out where it is used next two line
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}