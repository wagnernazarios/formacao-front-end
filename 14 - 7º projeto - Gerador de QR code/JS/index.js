const container = document.querySelector('.container')
const btn = document.querySelector('.qr-form button')
const input = document.querySelector('.qr-form input')
const qrCodeImg = document.querySelector('.qr-code img')
const qrCode = document.querySelector('.qr-code')

function generatorQrCode() {
    const inputValue = input.value;

    if (!inputValue) return;

    btn.innerText = 'Gerando QR Code...'

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`

    container.classList.add('active')

    qrCodeImg.addEventListener('load', () => {
        qrCode.classList.add('active')

        btn.innerText = 'QR Code criado!'

    })

}

btn.addEventListener('click', () => {
    generatorQrCode()
})

input.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        generatorQrCode()
    }
})

input.addEventListener('keyup', () => {
    if (!input.value) {
        container.classList.remove('active')
        qrCode.classList.remove('active')
        btn.innerText = 'Gerar QR Code'
    }
})