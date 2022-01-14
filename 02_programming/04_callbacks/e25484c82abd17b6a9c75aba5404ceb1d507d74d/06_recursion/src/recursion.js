const findPosition = (array, string, integer) => {

  if ((Array.isArray(array)) && (typeof array[0] === "string") && (typeof string === "string") && (Number.isInteger(integer))) {
    if (array.includes(string)){
      return `${string} is at position #${array.indexOf(string)+1} in this array.`;
    } else {
      return `${string} is not present in this array.`;
    };
  } else {
    throw new Error ("Invalid parameters");
  };
};


// Leave line below for tests to work properly
module.exports = findPosition;
