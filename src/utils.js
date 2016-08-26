export function push(array, value, unique = true) {
  if (!unique || (unique && array.indexOf(value) === -1)) {
    array.push(value);
  }
  return this;
}

export function pull(array, value, all = true) {
  while (all && array.indexOf(value) !== -1) {
    array.splice(array.indexOf(value), 1);
  }
  array.splice(array.indexOf(value), 1);
  return this;
}

export function forOwn(cb, obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      cb(obj[prop], prop, obj);
    }
  }
}

export function mergeObjects() {
  return Array.prototype.reduce.call(arguments, (acc, cur) => {
    if (acc === cur || cur === null) {
      return acc;
    }
    for (let prop in cur) {
      if (cur.hasOwnProperty(prop)) {
        switch (cur[prop].constructor.name) {
          case 'Array':
            acc[prop] = (acc[prop] || []).concat(cur[prop]);
            break;
          case 'Object':
            acc[prop] = mergeObjects(acc[prop], cur[prop]);
            break;
          default:
            acc[prop] = cur[prop];
        }
      }
    }
    return acc;
  }, {});
}

export function roll(sides, times = 1) {
  if (typeof sides === 'string') {
    [times, sides] = sides.split('d').map(val => parseInt(val));
  }
  let results = [];
  while (times--) {
    results.push(Math.ceil(Math.random() * sides));
  }
  return {results, sum: results.reduce((acc, cur) => acc + cur)};
}
