/* DOM (World Wide Web)
Element Manipulation, Data Selector, JS Styling, Event
 */

document.title = 'Rira Test'

//pemanggilan body
const body = document.body

//.append untuk mengisi body
const h1 = document.createElement('h1') //<h1></h1>
h1.textContent = '<marquee>Isi H1 nih</marquee>' //<h1>isi h1</h1>

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee>RIRA DEWI SARI</marquee>'

const namaBuah = document.createElement('b')
namaBuah.innerText = '<marquee>Apel</marquee>'

body.append(h1)
body.append(namaSaya)
body.append(namaBuah)

// DATA SELECTOR & JA STYLIG
//pemanggikan by id
const btn1 = document.getElementById('btn1')
//pemanggilan universal
const btn2 = document.querySelector('.btn2')

const defaultText = 'Klik pertama'
btn1.textContent = defaultText

btn1.style.border = '1px bold'
btn1.style.background = 'pink'
btn1.style.padding = '10px'
btn1.style.fontSize = '24px'

//EVENT
function gantiWarna() {
    btn1.style.background = 'aqua'
    const newText = console.log('aman')
}

function ubahText() {
  btn1.textContent = 'hello'
}

function oriText() {
    btn1.textContent = 'Klik pertama'
}


const defaultText2 = 'Klik kedua'
btn2.textContent = defaultText2 

btn2.style.backgroundColor = 'green'
btn2.style.border = '1px bold'
btn2.style.padding = '10px'
btn2.style.fontSize = '24px'

function kataMasuk() {
    btn2.textContent = 'Rira Dewi Sari'
    btn2.style.background = 'white'
}

function kataKeluar() {
    btn2.textContent = '2023010037'
    btn2.style.background = 'pink'
}