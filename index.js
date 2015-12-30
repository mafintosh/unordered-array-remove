module.exports = remove

function remove (arr, i) {
  if (i >= arr.length) return
  var last = arr.pop()
  if (i < arr.length) arr[i] = last
  return last
}
