const text = "🖤I❤L🖤O🖤V🖤E🖤❤Y🖤O🖤U❤T🖤A🖤R🖤A🖤D🖤O🖤N🖤A🖤";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length - 1) {
        index = 0;
    }
}

setInterval(writeText, 300);