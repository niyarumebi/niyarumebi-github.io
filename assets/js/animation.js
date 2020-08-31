// $(function () {
//  uiAnimation.init();
//
// });
//
// var uiAnimation = {
//     init: function () {
//         uiAnimation.currentSection();
//     },
//
//     //
//     currentSection: function () {
//         var controller = new ScrollMagic.Controller();
//
//         $('section').each(function(){
//             var self = $(this);
//
//             var tween = TweenMax.staggerFrom(self.find('.item'), 0.6, {y:30, opacity:0}, 0.2);
//
//             var scene  = new ScrollMagic.Scene({
//                 triggerElement: this,
//                 triggerHook : 0.7,
//                 // duration : '100%'
//             });
//
//             scene
//                 .setTween(tween)
//                 .addIndicators()
//                 .addTo(controller)
//         })
//
//
//
//     }
// };