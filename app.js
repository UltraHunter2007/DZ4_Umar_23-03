//DZ1
var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var tagCount = {}

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    if (tagCount[tag]) {
        tagCount[tag]++
    } else {
        tagCount[tag] = 1
    }
}

var sortedTags = []
for (var tagCountKey in tagCount) {
    sortedTags.push([tagCountKey, tagCount[tagCountKey]])
}

sortedTags.sort(function (a, b){
    return b[1] - a[1]
})

var sortedTagCount = {}
for (var i = 0; i < sortedTags.length; i++) {
    sortedTagCount[sortedTags[i][0]] = sortedTags[i][1]
}

console.log(sortedTagCount)

//DZ2
var keyValue = ['name', 'John', 'lastname', 'Black', 'age', '23']
var object = {}
for (var i = 0; i < keyValue.length; i += 2) {
    if (keyValue.length % 2 === 1){
        object[keyValue[keyValue.length - 1]] = null
    }
    object[keyValue[i]] = keyValue[i + 1]
}
console.log(object)