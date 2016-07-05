function getDependencies(tree, result) {
  var result = result || [];
  var deps = tree && tree.dependencies || {};

  Object.keys(deps).forEach(function(dep) {
    var subTree = deps[dep];
    var depStr = dep + '@' + subTree.version;

    if(result.indexOf(depStr) < 0) {
      result.push(depStr);
    }

    getDependencies(subTree, result);
  });

  return result.sort();
}

module.exports = getDependencies;
