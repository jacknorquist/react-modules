import fruits from './foods';
import { choice, remove } from './helpers';

/**
 * fruitPicker: Picks a random fruit from an array of fruits.
 * Logs messages.
 * Removes the fruit from array of fruits.
 * Logs message
 */
function fruitPicker() {
    const fruit = choice(fruits);

    console.log(`I'd like one ${fruit}, please.`);
    console.log(`Here you go: ${fruit}.`);
    console.log(`Delicious! May I have another?`);

    remove(fruits, fruit);
    console.log(`I’m sorry, we’re all out. We have ${fruits.length} left`);
}

fruitPicker();