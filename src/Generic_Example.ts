interface Items<T> {
    list :T[];
}

const items: Items<string> = {
    list:['a','b','c']
}

class Queue<T> {
    // 선입선출
    list : T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();