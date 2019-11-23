
var delay = 6000;
var inter_delay = 1000;
var count = 0;

function spawn() {
    if ( count > 1000) { return; }
    var x = Math.round( Math.random() * 90);
    var y = Math.round( Math.random() * 90);
    var image = document.createElement('img');
    image.src = 'seal.png';
    image.style.position = "absolute";
    image.style.left = x + "%";
    image.style.top = y + "%";
    image.style.width = '100px';
    image.style.height = '100px';
    image.onclick = function()  {
	    this.src = 'blood.png';
		if ( delay > 100) {
		   delay = delay * 0.9;
		   delay = inter_delay * 0.9;
		}
	    count--;
    }
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(image);
    window.setTimeout( "spawn()", delay)
    count++;
}

window.onload = function() {
    setTimeout( "spawn()", delay);
}

