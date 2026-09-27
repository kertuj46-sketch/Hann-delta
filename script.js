function updateTime(){
  const now=new Date();

  document.getElementById("clock").textContent=
    "🟢 "+now.toLocaleString("id-ID");
}

updateTime();
setInterval(updateTime,1000);
