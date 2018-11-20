function incomingOutputdata() {
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	let c = document.getElementById('c').value;
	let result = quadraticEquation(a, b, c);
	alert('Answer is' + result)
}

function quadraticEquation(a, b, c) {
	if (a == 0) return "Error, а=0 Invalid value!";
	let D = b * b - 4 * a * c; //discriminator
	let x1, x2;
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		return "coefficients: a="+a+", b="+b+", c="+c+"\nthe roots of the equation: X1=" + x1 + ", X2=" + x2 + "\ndiscriminator(D)=" + D;
	} else if (D == 0) {
		x1 = -b / (2 * a);
		return "coefficients: a="+a+", b="+b+", c="+c+"\nthe roots of the equation: X=" + x1 + "\ndiscriminator(D)=" + D;
	} else if (D < 0) return "coefficients: a="+a+", b="+b+", c="+c+"\nno root!\ndiscriminator(D)=" + D;
}