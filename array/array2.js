/* membuat array */

const arraySaya = ['😊', '😂', '😒', '😎', '👌'] //0,1,2,3,4,5 (panjang data 5)
/* console.log(arraySaya)  

const arrayKamu = new Array()
arrayKamu[0]='a'
arrayKamu[3]='c'
arrayKamu[1]='b'
console.log(arrayKamu[1]) 

const ketawa = arraySaya.includes('😂') //apakah arraySaya mengandung ketawa
const posisiKetawa = arraySaya.indexOf('😂') //ya (untuk mengtahui jika memang ketawa ada pada deret arraySaya)

/*if(ketawa) {
    const posisiKetawa = arraySaya.indexOf('😂')
    const indexBefore = posisiKetawa - 1 //posisi sebelum ketawa
    const indexAfter = posisiKetawa + 1 //posisi setelah ketawa

    //untuk mengeluarkan isi
    const before = arraySaya[indexBefore] 
    const after = arraySaya[indexAfter]

    console.log('sebelum ketawa adalah ' + before + ' dan setelah ketawa adalah ' + after)
    console.log('posisi ketawa itu ada dan dia berada pada index ke ' + posisiKetawa) //true
}   else {
    console.log('saya tidak mengetahui posisi ketawa') //false
}
*/

/*mengetahui posisi pertama itu apa?
if(ketawa) {
    const posisiKetawa = arraySaya.indexOf('😂')
    const indexBefore = posisiKetawa - 1 
    const indexAfter = posisiKetawa + 1 

    //untuk mengeluarkan isi
    const before = arraySaya[indexBefore] 
    const after = arraySaya[indexAfter]
    console.log('sebelum ketawa adalah ' + before + ' dan setelah ketawa adalah ' + after)
    console.log('posisi ketawa itu ada dan dia berada pada index ke ' + posisiKetawa) 

    const awal = arraySaya[0] //arraySaya.shift()
    const akhir = arraySaya[arraySaya.length - 1] //arraySaya.pop()
    console.log('yang pertama adalah ' + awal)
    console.log('yang terakhir adalah ' + akhir)
}   else {
    console.log('saya tidak mengetahui posisi ketawa') //false
}
*/

const arrayKita = []
arrayKita['alpukat'] = '🥑'
arrayKita['jeruk'] = '🍊'

console.log(arrayKita['jeruk']) //tidak bisa console.log(0)