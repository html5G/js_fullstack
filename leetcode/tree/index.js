function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a4 = new TreeNode(15);
let a5 = new TreeNode(7);
a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

function levelOrderTravesal (root) {
    if (!root) return [];
    const items = [];
    const queue = [root,null]; // 队列，等待被了解情况的节点出队
    let levelNodes = []; //放置每一层节点
    // tree node left right
    while(queue.length > 0) {
        const t = queue.shift(); 
        if ( t ) {
            levelNodes.push(t.val);
            if ( t.left ) {
                queue.push(t.left);
            }
            if ( t.right ) {
                queue.push(t.right)
            }
        } else {
            // null 层次分隔符
            items.push(levelNodes);
            levelNodes = [];
            if (queue.length > 0) {
                queue.push(null);
            }
        }
    }
    return items;
}
console.log(levelOrderTravesal(a1));
// queue [root,null]
// levelNodes []
// items []

// 层序遍历
// 从根开始，一层一层来分层遍历， 7 结束，
// [[3],[9,20],[15,7]] 
//     3
//   9   20
//     15   7
// 按层 每个节点把子节点告诉算法就行了
// items[] 子节点也可能有子节点
// 队列 Queue
