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

// updates2.o
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
if(window.innerWidth>481){
$('#navOffers').click(function(){ 
    $('html, body').animate({ 
         scrollTop: $("#offerSection").offset().top 
    }, 2000); 
});
$('#navMenu').click(function(){ 
    $('html, body').animate({ 
         scrollTop: $("#menuSection").offset().top 
    }, 2000); 
}); 
$('#navTestimonials').click(function(){ 
    $('html, body').animate({ 
         scrollTop: $("#testimonialSection").offset().top 
    }, 2500); 
}); 
$('#navAbout').click(function(){ 
    $('html, body').animate({ 
         scrollTop: $("#aboutSection").offset().top 
    }, 2700); 
}); 
$('#navAddress').click(function(){ 
    $('html, body').animate({ 
         scrollTop: $("#addressSection").offset().top 
    }, 3000); 
}); 
}
