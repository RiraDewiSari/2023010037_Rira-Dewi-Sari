/* array copy 
studi kasus: merubah array tambah mempengaruhi array originalnya

const arraySaya =['🍊','🥑', '🍒','🍌','🍓']  //original
const newArraySaya = arraySaya (baca selowcopy & dipcopy pada javascript)

/* gunakan salah satu cara dari dibawah ini:
const newArraySaya = [...arraySaya.arraySaya]
const newArraySaya = arraySaya.slice()
const newArraySaya = Array.from(arraySaya)
const newArraySaya = JSON.parse(JSON.stringify(arraySaya))

newArraySaya[0] = '😎'

console.log(arraySaya)
console.log(newArraySaya)
*/

/* Campuran string dan int
const arrayKamu = [
    '🍊',
    10 ,
    {tomato: true},
    {cery: function() {console.log('ini cery')}},
    '🍌',
    ['eat', 'food']
]

console.log(arrayKamu[5][0])
console.log(arrayKamu[2])
arrayKamu[3].cery()
*/

/* Peggabungan array
const arraySaya = ['🍊','🥑', '🍒']
const arrayKamu = ['😊', '😂', '😒']

const mergeArray = arraySaya.concat(arrayKamu) // concat

//kalau ingin muncul indexnya (in)
for (list in mergeArray) console.log(list) 

//kalau ingin muncul keduanya (map)
mergeArray.map((value, index) => console.log(index,value))
for (list of mergeArray)
    console.log(list)
*/

// studi kasusnya: munculkan bagian nama saja

const data = [
{   nama: 'rira',
    sebagai: 'ketua',
    umur : '20'
},
{
    nama: 'dewi',
    sebagai: 'wakil',
    umur : '19'
},
{
    nama: 'sari',
    sebagai: 'bendahara',
    umur : '21'
},
{
    nama: 'mawar',
    sebagai: 'sekretaris',
    umur : '18'
},
{
    nama: 'melati',
    sebagai: 'bendahara',
    umur : '23'
}
]
data.map((value, index) =>
    console.log(value.nama , value.sebagai))

//menampilkan sesuai urutan umur
data.sort((a,b) => a.umur - b.umur).map((value) => console.log(value))

//salah satu tidak ditampilkan 
data.filter((x) => x.umur < 20).map((value) => console.log(value))

data
.sort((a,b) => a.umur - b.umur)
.filter((x) => x.umur < 20)
.map((value) => console.log(value))
