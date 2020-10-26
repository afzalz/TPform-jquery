constoReq = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos/1';
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
oReq.onload = function(e) {
 const responseRequest = JSON.parse(this.responseText);
 body.innerHTML =  responseRequest.userId
}
oReq.send();