var orderContainer = document.getElementById('todos-container');           
fetch('/data.json').then((request) => {  
    if(!request.ok) {
        console.log('Oops! Something went wrong.');
        return null;
    }
    
    return request.json();
}).then((data) => {
    data.forEach(item =>{
        if(item.completed === true){
            orderContainer.innerHTML +=`
            <input type="checkbox" id="${item.id}" checked="${item.completed}">
            <label for="${item.id}"> ${item.task} </label> <br>`;
            }
            else{
                orderContainer.innerHTML +=`
                <input type="checkbox" id="${item.id}" >
                <label for="${item.id}"> ${item.task} </label> <br>`;
            }
});
});


