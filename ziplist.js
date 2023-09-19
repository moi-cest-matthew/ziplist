//Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly taking elements.
// For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3].
// zipList should not use Underscore. Now write a function called zipListTheSimpleWay that does the same thing using Underscore

function zipList(list1, list2)
{
  let zipped = []
  let i = 0

  while(i < list1.length)
  {
    zipped.push(list1[i])
    zipped.push(list2[i])
  }

  return zipped
}

console.log(zipList([1, 3, 7], ["Honolulu", "San Marcos", "Seattle"]))


