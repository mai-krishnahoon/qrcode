let imgBox = document.querySelector(".qr-box")
let qrImage = document.querySelector(".qr-box img")
let qrText = document.querySelector("#qr-input")
let btn = document.querySelector(".box button")




function generateQr (){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + 
    qrText.value;
    imgBox.style.display = "block"
}
function errorBlock() {
    imgBox.style.display = "none";
    qrText.classList.add("shake");
    setTimeout(() => {
        qrText.classList.remove("shake"); 
    }, 1000);
}
btn.addEventListener("click", function(){
    if (qrText.value.trim() != "") {
        generateQr()
    }
    else{
        errorBlock()
    }
})

qrText.addEventListener("keydown", function (params) {
    if (params.key === "Enter" || params.keyCode === 13 ) {
        if (qrText.value.trim() != "") {
            generateQr()
        } else {
            errorBlock()  
        }
    }    
})



