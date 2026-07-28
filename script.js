const tombol = document.getElementById("mode");
const loading = document.getElementById("loading-text");
const bar = document.getElementById("bar");
const target = document.getElementById("typing");

tombol.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    tombol.textContent =
        document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";

});

const teks = "...Loading...";
let loadingIndex = 0;

const loadingAnim = setInterval(() => {

    loading.textContent = teks.slice(0, loadingIndex);

    loadingIndex++;

    if (loadingIndex > teks.length) {
        loadingIndex = 0;
    }

    bar.style.width = (loadingIndex / teks.length) * 100 + "%";

}, 150);

window.onload = function(){

    setTimeout(() => {

        clearInterval(loadingAnim);

        document.getElementById("loader").style.display = "none";

        document.getElementById("content").classList.add("show");

        ketik(); // cuma SATU KALI di sini

    },2070);

}
const tulisan = "Hello, Im Nizam!!";

let index = 0;
let hapus = false;

function ketik(){

    if(!hapus){

        target.textContent = tulisan.substring(0,index);

        index++;

        if(index > tulisan.length){

            hapus = true;

            setTimeout(ketik,1500);

            return;

        }

    }else{

        target.textContent = tulisan.substring(0,index);

        index--;

        if(index < 0){

            hapus = false;

            index = 0;

        }

    }

    setTimeout(ketik,100);

}