import "./index.css"

export default class Toast
{
	static ERROR='error'

	static toast(text,type){
		var toast = document.createElement("div");
		toast.setAttribute("role", "toast");
		toast.innerHTML = text;

		document.querySelector("body").appendChild(toast);
		toast.className = `${type} toast fade `;
		
		//IE9+
		toast.style.left = 'calc((100% - ' + toast.clientWidth + 'px)/2)';

		setTimeout(function() {
			toast.className = `${type} toast`;
		}, 0);

		setTimeout(function() {
			toast.className = `${type} toast fade`;
			setTimeout(function() {
				document.querySelector("body").removeChild(toast);
			}, 500);
		}, 2000);



	}



}