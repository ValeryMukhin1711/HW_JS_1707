
const animals = [
    {
        alt: "lion",
      src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
    },
    {
        alt: "elephant",
      src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
    },
    {
        alt: "dog",
      src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
    },
    {
        alt: "squirrel",
      src: "https://get.pxhere.com/photo/animal-cute-wildlife-fur-mammal-squirrel-croissant-rodent-fauna-whiskers-rodents-tail-furry-vertebrate-chipmunk-creature-nager-animal-world-fox-squirrel-926829.jpg"
    },
    {
        alt: "leopard",
      src: "https://www.1zoom.ru/big2/879/277488-Sepik.jpg"
    },
    ]

const styleSheet = document.styleSheets[0];
console.log('styleSheet',styleSheet)

styleSheet.insertRule(`.dynamic-class { width: 100px; color: red; background-color: yellow;}`, styleSheet.cssRules.length);

styleSheet.insertRule(`.bottom-class { width: 400px; color: red;}`, styleSheet.cssRules.length);

const body = document.querySelector('body');
for (let element in animals) {
    let img = document.createElement("img")
    body.append(img)
    img.setAttribute('alt', animals[element].alt)
    img.setAttribute('src', animals[element].src)
    img.className = 'dynamic-class';
    img.onclick = () => {
        
        insImage(animals[element].src)
       

    }
}




    

function insImage(my_src) {
const div = document.createElement('div');
body.append(div);

let img_1 = document.createElement("img");
img_1.className = 'bottom-class';
body.append(img_1);
img_1.setAttribute('src', my_src);



img_1.onclick = () => {
    // console.log('Clicked' + animals[element]);
    img_1.remove();

}
}

