

const controller = new ScrollMagic.Controller();

const exploreScene = new ScrollMagic.Scene({
    triggerElement: '.hike-exp',
    triggerHook: 0.5
})
.addIndicators({colorStart: 'white', colorTrigger: 'white'})
.setClassToggle('.hike-exp', 'active')
.addTo(controller);