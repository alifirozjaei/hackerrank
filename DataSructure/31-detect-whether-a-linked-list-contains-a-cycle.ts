// solution => hasCycle function in line 98

// function hasCycle(head:SinglyLinkedListNode):0|1{
//     while(head != null){
//         if(head.visited) {
//             return 1; 
//         }
//         head.visited = true; 
//         head = head.next; 
//     }
//     return 0;
// }

'use strict';

interface ProcessEnv {
    [key: string]: string | undefined
}


process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

const fs = require('fs');


class SinglyLinkedListNode{
    data: number;
    next: SinglyLinkedListNode | null;
    visited?: boolean;
    constructor(nodeData:number) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    head: SinglyLinkedListNode | null;
    tail: SinglyLinkedListNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData:number) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node:SinglyLinkedListNode, sep:string, ws:WritableStreamDefaultWriter) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
});

function hasCycle(head:SinglyLinkedListNode):0|1{
    while(head != null){
        if(head.visited) {
            return 1; 
        }
        head.visited = true; 
        head = head.next; 
    }
    return 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const index = parseInt(readLine(), 10);

        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }
      
        let extra = new SinglyLinkedListNode(-1);
        let temp = llist.head;

        for (let i = 0; i < llistCount; i++) {
              if (i == index) {
                extra = temp;
              }

              if (i != llistCount-1) {
                temp = temp.next;
              }
        }

        temp.next = extra;

        let result = hasCycle(llist.head);

        ws.write((result ? 1 : 0) + "\n");
    }

    ws.end();
}
