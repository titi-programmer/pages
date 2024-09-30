const pageable = new Pageable("main", {
	animation: 2,
	delay: 800,
	onBeforeStart: function() {
		this.pages.forEach((page, i) => {
			page.classList.remove("pg-active");
		});	
	},
	onFinish: function(data) {
		// orientate horizontally when index is odd number
		this.orientate(data.index % 2 == 0 ? "vertical" : "horizontal");
	},
});

function setVh() {
	let vh = window.innerHeight * 0.01;
	console.log(vh);
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
  
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);
setVh();

// let typed = new Typed(".typing", {
// 	strings: ["te amo pq... cuida bem de mim"],
// 	typeSpeed: 100,
// 	backSpeed: 6,
// 	loop: false
//   });