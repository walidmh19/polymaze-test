const logo = document.querySelector('img#animatedLogo')
const screenH = screen.height;
let animationInterval = screenH*3
addEventListener('scroll', () => {

   let Y = scrollY
   // console.log(Y);
   let frame = Math.round(100 * Y / animationInterval)
   // console.log(img);
   logo.src = `./logo animation/000${frame}.png`
})