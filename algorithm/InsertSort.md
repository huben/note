
1. 从第一个元素开始，该元素认为已经排序
2. 取下一个元素，在已经排序的序列中从后向前扫描
3. 该元素（已排序）大于新元素，将该元素移到下一位置
4. 重复3，直到小于，插入该位置

function insertSort(arr) {
  let len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i ++) {
    preIndex = i -1
    current = arr[i]
    while (preIndex >=0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex --
    }
    arr[preIndex + 1] = current
  }
  return arr
}