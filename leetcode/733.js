/**
 * 深度优先
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    const m = image.length;
    const n = image[0].length;
    const oldColor = image[sr][sc];
    if (oldColor == newColor) return image;

    const fill = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] != oldColor) {
          return;
        }
        image[i][j] = newColor; 
        fill(i - 1, j);
        fill(i + 1, j);
        fill(i, j - 1);
        fill(i, j + 1);
      };
    
      fill(sr, sc);
      return image;

};

// [1,1,1]
// [1,1,0]
// [1,0,1]

floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);

var floodFill = function(image, sr, sc, newColor) {
    const row = image.length, col = image[0].length
    const oldColor = image[sr][sc]
    //如果新老颜色相同则无需填充更改
    if (oldColor == newColor) return image
    //创建bfs的队列
    const bfs = [[sr, sc]]
    //当bfs栈全部弹出时染色结束
    while (bfs.length) {
        //弹出现在所在的点，并将其染色
        const [i, j] = bfs.shift()
        image[i][j] = newColor
        //向现有点的四个方向分别判断颜色是否相同，相同则将同色点加入bfs栈，在下一轮进行bfs操作
        if (i - 1 >= 0 && image[i - 1][j] == oldColor) bfs.push([i - 1, j])
        if (i + 1 < row && image[i + 1][j] == oldColor) bfs.push([i + 1, j])
        if (j - 1 >= 0 && image[i][j - 1] == oldColor) bfs.push([i, j - 1])
        if (j + 1 < col && image[i][j + 1] == oldColor) bfs.push([i, j + 1])
    }
    /*
    换一个写法
    while (bfs.length) {
        const [i, j] = bfs.shift()
        if(i < 0 || i >= row || j < 0 || j >= col || image[i][j] != oldColor) continue
        image[i][j] = newColor
        bfs.push([i - 1, j]) 
        bfs.push([i + 1, j]) 
        bfs.push([i, j - 1]) 
        bfs.push([i, j + 1]) 
    }
    */
    return image;
};