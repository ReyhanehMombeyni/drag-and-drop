const drag= (e) => {
    e.dataTransfer.setData("text", e.target.id);
}

const drop= (e) => {
    e.preventDefault();
    let data= e.dataTransfer.getData("text");
    
    const parentItem= e.target;
    parentItem.append(document.getElementById(data))
}

const allowDrop= (e) => {
    e.preventDefault();
}
