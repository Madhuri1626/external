let udat 
function fun(){
    udat = document.getElementById('mad').value;
    if (udat != " "){
        fetchdata(udat)
    }
}
function fetchdata(udat){
        fetch('https://jsonplaceholder.typicode.com/users/'+udat)
        .then(response => response.json())
        .then(data => handledata(data))
}
function handledata(data){
    let tdat = document.getElementById('tdata');
    let row = `<tr>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.username}</td>
    <td>${data.email}</td>
</tr>`
 tdat.innerHTML += row;
}