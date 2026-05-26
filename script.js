const wallpapers =
document.getElementById("wallpapers");

const search =
document.getElementById("search");

let data = [];

async function loadImages(){

const res = await fetch(
"https://api.waifu.im/search"
);

const json = await res.json();

data = json.images;

showImages(data);

}

function showImages(images){

wallpapers.innerHTML = "";

images.forEach(img => {

wallpapers.innerHTML += `
<div class="card">

<img src="${img.url}">

<div class="info">

<h3>
${img.source || "Anime"}
</h3>

<button onclick="
downloadImage('${img.url}')
">
Download
</button>

</div>
</div>
`;

});

}

function downloadImage(url){

const a =
document.createElement("a");

a.href = url;

a.download = "anime.jpg";

a.click();

}

search.addEventListener(
"input",
() => {

const value =
search.value.toLowerCase();

const filtered =
data.filter(img =>

(img.source || "")
.toLowerCase()
.includes(value)

);

showImages(filtered);

});

loadImages();