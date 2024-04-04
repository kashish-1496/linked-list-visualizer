let head = null;

function Node(data) {
    this.data = data;
    this.next = null;
}

function insertBegin() {
    const dataInput = document.getElementById("dataInput");
    const data = dataInput.value.trim();
    if (data !== "") {
        const newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        displayList();
        dataInput.value = "";
    }
}

function insertEnd() {
    const dataInput = document.getElementById("dataInput");
    const data = dataInput.value.trim();
    if (data !== "") {
        const newNode = new Node(data);
        if (head === null) {
            head = newNode;
        } 
        else {
            let temp = head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode; 
        }
        displayList();
    }
    dataInput.value = "";
}
function insertPos(){
    const dataInput = document.getElementById("dataInput");
    const data= dataInput.value.trim();
    if(data!==""){
        const newNode = new Node(data);
        const pos=prompt("Enter position: ");
        let temp=head;
        if(head===null){
            head=newNode;
            newNode.next = temp;
        }
        else if(pos==0 && head!==null){
            head=newNode;
            newNode.next = temp;
        }
        else{
            let count=0;
            while(count !== pos-1){
                temp=temp.next;
                count++;
            }
            let nextadd=temp.next;
            temp.next=newNode;
            newNode.next=nextadd;
        }
        displayList();
    }
    dataInput.value="";
}

function deleteBegin() {
    if(head===null){
        alert("List is already empty!");
    }
    else if(head.next===null){
        head=null;
        // display krana h that list is now empty! how??
        displayList();
    }
    else {
        head = head.next;
        displayList();
    }
}

function deleteEnd(){
    if(head===null){
        alert("List is already empty!");
    }
    else if(head.next===null){
        head=null;
        // print krana h that list is now empty! how??
        displayList();
    }
    else{
        let temp = head;
        while(temp.next.next!==null){
            temp=temp.next;
        }
        temp.next=null;
        displayList();
    }
}
function deletePos(){
    let pos=prompt("Enter the Position: ");
    if(head===null){
        alert("List is already Empty!!");
    }
    else if(head.next===null){
        head=null;
        linkedList.innerHTML += "<br>LinkedList is now empty !<br>";
    }
    else if(pos==0 && head!==null){
        head=head.next;
    }
    else{
        let temp=head;
        let count=0;
        while(count!=pos-1){
            temp=temp.next;
            count++;
        }
        let nextadd = temp.next.next;
        temp.next=nextadd;
    }
    displayList();
    dataInput.value="";

}
function displayList() {
    const linkedList = document.getElementById("linked-list");
    linkedList.innerHTML += "<br>";
    if(head === null) {
        linkedList.innerHTML += "<br>LinkedList is now empty !<br>";

    }
    let temp = head;
    while (temp !== null) {
        const nodeDiv = document.createElement("div");
        nodeDiv.classList.add("node");
        nodeDiv.textContent = temp.data;
        linkedList.appendChild(nodeDiv);
        if (temp.next !== null) {
            const arrow = document.createElement("div");
            arrow.classList.add("arrow");
            arrow.textContent = "→";
            linkedList.appendChild(arrow);
        }
        temp = temp.next;
    }  
    linkedList.scrollTo(0, linkedList.scrollHeight);
}
