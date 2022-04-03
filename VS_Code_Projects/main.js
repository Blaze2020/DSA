//Linked List-Traversal
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

const a=new Node('A');
const b=new Node('B');
const c=new Node('C');
const d=new Node('D');

a.next=b;
b.next=c;
c.next=d;




// A->B->C->D->NULL
//Iterative Search
function printListI(head){
    const arr=[];
    let current=head;
    while(current!==null)//current can also be used
    {
        // console.log(current.data);
        arr.push(current.data);
        current=current.next;
    }
    return arr;

}

console.log('Iterative Approach');
console.log(printListI(a));

// Recursive Search
const arr1=[];
function printListR(head){
    if(head===null) return arr1;
    // console.log(head.data);
    arr1.push(head.data);
    // console.log(arr1);
    printListR(head.next);
    
}



console.log('Recurssive Approach');
console.log(printListR(a));