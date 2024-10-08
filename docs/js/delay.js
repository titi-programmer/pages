const pageable = new Pageable("main", {
	animation: 2,
	delay: 500,
	onBeforeStart: function() {
		this.pages.forEach((page, i) => {
			page.classList.remove("pg-active");
		});	
	},
    infinite: true,
});

// function setVh() {
// 	let vh = window.innerHeight * 0.01;
// 	console.log(vh);
// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
// }
  
// window.addEventListener('resize', setVh);
// window.addEventListener('orientationchange', setVh);
// setVh();



function setVH() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setVH();

window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVh);