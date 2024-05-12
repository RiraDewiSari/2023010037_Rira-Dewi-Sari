/* synchronus: eksekusi secara pararel
Asynchronous (menunggu):  kode yang berperilaku async tidak akan langsung dieksekusi,
               tetapi akan di-skip dan dieksekusi pada tahap berikutnya.
               kode async dengan cara callback atau promises.
Asynchronous: sebuah function yang berjalan secara pararel
            dalam peng-eksekusiannya dengan function" lainnya.
            jadi tetap jalan walaupun masih meng-eksekusi hal" lain.
*/

function satu() {
    console.log('satu')
}

//eksekusi secara synchronus
function dua() {
    console.log('function dua mau dieksekusi ')
    setTimeout(() => {
    console.log('dua')
    }, 3000)
}

function tiga() {
    console.log('tiga')
}

satu()
dua()
tiga()

console.log('============================')

const token = ~~(Math.random() * 1000000)
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username, callback) {
    console.log('proses token now...')
    setTimeout(() => {
    callback ({token, username})
    },200)
}

function getUser(token, callback) {
   console.log('proses password now...')
   if(token)  
    setTimeout(() => {
    callback ({password:'rira123'})
    }, 500)
}

function getPictures(password, callback) {
    console.log('proses pictures now...')
    if(password)
    setTimeout(() => {
    callback (pic = pictures)
    }, 1500)
}

//nested callback
login('rira dewi sari', function(response) {
const {token} = response
    getUser(token, function(response) {
    const {password} = response
        getPictures(password, function(response) {
        const {pic} = response
            console.log(pic)
        })
    })
})
 