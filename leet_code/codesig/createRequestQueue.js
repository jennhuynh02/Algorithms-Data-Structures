const request = () => {
  const queue = [];
  const cancellable = new Set();
  return {
    enqueue: async function(id, request) {
      let promise = new Promise((resolve, reject) => {
        if (cancellable[id]) {
          reject();
          cancellable.delete(id);
        } else {
          request().then(a => resolve(a)).catch(b => reject(b));
        }
      })
      queue.push(promise);
      return promise;
    },
    cancel: function(id) {
      cancellable.add(id);
    },
    processNext: function() {
      let current = queue.shift();
      return new Promise((resolve, reject) => {
        current.then(a => resolve(a));
      })
    },
    size: function() {
      return queue.length;
    }
  }
};

var requestQueue = request()
console.log(requestQueue.enqueue(1, () => parseInt("1")));
console.log(requestQueue.size())
console.log(requestQueue.cancel(1))
// console.log(requestQueue.processNext())
console.log(requestQueue.size())