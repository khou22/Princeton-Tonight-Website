let small = document.querySelector('.small');
let smallheader = document.querySelector('.smallheader');

small.addEventListener('click', toggle);

function toggle() {
	smallheader.classList.toggle('hidden');
};