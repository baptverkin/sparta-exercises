function theEFilter(sentences) {
  return sentences.filter(sentences => sentences.match("e") || sentences.match("E"));
}

//const newArray = sentencesToBeTested.filter(theEFilter);
//console.log(newArray);

// Do not remove the following line, it is for tests
module.exports = theEFilter;
