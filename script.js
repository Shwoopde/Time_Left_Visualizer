const updateResults = function() {
    const birthday = new Date(document.querySelector('#birthday').value);
    const deathAge = parseInt(document.querySelector('#deathage').value);
    const deathDate = new Date(birthday.getFullYear() + deathAge, birthday.getMonth(), birthday.getDate());
    const currentDate = new Date();
    const timeLeft = deathDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    
    let yearsLeft = Math.floor(daysLeft / 365);
    let monthsLeft = Math.floor((daysLeft % 365) / 30);
    let remainingDays = daysLeft - (yearsLeft * 365) - (monthsLeft * 30);
  
    document.querySelector('#output').textContent = `You MAY have ${yearsLeft} years, ${monthsLeft} months, and ${remainingDays} days left. CHOOSE WISELY`;
    
    const timeLived = currentDate.getTime() - birthday.getTime();
    const daysLived = Math.floor(timeLived / (1000 * 60 * 60 * 24));
    
    let yearsLived = Math.floor(daysLived / 365);
    let monthsLived = Math.floor((daysLived % 365) / 30);
    let remainingDaysLived = daysLived - (yearsLived * 365) - (monthsLived * 30);
    
    document.querySelector('#output2').textContent = `CONGRATS! You have already lived ${yearsLived} years, ${monthsLived} months, and ${remainingDaysLived} days.`;
    
    document.querySelector('#output').style.visibility = 'visible';
    document.querySelector('#output2').style.visibility = 'visible';
    
    myChart.data.datasets[0].data[0] = daysLived;
    myChart.data.datasets[0].data[1] = daysLeft;
    myChart.update();
}

document.querySelector('#deathage').addEventListener('input', function(event) {
      updateResults();
});

const ctx= document.getElementById('myChart').getContext('2d');
const myChart= new Chart(ctx,{
   type:'pie',
   data:{
       labels:['Time Lived','Time Left'],
       datasets:[{
           data:[0,0],
           backgroundColor:[
               'rgb(77,74,74)',
               'rgb(91,197,240)'
           ],
           borderColor:[
               'white',
               'white'
           ],
           borderWidth:1
       }]
   },
   options:{
       plugins:{
           legend:{
               labels:{
                   font:{
                       family:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                       size:parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'))
                   }
               }
           }
       }
   }
});

document.querySelectorAll('.minimize-btn').forEach(minimizeButton => {
    minimizeButton.addEventListener('click', function(event) {
        const container= event.target.parentNode.parentNode.querySelector('.container');
        if(container.style.display ==='none'){
            container.style.display ='block';
            event.target.textContent='-';
        }else{
            container.style.display='none';
            event.target.textContent='+';
        }
    });
});

// New code for event_tracker_1

const updateEventTrackerResults= function(){
    const startDate= new Date(document.querySelector('#start_date').value);
    const endDate= new Date(document.querySelector('#end_date').value);
    const currentDate= new Date();
    const frequency= parseInt(document.querySelector('#frequency').value);
    const per= document.querySelector('#per').value;

   // Calculate number of weeks between start date and end date
   const weeksBetween= Math.ceil((endDate.getTime()-startDate.getTime())/(1000*60*60*24*7));

   // Calculate number of events between start date and end date
   let totalEvents;
   if(per === "Week"){
       totalEvents= frequency*weeksBetween;
   }else if(per === "Month"){
       totalEvents= frequency*(weeksBetween/4);
   }else{
       totalEvents= frequency*(weeksBetween/52);
   }

   // Calculate number of weeks between start date and current date
   const weeksPassed= Math.ceil((currentDate.getTime()-startDate.getTime())/(1000*60*60*24*7));

   // Calculate number of events between start date and current date
   let eventsPassed;
   if(per === "Week"){
       eventsPassed= frequency*weeksPassed;
   }else if(per === "Month"){
       eventsPassed= frequency*(weeksPassed/4);
   }else{
       eventsPassed= frequency*(weeksPassed/52);
   }

   // Calculate number of events left
   let eventsLeft= Math.ceil(totalEvents-eventsPassed);

   document.querySelector('#output3').textContent=`${eventsPassed} events have passed.`;
   document.querySelector('#output4').textContent=`${eventsLeft} events left.`;

   document.querySelector('#output3').style.visibility='visible';
   document.querySelector('#output4').style.visibility='visible';

   myChart2.data.datasets[0].data[0]= eventsPassed;
   myChart2.data.datasets[0].data[1]= eventsLeft;
   myChart2.update();

   // Set textContent of #title2 to value of event_title input field
   document.querySelectorAll('.bar-title')[1].textContent= document.querySelector('#event_title').value;
}

document.querySelector('#end_date').addEventListener('input',function(event){
    updateEventTrackerResults();
});

const ctx2= document.getElementById('myChart2').getContext('2d');
const myChart2= new Chart(ctx2,{
   type:'pie',
   data:{
       labels:['Events Passed','Events Left'],
       datasets:[{
           data:[0,0],
           backgroundColor:[
               'rgb(77,74,74)',
               'rgb(91,197,240)'
           ],
           borderColor:[
               'white',
               'white'
           ],
           borderWidth:1
       }]
   },
   options:{
       plugins:{
           legend:{
               labels:{
                   font:{
                       family:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                       size:parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'))
                   }
               }
           }
       },
   }
});
