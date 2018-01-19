var popup = document.getElementById('modal')
var closebtn = document.getElementById('closebutton')


setTimeout(display, 3000)

function display(){
	popup.style.display='block';
}

closebutton.addEventListener('click',exit)

function exit(){
	popup.style.display='none';
}