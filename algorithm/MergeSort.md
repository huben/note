
1. 把长度为 n 的数组分成两个长度为 n/2 的子数组
2. 对这两个子数组分别采用归并排序
3. 将两个排列好的子数组合并成一个最终的数组

```
function mergeSort(arr) {
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())

  return result
}
```