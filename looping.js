/* PERULANGAN JAVASCRIPT
for, for of, for in, for each
( while & do while )
MAP
*/

for( i =0; i<=10; i++) {
    if(i%2 !==0) // mencari nilai ganjil
    console.log('data i ke - ' + i)
}

let x=1
while( x<=10 ) {
    if (x%2 !==0)
    console.log('data x ke - ' + x)
    x++
}

let y = 1
do {
    if (y%2 !==0) {
    console.log('data y ke - ' + y)
}
    y++
}   while (y<=10)

/* for
*/

//berbeda saat console
const namaSaya =['rira', 'dewi', 'sari']
for (let aku of namaSaya) {
    console.log(namaSaya)
}

const namaAku =['rira', 'dewi', 'sari']
for (let aku in namaAku) {
    console.log(namaAku)
}

namaSaya.forEach((value, index) => {
    console.log(value, index + 1)
})

namaSaya.map((value, index) => {
    console.log(value, index + 1)
})