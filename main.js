//alert('Hey you')

// var usia = 30
// const saudara = 2 //nilainya tidak bisa berubah
// let y = 2 
// console.log('Hey you usia mu adalah ' + usia +' dengan saudara ' + saudara)
// alert('usia mu adalah ' + usia)
// let usia = prompt('berapa usia mu?')
// prompt('usia ku adalah ' + usia)

let nama = 'Rira Dewi Sari'
let usia = 20
let beratBadan
let status = 4

// pengkondisian if else
if (status == null) {
    status = 'pelajar'
}   else {
    status = 'mahasiswa'
}

//pengkondisian switch case
// switch(status) {
//     case 1:
//         status = 'pelajar'
//     break
//     case 2:
//         status = 'mahasiswa'
//     break
//     default:
//         status = 'tidak keduanya'
// }

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang


//output
alert('nama saya ' + nama + ' usia saya ' + usia +
 ' status saya ' + status)

alert('saldo awal saya sebesar ' + saldoAwal 
    + ' dan saldo tambahan saya sebesar ' + saldoTambahan
    + ' jadi total saldo yang saya miliki sebesar ' + saldoAkhir
)