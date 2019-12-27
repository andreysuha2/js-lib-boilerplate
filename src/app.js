import Counter from "./lib/Counter";

const itemsCount = new Counter();

for(let i = 0; i < 10; i++) {
    console.log(`counter value: ${itemsCount.count};`, `i value: ${i}`);
    itemsCount.add();
}

console.log("");
console.log(itemsCount.count);