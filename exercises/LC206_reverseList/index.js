const reverseList = head => {
	// undefined -> a -> b -> c -> d
	// undefined <- a <- b <- c <- d
	
	let previous = null;
	let current = head;

	while (current) {
		let next = current.next; // save next;
		current.next = previous; // current next pointer directed to previous;
		previous = current; // prevoius move to current;
		current = next; // current move to next which save before
	}

	return previous;
};

module.exports = reverseList;
