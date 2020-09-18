
1. 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
2. 从剩余未排序元素中继续寻找最小、最大元素，放到1⃣️排序序列的末尾

function selectionSort(arr) {
  let len = arr.length
  let minIndex, temp
  for ( let i = 0; i < len - 1; i ++) {
    minIndex = i
    for (let j = i + 1; j < len; j ++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}