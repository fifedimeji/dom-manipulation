// EXAMININE THE DOCUMENT OBJECT //

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title = 123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.querySelectorAll("*"))
// console.log(document.querySelectorAll("*")[10])
// // document.all[10].textContent = 'Hello'
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)


// GETELEMENTBYID //

// console.log(document.getElementById("header-title"))
// var headerTitle = document.getElementById("header-title")
// var header = document.getElementById("main-header")
// // headerTitle.textContent = "Hello"
// headerTitle.innerText = "Goodbye"
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerText)
// headerTitle.innerHTML = "<h3>Hello</h3>"
// header.style.borderBottom = "solid 3px #000"


// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName("list-group-item")
// console.log(items)
// console.log(items[1])
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'aquamarine'

// items.style.backgroundColor = 'f4f4f4' // won't work

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// GETELEMENTSBYTAGNAME // 

// var li = document.getElementsByTagName("li")
// console.log(li)
// console.log(li[1])
// li[1].textContent = "Hello 2"
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'aquamarine'

// li.style.backgroundColor = 'f4f4f4' // won't work

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4'
// }


// QUERYSELECTOR //

// let header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px aquamarine'

// let input = document.querySelector('input')
// input.value = "Hello World!"

// let submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"

// let item = document.querySelector('.list-group-item')
// item.style.color = "coral"

// let lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = "coral"

// let secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = "coral"

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.color = "coral"

// QUERYSELECTORALL //

// let titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent = "Hello"

// let odd = document.querySelectorAll('li:nth-child(odd)')
// let even = document.querySelectorAll('li:nth-child(even)')
// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }


// TRAVERSING THE DOM //

// let itemList = document.querySelector('#items')
// parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes) // NOT RECOMMMENDED

// children
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].textContent = 'Hello' 
// itemList.children[2].style.backgroundColor = 'Coral'

// firstChild
// console.log(itemList.firstChild) // NOT RECOMMMENDED

// firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'

// lastChild
// console.log(itemList.lastChild) // NOT RECOMMMENDED

// lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4'

// nextSibling
// console.log(itemList.nextSibling) // NOT RECOMMMENDED

// nextElementSibling
// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling) // NOT RECOMMMENDED

// previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green'

// createElement
// CREATING A DIV
// let newDiv = document.createElement('div')

// // ADD CLASS
// newDiv.className = 'hello'

// // ADD ID
// newDiv.id = 'hello1'

// // ADD ATTRIBUTE
// newDiv.setAttribute('title', 'Hello Div')

// // CREATE TEXT NODE
// let newDivText = document.createTextNode('Hello World!')

// // ADD TEXT TO DIV
// newDiv.appendChild(newDivText)

// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')

// console.log(newDiv)

// newDiv.style.fontSize = '30px'

// container.insertBefore(newDiv, h1)

// EVENTS  //
// let button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e){
//     console.log('Button clicked.')
//     document.getElementById('header-title').style.color = 'black'
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4'
//     console.log(e)

//     console.log(e.target)
//     console.log(e.target.id)
//     console.log(e.target.className)
//     console.log(e.target.classList)

//     let output = document.getElementById('output')
//     output.innerHTML = '<h3>' + e.target.id + '</h3>'
// }



//     // console.log(e.type)

//     // console.log(e.clientX)
//     // console.log(e.clientY)

//     // console.log(e.offsetX)
//     // console.log(e.offsetY)

//     // console.log(e.altKey)
//     // console.log(e.ctrlKey)
//     // console.log(e.shiftKey)

// }
 

// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent) // won't work over inner elements

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent) // also works for inner elements

// box.addEventListener('mousemove', runEvent)

let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')
let select = document.querySelector('select ')

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

// itemInput.addEventListener('input', runEvent)

// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent)

function runEvent(e){
    e.preventDefault()
    console.log('EVENT TYPE: ' + e.type)

    // console.log(e.target.value) 
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

    // output.innerHTML = '<h3>MOUSE X: ' +e.offsetX+ '</h3><h3>MOUSE Y: ' +e.offsetY+ '</h3'
    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
}