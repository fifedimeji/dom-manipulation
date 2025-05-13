let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

// SUBMIT EVENT
form.addEventListener('submit', addItem)
itemList.addEventListener('click', delItem)
filter.addEventListener('keyup', filterItems)

// addItem FUNCTION
function addItem(e){
    e.preventDefault()

    // GET ADDED ITEM VALUES
    let newItem = document.getElementById('item').value

    // CREATE NEW LIST ELEMENT
    let li = document.createElement('li')
    // ADD CLASS
    li.className = 'list-group-item'
    // ADD ITEM VALUE TO LIST ELEMENT
    li.appendChild(document.createTextNode(newItem))
    // ADD ITEM VALUE AS LIST ELEMENT TO LIST
    itemList.appendChild(li)

    // CREATE DEL BUTTON
    let delBtn = document.createElement('button')
    // ADD CLASSES TO DEL BUTTON
    delBtn.className = 'btn btn-danger btn-sm float-end delete'
    // ADD TEXT NODE FOR BUTTON SYMBOL
    delBtn.appendChild(document.createTextNode('-'))
    // ADD DEL BUTTON AS LIST ELEMEMT
    li.appendChild(delBtn)
}

// delItem FUNCTION 
function delItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

// fltrItem FUNCTION
function filterItems(e){
    // CONVERT TEXT INPUT TO LOWERCASE
    let text = e.target.value.toLowerCase()
    // GET LIST
    let items = itemList.getElementsByTagName('li')
    // CONVERT TO ARRAY
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
     })

     
}