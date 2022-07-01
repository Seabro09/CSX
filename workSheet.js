let size = 0;
let hash = "";
while (size < 8) {
 while (hash.length < 4) {
 hash += ("#", " ");
 }
 console.log(hash);
 hash = "";
size++;
}