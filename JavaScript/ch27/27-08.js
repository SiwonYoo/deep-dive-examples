/* 27.8 배열 메서드 */

/* 27-55 */
(() => {
  const Queue = (function () {
    function Queue(array = []) {
      if (!Array.isArray(array)) throw new TypeError(`${array} is not an array`);
      this.array = array;
    }
    Queue.prototype = {
      constructor: Queue,
      enqueue(value) {
        return this.array.push(value);
      },
      dequeue() {
        return this.array.shift();
      },
      entries() {
        return [...this.array];
      },
    };
    return Queue;
  })();

  const queue = new Queue([1, 2]);
  console.log(queue.entries());

  queue.enqueue(3);
  console.log(queue.entries());
  console.log(queue.array);

  queue.dequeue();
  console.log(queue.entries());
  console.log(queue.array);
})();

/* 27-56 */
(() => {
  class Queue {
    #array;

    constructor(array = []) {
      if (!Array.isArray(array)) throw new TypeError(`${array} is not an array`);
      this.#array = array;
    }

    enqueue(value) {
      return this.#array.push(value);
    }
    dequeue() {
      return this.#array.shift();
    }
    entries() {
      return [...this.#array];
    }
  }

  const queue = new Queue([1, 2]);
  console.log(queue.entries()); // [ 1, 2 ]

  queue.enqueue(3);
  console.log(queue.entries()); // [ 1, 2, 3 ]
  console.log(queue.array); // undefined

  queue.dequeue();
  console.log(queue.entries()); // [ 2, 3 ]
  console.log(queue.array); // undefined
})();

/* 27-86 */
(() => {
  const arr = [1, [2, [3, 4]]];
  const flatArr = arr.flat(2);

  // 원본 배열은 수정되지 않는다.
  console.log("arr:", arr, "flatArr:", flatArr); // arr: [ 1, [ 2, [ 3, 4 ] ] ] flatArr: [ 1, 2, 3, 4 ]
})();
