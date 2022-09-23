var conteudo = "google.com";
var GoogleCharts = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=';
var imagemQRCode = GoogleCharts + conteudo;
let img = document.getElementById('qrcode')
img.src = imagemQRCode
console.log(imagemQRCode)

