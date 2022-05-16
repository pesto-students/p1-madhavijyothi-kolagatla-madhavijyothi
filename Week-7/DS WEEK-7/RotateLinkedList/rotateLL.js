var head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
function rotate(k) {
    if (k == 0)
        return;
    var current = head;
    var count = 1;
    while (count < k && current != null) {
        current = current.next;
        count++;
    }
    if (current == null)
        return;
    var knode = current;
    while (current.next != null) 
        current = current.next;
        current.next = head;
        head = knode.next;
        knode.next = null;
    
}
function push(new_data) {
    var new_data = new Node(new_data);
    new_data.next = head;
    head = new_data;
}
function printList() {
    var temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
}

    for (i = 60; i >= 10; i -= 10) {
    push(i);
    console.log("given list");
    console.log(printList());
    rotate(4);
    console.log("Rotated linked list")
    console.log(printList());
     }