let c1 = document.getElementById("cir1");
let c2 = document.getElementById("cir2");
let c3 = document.getElementById("cir3");
let c4 = document.getElementById("cir4");

// circle 1
c1.addEventListener("mouseenter" , () => {
    let rnd = Math.floor(Math.random()*100);
    c1.innerHTML = `<h1>${rnd}</h1>`;
})

c1.addEventListener("mouseleave" , () => {
    c1.innerHTML = "<h1>1</h1>";
})
c1.addEventListener("dblclick" , () => {
    let rnd1 = Math.floor(Math.random()*256);
    let rnd2 = Math.floor(Math.random()*256);
    let rnd3 = Math.floor(Math.random()*256);
    c1.style.backgroundColor = `rgb(${rnd1} , ${rnd2} , ${rnd3})`;
})


// circle 2
let flg = 0;
c2.addEventListener("mouseenter" , () => {
    if(flg == 0)
    {
        c2.style.backgroundColor = "blue";
        flg = 1;
    }
    else if(flg == 1)
    {
        c2.style.backgroundColor = "yellow";
        c2.querySelector("h1").style.color = "red";
        flg = 2;
    }
    else
    {
        c2.style.backgroundColor = "red";
        c2.querySelector("h1").style.color = "";
        flg = 0;
    }
})

c2.addEventListener("mouseleave" , () => {
    c2.style.backgroundColor = "black";
    c2.querySelector("h1").style.color = "white";
    c2.innerHTML = "<h1>2</h1>";
})


// circle 3
c3.addEventListener("mouseenter" , () => {
    let rnd1 = Math.floor(Math.random()*256);
    let rnd2 = Math.floor(Math.random()*256);
    let rnd3 = Math.floor(Math.random()*256);
    c3.style.backgroundColor = `rgb(${rnd1} , ${rnd2} , ${rnd3})`;
})

c3.addEventListener("mouseleave" , () => {
    let rnd1 = Math.floor(Math.random()*256);
    let rnd2 = Math.floor(Math.random()*256);
    let rnd3 = Math.floor(Math.random()*256);
    c3.style.backgroundColor = `rgb(${rnd1} , ${rnd2} , ${rnd3})`;
})


// circle 4
c4.addEventListener("click" , () => {
    let rnd1 = Math.floor(Math.random()*256);
    let rnd2 = Math.floor(Math.random()*256);
    let rnd3 = Math.floor(Math.random()*256);
    c1.style.backgroundColor = `rgb(${rnd1} , ${rnd2} , ${rnd3})`;
    c2.style.backgroundColor = `rgb(${rnd2} , ${rnd3} , ${rnd1})`;
    c3.style.backgroundColor = `rgb(${rnd3} , ${rnd1} , ${rnd2})`;

})

let crsr = document.getElementById("cursor");
let body = document.getElementById("body");
body.addEventListener("mousemove" , (dets) => {
    // console.log(dets.x , dets.y);
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})



