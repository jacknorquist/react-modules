

/**
 * choice: Takes array and returns random element in the array
 */
function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}


/**
 * remove: Takes array of items and an item. Removes the item from the
 * array and returns the item.
 */
function remove(items, item) {
    if (items.indexOf(item)) {
        items.splice(items.indexOf(item), 1);
        return item;
    }
}

export { choice, remove };