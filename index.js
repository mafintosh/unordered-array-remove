/**
  * it took me a while to understand the logic behind this. I'd like to 
  * suggest this be like this. hope you like my suggestion and contribution.
  *
  * (BTW I do prefer being a bit more expressive with my coding);
  *
  * cheers!
  **/

module.exports = (array, index) => {
  if (!Array.isArray(array)) {
    throw new Error(": requires first argument 'array' to be of type javascript array");
  }
  else if (Number.isNaN(index) || typeof index !== "number") {
    throw new Error(": requires second argument 'index' to be of number type");
  }
  else {
    if (index < 0 || index >= array.length) {
      return;
    }

    if (array.length - 1 === index) {
      return array.pop();
    }
    else {
      /* make the switch */
      let lastElement = array.pop();
      let temp = array[index];
      array[index] = lastElement;

      /* return to caller */
      return temp;
    }
  }
};
