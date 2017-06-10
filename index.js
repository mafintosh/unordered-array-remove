module.exports = remove

function remove (arr, i) {
  if (i >= arr.length || i < 0) return
  var last = arr.pop()
  if (i < arr.length && arr[i] !== last) {
    var tmp = arr[i]
    arr[i] = last
    return tmp
  }
  return last
}
