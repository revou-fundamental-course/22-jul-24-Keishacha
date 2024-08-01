function formValidation() {
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
  
    // Validasi jika keduanya kosong
    if (name === "" && email === "") {
      alert("Semua inputan harus diisi");
    } else {
      // Validasi email 
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;
      if (!emailRegex.test(email)) {
        alert("Format email tidak valid, \nPastikan email lengkap dengan domain (contoh: keisha@gmail.com)");
      } else {
        alert("Sukses menginput");
        //Kosongkan inputan setelah Alert
        document.getElementById('input-name').value = '';
        document.getElementById('input-email').value = '';
      }
    }
  }
  

let indexSlide = 1
showSlide()

function nextSlide(n){
    showSlide(indexSlide += n)
}

function showSlide(n){
    let listImage = document.getElementsByClassName("main-banner")
    console.log(listImage);

    //Algoritma untuk mereset index dari slide nya 
    if (n > listImage.length) indexSlide = 1

    //Algoritma untuk menghilangkan gambar
    let index = 0
    while(index < listImage.length){
        listImage[index].style.display = 'none'
        index++
    }

    //Algoritma untuk memunculkan 1 gambar saja
    listImage[indexSlide - 1].style.display = 'block'
}

setInterval(() => nextSlide(1), 3000)
