module.exports = remove

function remove (arr, i) {
  if (i >= arr.length) return
  var last = arr.pop()
  if (i < arr.length) {
    var tmp = arr[i]
    arr[i] = last
    return tmp
  }
  return last
}
