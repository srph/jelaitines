module.exports = function(node, className) {
  node.style.opacity = '1.0';
  node.setAttribute('class', className + ' animated');
}