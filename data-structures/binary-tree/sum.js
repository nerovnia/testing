const binaryTree = {
  value: 6,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
      },
    },
    right: {
      value: 7,
    },
  },
  right: {
    value: 10,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
};

const treeSum = (tree) => {
  let sum = 0;
  if (tree.hasOwnProperty("right")) {
    sum += treeSum(tree.right);
  }
  if (tree.hasOwnProperty("left")) {
    sum += treeSum(tree.left);
  }
  return (sum += tree.value);
};

console.log(treeSum(binaryTree, 0));
