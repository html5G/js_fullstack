function Grid(size) {
    //size 大小规格
    this.size = size;
    this.cells = this.empty();
}
Grid.prototype = {
    //empty返回一个空的矩阵（网格），二维数组
    empty:function() {
        let cells = [];
        for (let i = 0; i < this.size; i++) {
            cells[i] = [];
            for (let j = 0; j < this.size; j++) {
                cells[i].push(null);
            }
        }
        return cells;
    },
    //找出当前的空位置
    availableCells() {
        //空位置
        var cells = [];
        for ( let i = 0; i < this.size; i++) {
            for( let j = 0; j < this.size; j++) {
                if (!this.cells[i][j]) {
                    cells.push({
                        x: i,
                        y: j
                    })
                }
            }
        }
        return cells;
    },
    cellAvailable() {
        //0 || > 0 
        //强制转换为true或者false
    return !!this.availableCells().length;
   },
   //从一堆空位置随机挑一个
   randomAvailableCell() {
       const cells = this.availableCells();
       return cells[Math.floor(Math.random() * cells.length)]
   },
   insertTile(tile) {
       this.cells[tile.x][tile.y] = tile;
   }
}

module.exports = Grid;

