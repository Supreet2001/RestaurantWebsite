let menu= document.querySelector("#menuBtn");
let mode=true;
menu.addEventListener('click',()=>{
    console.log("working");
    if(mode===true){
        document.querySelector('.menupanel').style.display='block';
        document.querySelector('#menuBtnText').innerText="HIDE MENU";
        mode=false;
    }
    else{
        document.querySelector('.menupanel').style.display='none';
        document.querySelector('#menuBtnText').innerText="VIEW OUR MENU";
        mode=true;
    }
})


