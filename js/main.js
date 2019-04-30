window.addEventListener("load", ()=>{

    let $keyboard = document.querySelectorAll(".key");
    $input = document.querySelector("input");
    $keyboard.forEach((e, key)=>{
        let i = 0;
        let conc = [];
        e.addEventListener("click", ()=>{
           res = conc[i].concat(e.value);
                console.log(res);
           i++;
        })
    });
});