通过增量 gap, 将整个序列分成若干组
从后往前进行组内成员的比较交换
逐步缩小增量至1

function shellSort(arr) {
  let len = arr.length
  let gap = parseInt(len / 2)
  while(gap) {
    for (let i = gap; i < len; i ++) {
      for (let j = i - gap; j > 0; j -= gap) {
        if (arr[j] > arr[j + gap]) {
          [arr[j], arr[j + gap]] = [arr[j + gap], arr[j]]
        } else {
          break
        }
      }
    }
    gap = parseInt(gap / 2)
  }
}