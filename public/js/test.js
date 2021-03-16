//alert("Hello, World");

let Link = document.getElementsByTagName("a");

for (i = 0; i < Link.length; i++) {
    Link[i].className = "Link " + i;
}