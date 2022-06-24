const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event)
 {
  const backgroundColor = btn.style.backgroundColor;
  if (backgroundColor === 'salmon')
   {
    btn.style.backgroundColor = 'green';
      } 
      else
       {
    btn.style.backgroundColor = 'salmon';
     }
});