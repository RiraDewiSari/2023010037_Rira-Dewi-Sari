console.log("Promise pada Asynchronous")

const token = ~~(Math.random() * 1000000)
const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log('proses token now...')
    return new Promise(success, error)
    setTimeout(() => {
        if(username != "rira dewi sari")
            error("sorry wrong data")
            success(token)
    },200)
}

function getUser(token) {
   console.log('proses password now...')
   if(token)  
    setTimeout(() => {
    return ({password:'rira123'})
    }, 500)
}

function getPictures(password) {
    console.log('proses pictures now...')
    if(password)
    setTimeout(() => {
   return (pic = pictures)
    }, 1500)
}

//pemanggilam promise
user.then(function() {
    console.log(response)
})
