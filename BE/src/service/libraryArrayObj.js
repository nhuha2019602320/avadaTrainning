function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}

/**
 *
 * @param {*} field
 * @param {*} sort
 * @returns
 */
function sortArrayObject(field, sort) {
  return (a, b) => {
    if (sort === "desc") return a[field] - b[field];
    return b[field] - a[field];
  };
}

module.exports = {
  pick,
  sortArrayObject,
};
