const header = document.querySelector("header");
const resize = () => {
	const {innerHeight} = window;
	const {offsetHeight} = header;
	const top = innerHeight - offsetHeight;
	header.style.position = "sticky";
	header.style.top = `${Math.min(top, 0)}px`;
};
resize();
window.addEventListener("resize", (event) => {
	resize();
});
