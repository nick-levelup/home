var node = document.querySelector('ul');

function isTextExists (node, text) {// true/false
	if (node.nodeType === 1) {
		for (var i = 0; i < node.children.length; i++) {
			if (node.children[i].innerHTML.indexOf(text) !== -1) {
				return true;
			}
		}
	}
	return false;
}

function getTextNode (node, text) { // node object
	if (node.nodeType === 1) {
		for (var i = 0; i < node.children.length; i++) {
			if (node.children[i].innerHTML.indexOf(text) !== -1) {
				return node.children[i];
			}
		}
	}
}




