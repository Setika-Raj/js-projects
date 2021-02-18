
function countdown(){
  const currentDate=new Date();
  const newDate=new Date('1/1/2022');
  const time_diff=newDate.getTime()-currentDate.getTime();
  const days=(time_diff/(1000*60*60*24));
  const days_r=Math.floor(days);
  const hours=time_diff/(1000*60*60)-days_r*24;
  const hours_r=Math.floor(hours);
  const minutes=time_diff/(1000*60)-days_r*24*60-hours_r*60;
  const minutes_r=Math.floor(minutes);
  const seconds=time_diff/(1000)-(days_r*24*60*60)-(hours_r*60*60)-(minutes_r*60);
  const seconds_r=Math.floor(seconds);


  document.getElementById("days").innerHTML=(days_r);
  document.getElementById("hours").innerHTML=(hours_r);
  document.getElementById("minutes").innerHTML=(minutes_r);
  document.getElementById("seconds").innerHTML=(seconds_r);

}
countdown();
setInterval(countdown,1000);
