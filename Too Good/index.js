const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let videoconanimation = ()=>{
    var videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");
videocon.addEventListener("mouseenter",()=>{
    gsap.to(playbtn,{
        scale : 1,
        opacity:0.6
    })
})
videocon.addEventListener("mouseleave", ()=>{
    gsap.to(playbtn,{
        scal:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove", (dets)=>{
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-50
    })
})
}
videoconanimation();
let loadinganimation = ()=>{
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.2,
        duration:0.5,
        stagger:0.2
    })
    gsap.from("#page1 #video-container",{
        opacity:0,
        delay:0.5,
        duration:0.5,
    })
}
loadinganimation();
document.addEventListener("mousemove",(dets)=>{
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y,
    })
})
let elem = document.querySelectorAll(".child");
elem.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(1)`
        })
    })
    elem.addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(0)`,
            duration:1
        })
    })
    
    
})