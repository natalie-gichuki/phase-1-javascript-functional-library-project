function myEach(collection, callback) {
    for (let key in collection) {
        callback(collection[key]);
    }
    return collection;
}

function myMap(collection, callback) {
    let results = [];
    for (let key in collection) {
        results.push(callback(collection[key]));
    }

    return results;
}

function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    let start = 0;
    if (acc === undefined) {
        acc = collection[keys[0]];
        start = 1;
    }
    for (let i = start; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) return collection[key];
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    for (let key in collection) {
        if (predicate(collection[key])) result.push(collection[key]);
    }
    return result;
}

function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
