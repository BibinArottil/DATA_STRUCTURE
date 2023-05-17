class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class LinkedList {
    constructor(){
      this.head = null
      this.size = 0
    }
    
  isEmpty() {
    return this.size === 0
  }
  
  getSize() {
    return this.size
  }
    prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }else{
        node.next=this.head
        this.head = node
      }
      this.size++
    }
  
    insert(value,index){
      if(index < 0 || index > this.size){
        return
      }
      if(index === 0){
        this.prepend(value)
      }else{
        const node = new Node(value)
        let prev = this.head
        for(let i = 0; i<index-1;i++){
          prev=prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
      }
    }
  
    reverse(){
      let prev = null
      let curr = this.head
      while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
      }
      this.head = prev
    }
    
    print(){
      if(this.isEmpty()){
        console.log("List is empty")
      }else{
        let curr =this.head
        let listValues = ''
        while(curr){
          listValues += `${curr.value} `
          curr = curr.next
        }
        console.log(listValues)
      }
    }
  }
  
  const list = new LinkedList()
  console.log('List is empty',list.isEmpty())
  console.log('List size',list.getSize())
  list.print()
  
  list.insert(10, 0)
  
  list.insert(20, 0)
  
  list.insert(30, 1)
  
  list.insert(40, 2)
  list.print() // 20 30 40 10
  
  list.reverse()
  list.print() // 10 40 30 20