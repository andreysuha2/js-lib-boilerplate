/* Example Counter class */
// @flow
class Counter {
    constructor(init: number = 0) {
        console.log(init);
        this.#count = init;
    }
    #count = 0;

    get count() {
        return this.#count;
    }

    add() {
        this.#count ++;
    }
}

export default Counter;