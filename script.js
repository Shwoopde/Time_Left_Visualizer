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
  
//   document.querySelector('form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   updateResults();
//   });
  
  document.querySelector('#deathage').addEventListener('input', function(event) {
  updateResults();
  });
  
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
  labels: ['Time Lived', 'Time Left'],
  datasets: [{
  data: [0,0],
  backgroundColor: [
  'rgb(77, 74, 74)',
  'rgb(91, 197, 240)'
  ],
  borderColor: [
  'white',
  'white'
  ],
  borderWidth:1
  }]
  },
  options: {
      plugins: {
          legend: {
              labels: {
                  font: {
                      family: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                      size: parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'))
                  }
              }
          }
      }
  }
  });
  