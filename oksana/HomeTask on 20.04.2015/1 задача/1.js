var node = document.querySelector('ul');

function isTextExists (node, text) {// true/false
	if (node.nodeType === 1) {
		for (var i = 0; i < node.children.length; i++) {
			var child = node.children[i];
			if (node.children[i].innerHTML.indexOf(text) !== -1) {
				return true;
			}
			isTextExists (child, text)
		}
	}
	return false;
}

function getTextNode (node, text) { // node object
	var nodeObj = [];

	function getText (node) {
		if (node.nodeType === 1) {

			for (var i = 0; i < node.children.length; i++) {

				var child = node.children[i];

				if (node.children[i].innerHTML.indexOf(text) !== -1) {

					nodeObj.push(node.children[i]); 
				}
				getText(child);
			}
		}
	}
	getText(node);	
	return nodeObj;
}