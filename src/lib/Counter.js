/* Example Counter class */

class Counter {
    #count = 0;

    get count() {
        return this.#count;
    }

    add() {
        this.#count ++;
    }
}

export default Counter;