//TASK2
// window.addEventListener("resize", function() {
//     this.document.getElementById("gem");
//     if(window.innerWidth < 600) {
//         console.log('Ви використоввуєте мобільну версію');
//     }
//     else{
//         this.console.log('Ви використоввуєте компютерну версію')
//     }
// });
//TASK4
// modal = document.getElementById('myModal');
// window.addEventListener('keydown', function(event) {
//     if(event.code == 'KeyO' && (event.altKey || event.metaKey)){
//         modal.style.display = "block";
// }
//     if(event.code == 'KeyC' && (event.altKey || event.metaKey)){
//         modal.style.display = "none";
//     }
// });
//TASK3
// window.onclick = function() {
//     let val = document.getElementById('elem1').value;
//     document.getElementById('str').innerHTML = val;
// };
//TASK4
let elem = document.createElement("p");
elem.innerHTML = "Очікую на ввід даних";
document.body.appendChild(elem);
let elem1 = document.createElement("input");
elem1.style.display = "none";
document.body.appendChild(elem1);
window.addEventListener('keydown', function(event) {
        if(event.code == 'KeyA' && (event.altKey || event.metaKey)){
            elem.style.display= "none";
            elem1.style.display = "block";
            elem1.value = elem.innerHTML;
    }
        if(event.code == 'KeyS' && (event.shiftKey || event.metaKey)){
            elem1.style.display = "none";
            elem.style.display= "block";
            elem.innerText = elem1.value;
        }
    });