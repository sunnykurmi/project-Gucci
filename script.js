 window.addEventListener('resize', function (){ 
 'use strict';
 window.location.reload(); 
})
function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()

gsap.to("#box1",{
    left:"60%",
    delay:1,
    duration:2,
    ease: "power1.inOut", 
    
},"hello")
gsap.to("#box1 img",{
    delay:1,
    duration:2,
    transform: "translateX(-500px)",
    ease: "power1.inOut", 

},"hello")
gsap.to("#box2",{
    delay:1,
    duration:2,
    bottom:"85%",
    ease: "power2.inOut", 
},"hello")
gsap.to("#box2aa",{
    delay:1,
    duration:2,
    transform: "translate(0,-360px)",
    ease: "power2.inOut", 
},"hello")
gsap.to("#bar",{
    delay:1,
    width:"100%",
    duration:2,
    ease: "power2.inOut", 
},"hello")
gsap.to("#loader",{
    delay:3,
    duration:1,
    y:"-100%",
    ease: "power4.inOut", 
})

const a = new SplitType("#page1");

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        start:"top top",
        end:"+="+(window.innerHeight * 5),
        scrub:2,
        pin:true,
        // markers:true,
        scroller:"#main"
    }
})
tl.fromTo("#page1 h1 .char:nth-child(1)",{
    x:"-180%",
    scale:8
},{
    x:"0%",
    scale:1
},"tl")
tl.fromTo("#page1 h1 .char:nth-child(2)",{
    y:"-475%",
    opacity:.6,
    scale:8
},{
    y:"0%",
    delay:.2,
    opacity:1,
    scale:1
},"tl")
tl.fromTo("#page1 h1 .char:nth-child(3)",{
    y:"320%",
    opacity:.6,
    scale:8
},{
    y:"0%",
    delay:.4,
    opacity:1,
    scale:1
},"tl")
tl.fromTo("#page1 h1 .char:nth-child(4)",{
    y:"-475%",
    opacity:.6,
    scale:8
},{
    opacity:1,
    delay:.6,

    y:"0%",
    scale:1
},"tl")
tl.fromTo("#page1 h1 .char:nth-child(5)",{
    y:"425%",
    opacity:.6,
    scale:8
},{
    opacity:1,
    delay:.8,

    y:"0%",
    scale:1
},"tl")
tl.fromTo("#page1 h3",{
    y:20,
    opacity:0
},{
    y:0,
    opacity:1
})

var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        start:"top top",
        end:"+="+(window.innerHeight*5),
        pin:true,
        scrub:2,
        // markers:true,
        scroller:"#main"
    }
})
tl2.to("#page2one h1",{
    onStart:function(){
        $("#page2one h1").textillate({
            in:{
                effect:"fadeIn",
                shuffle: true,
            }
        })
    },
    opacity:1
})
tl2.to("#page2one",{
    transform:" perspective(1000px) rotatey(-90deg)"
},"hello")
tl2.to("#page2two",{
    transform: "perspective(1000px) rotatey(0deg)",
},"hello")
tl2.to("#page2box",{
    x:-550
},"hello")
tl2.to("#page2two h1",{
    onStart:function(){
        $("#page2two h1").textillate({
            in:{
                effect:"fadeOut",
                shuffle: true,
            }
        })
    },
    opacity:.5
},'hello1')

var tl3= gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        start:"top top",
        end:"+="+(window.innerHeight*20),
        pin:true,
        scrub:2,
        // markers:true,
        scroller:"#main"
    }
})
tl3.to("#page4",{
    width:"100%"
})
tl3.fromTo("#page4a h1",{
    opacity:0,
    y:50
},{
    opacity:1,
    y:0
})
tl3.to("#page4aimg1",{
    top:"100%",
},"hello")
tl3.to("#page4aimg2",{
    top:"-50%",
},"hello")
tl3.to("#page4aimg3",{
    top:"-50%",
},"hello")
tl3.to("#page4bimg2",{
    top:"-80%",
},"hello")
tl3.to("#page4bimg3",{
    top:"-80%",
},"hello")
tl3.to("#page4b",{
    top:"0%",
},"hello")
tl3.fromTo("#page4bimg1",{
    y:-1400
},{
    y:750
},"hello")
tl3.fromTo("#page4b h1",{
    y:-760
},{
    y:0
},"hello")

tl3.to("#page4bimg4",{
    top:"100%",
},"hello1")
tl3.to("#page4bimg5",{
    top:"-50%",
},"hello1")
tl3.to("#page4bimg6",{
    top:"-50%",
},"hello1")
tl3.to("#page4c",{
    top:"0%",
},"hello1")
tl3.to("#page4cimg2",{
    top:"-80%",
},"hello1")
tl3.to("#page4cimg3",{
    top:"-80%",
},"hello1")
tl3.fromTo("#page4cimg1",{
    y:-1400
},{
    y:750
},"hello1")
tl3.fromTo("#page4c h1",{
    y:-760
},{
    y:0
},"hello1")

tl3.to("#page4cimg4",{
    top:"100%",
},"hello2")
tl3.to("#page4cimg5",{
    top:"-50%",
},"hello2")
tl3.to("#page4cimg6",{
    top:"-50%",
},"hello2")
tl3.to("#page4d",{
    top:"0%",
},"hello2")
tl3.to("#page4dimg2",{
    top:"-80%",
},"hello2")
tl3.to("#page4dimg3",{
    top:"-80%",
},"hello2")
tl3.fromTo("#page4dimg1",{
    y:-1400
},{
    y:750
},"hello2")
tl3.fromTo("#page4d h1",{
    y:-760
},{
    y:0
},"hello2")
tl3.fromTo("#page4d h1",{
    scale:1,
    opacity:1
},{
    scale:10,
    x:-80,
    opacity:.5
},"hello3")
tl3.to("#page4span",{
    color:"#81A48E"
},"hello3")
tl3.to("#page4dimg4",{
    left:"50%",
},"hello3")
tl3.to("#page4dimg4",{
    zIndex:"9",
    width:"100%"
})
