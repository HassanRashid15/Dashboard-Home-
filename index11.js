function myFunction(x) {
   x.classList.toggle("change");
}


async function callApi() {
   let result = await fetch('./test.json')
   result = await result.json();
   console.warn(result);
   document.getElementById("form1").value = result.Course_Detail.map((value) => value.TodaysClasses)
   document.getElementById("form2").value = result.Course_Detail.map((value) => value.Time1)
   document.getElementById("form3").value = result.Course_Detail.map((value) => value.ClassRoom)
}
callApi()