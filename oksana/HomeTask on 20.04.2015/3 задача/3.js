var node = document.body;
var tagName = 'h1';

function byTagName(node, tagName) {
	var findNode = []; //создаем пустой массив для записи узлов

	tagName = tagName.toUpperCase(); // имя тега переводим в верхний регистр

	function findNodeByTag (node) { // создаем функцию для поиска 
		for (var i = 0; i < node.childNodes.length; i++) { // перебираем коллекцию
			var a = node.childNodes[i]; // запоминаем узел
			if (a.nodeType == document.ELEMENT_NODE) {
				if ( a.tagName === tagName) { // проверяем совпадает ли название узла с нашим поиском
					findNode.push(a); //добавляем узел в массив
				}
				findNodeByTag(a);// заходим в узел для поиска тега глубже
			}
		}
	}
	findNodeByTag(node);
	return findNode;
}


  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
