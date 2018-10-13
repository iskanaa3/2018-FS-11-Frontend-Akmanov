
const say = function (name) {
    let div = document.createElement('div');
	div.setAttribute('style','background-color:black; color:white;');
	div.innerHTML = `<p>Hello ${name}</p>`;
	document.body.appendChild(div);
};

export default say;
