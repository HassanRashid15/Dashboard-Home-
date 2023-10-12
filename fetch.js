fetch("test.json")
.then(response => response.json())
.then(data => showInfo(data))
function showInfo(data){
    console.form(data.Course_Detail);
}