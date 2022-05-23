function shiftToLeft(x, y) {
	let res = 2;
	for(i=1; i<y; i++)
		res *= 2;
	return x * res;
}

console.log(shiftToLeft(1, 8))
