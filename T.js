function loadJson(file,callback) {
  var xhr=new XMLHttpRequest();//obj creation for http request....memoriay dynamically created
  xhr.overrideMimeType("application/json");//what type of file it is
xhr.open('GET',file,true);//opening the request
//get information from the file and true is asynchornous approach(call)
xhr.onreadystatechange=function(){
  if (xhr.readyState===4 && xhr.status=="200") {
//ready state for communicating with server 4 indicates ready to response , 1series information errors
//2 series errors
//3series navigatinal
//4 series page not found client side errors
//server side errors 5series
    callback(xhr.responseText);

  }
};
xhr.send();
}
loadJson("data.json",function(text){
  var data=JSON.parse(text);//to overcome hosting let is used ,we can even use var
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var childTwo=document.querySelector(".child2");
function career(careerInfo){
  var heading=document.createElement("h2");
  heading.style.fontWeight="550";
  heading.textContent="Career objective";
  childTwo.appendChild(heading);
  var hr=document.createElement("hr");

  heading.appendChild(hr);


var careerP=document.createElement("p");
  careerP.textContent= careerInfo.info;
  childTwo.appendChild(careerP);
}



function education(edu){
  var heading=document.createElement("h2");
  heading.style.fontWeight="550";
  heading.textContent="Educational qualifications";
  childTwo.appendChild(heading);
  var hr=document.createElement("hr");

  heading.appendChild(hr);
  var table=document.createElement("table");
  childTwo.appendChild(table);
  table.border="1";
  var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";

  var tr2="";
for (var i = 0; i < edu.length; i++)
{
 tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institution+"</td><td>"+edu[i].data+"</td></tr>";
}
  table.innerHTML=tr1+tr2;//to append html tags to js file we use innerhtml
}

function skills(skil){
  var heading=document.createElement("h2");
  heading.style.fontWeight="550";
  heading.textContent="Tecnical Skills";
  childTwo.appendChild(heading);
  var hr=document.createElement("hr");

  heading.appendChild(hr);
  for (var i = 0; i < skil.length; i++) {
  var titleH=document.createElement("h3");
  titleH.textContent=skil[i].title;
  childTwo.appendChild(titleH);
  var ul=document.createElement("ul");
  childTwo.appendChild(ul);

  for (var j = 0;j< skil[i].info.length; j++) {
    var li=document.createElement("li");
    li.textContent=skil[i].info[j];
//    skil[i].title=
ul.appendChild(li);
  }
}
}