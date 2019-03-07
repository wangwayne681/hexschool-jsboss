window.addEventListener("DOMContentLoaded", function() {
    let content = document.getElementById("content");
    for (i=2; i<10; i++) {
        let div = document.createElement("div");
        div.classList.add("box");
        let str = `<h3>${i}</h3>`
        for (j=1; j<10; j++) {
            str += `<p>${i} x ${j} = ${i * j}</p>`
        }
        div.innerHTML = str;
        content.appendChild(div);
    }
    console.log(content); 
});

