const header = document.querySelector('header.showOnMobile')

const animContainer = document.querySelector('.navToggleWrapper')
// let svgContainer = document.querySelector('.bodymovinanim');

let animDirection = 1

let animItem = lottie.loadAnimation({
   container: animContainer,
   renderer: 'svg',
   loop: false,
   // setDirection: 1,
   autoplay: false,

   path: "../assets/Menu V2/menuV2.json"
});

function navToggle() {
   navToggleAnim(animDirection)
   animDirection = -1 * animDirection
   header.classList.toggle('active')
}

function navToggleAnim(dir) {
   animItem.setDirection(dir)
   animItem.play()
}

// navToggleAnim(1)