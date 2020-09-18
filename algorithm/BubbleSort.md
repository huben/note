1. 比较相邻的两个元素，如果前一个比后一个大，则交换位置
2. 第一轮后最后一个元素是最大的
3. 重复步骤一
```
fucntion bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i --) {
    for (let j = 0; j < arr.length - i - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = swap
      }
    }
  }
}
```
