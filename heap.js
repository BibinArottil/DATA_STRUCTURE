class Heap{
    constructor() {
        this.heap = []
    }

    minHeap(array) {
        this.buildHeap(array)
    }

    buildHeap(array) {
        this.heap = array
        for(let i = this.parent(this.heap.length - 1); i>=0;i--) {
            this.shiftDown(i)
        }
    }

    shiftDown(current) {
        let endIndex = this.heap.length - 1
        let leftIndex = this.leftChild(current)
        while(leftIndex <= endIndex) {
            let rightIndex = this.rightChild(current)
            let shiftToBe
            if(rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]) {
                shiftToBe = rightIndex
            } else {
                shiftToBe = leftIndex
            }
            if(this.heap[current] > this.heap[shiftToBe]) {
                [this.heap[current],this.heap[shiftToBe]] = [this.heap[shiftToBe], this.heap[current]]
                current = shiftToBe
                leftIndex = this.leftChild(current)
            } else {
                return
            }
        }
    }

    shiftUp(current) {
        let parent = this.parent(current)
        while(this.heap[current] < this.heap[parent] && current > 0) {
            [this.heap[parent],this.heap[current]] = [this.heap[current],this.heap[parent]]
            current = parent
            parent = this.parent(current)
        }
    }

    peek() {
        return this.heap[0]
    }

    parent(i) {
        return Math.floor((i-1)/2)
    }

    leftChild(i) {
        return i * 2 + 1
    }

    rightChild(i) {
        return i * 2 + 2
    }

    remove() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1],this.heap[0]]
        let number = this.heap.pop()
        this.shiftDown(0)
        return number
    }

    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }

    display() {
        for(let i = 0; i<this.heap.length;i++){
            console.log(this.heap[i])
        }
    }

    heapSort(array){
        this.buildHeap(array)
        let array2 = []
        let length = array.length
        for(let i =0; i <length;i++){
            array2.push(this.remove())
        }
        console.log(array2)
    }
}

const heap = new Heap()

let array = [10, 5, 15, 3, 8]
heap.buildHeap(array)
heap.insert(1)
heap.remove()
heap.display()
heap.heapSort(array)