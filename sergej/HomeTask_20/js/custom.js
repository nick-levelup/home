'use strict';

/* ---------------------------------------------- /*
 * Nodes. Text search
/* ---------------------------------------------- */

var para;
para = document.querySelector('p');

function getTextNodes(node, text) {
    node = node || document.body;
    text = text || 'Lorem';

    if ((node.nodeType === 3) && (node.nodeValue.indexOf(text) !== -1)) {
        console.log(node);
    } else if (node.nodeType === 1) {
        for (var i = 0; i < node.childNodes.length; i++) {
            getTextNodes(node.childNodes[i], text);
        }
    }
}

function isTextExists(node, text) {
    node = node || document.body;
    text = text || 'Lorem';

    if (node.nodeType === 3) {
        return node.nodeValue.indexOf(text) !== -1;
    } else if (node.nodeType === 1) {
        for (var i = 0; i < node.childNodes.length; i++) {
            if (isTextExists(node.childNodes[i], text)) {
                return true;
            }
        }
    }
    return false;
}

console.log(getTextNodes(document.body, 'Alias'));
console.log(isTextExists(document.body, 'Incidunt'));

/* ---------------------------------------------- /*
 * Attributes
/* ---------------------------------------------- */

function addDataAttribute(newAttribute, newAttributeValue) {
    var elements;
    elements = document.getElementsByTagName('p');

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute('data-classified') === 'secret') {
            elements[i].setAttribute(newAttribute, newAttributeValue);
        }
    }
}

addDataAttribute('data-code', '0101');

/* ---------------------------------------------- /*
 * Nodes. Tags search
/* ---------------------------------------------- */

function byTagName(node, tagName) {
    node = node || document.body;
    tagName = tagName || 'h1';

    var array = [];

    function findChildNodes(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes[i].nodeType === 1) {
                if (node.childNodes[i].tagName === tagName.toUpperCase()) {
                    array.push(node.childNodes[i].tagName);
                }
                findChildNodes(node.childNodes[i]);
            }
        }
    }

    findChildNodes(node);
    return array;
}

console.log(byTagName(document.body, 'h1').length); // → 1
console.log(byTagName(document.body, 'span').length); // → 3
console.log(byTagName(para, 'span').length); // → 2