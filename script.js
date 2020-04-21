let date = new Date()

let currentDate = date.toLocaleDateString('pt-BR', {
   day: '2-digit',
   month: 'short',
   year: 'numeric'
})
let getDateId = document.getElementById('date')
getDateId.innerHTML = currentDate

document.addEventListener('play', function(e){
   var audios = document.getElementsByTagName('audio');
   for(var i = 0, len = audios.length; i < len;i++){
       if(audios[i] != e.target){
           audios[i].pause();
       }
   }
}, true);

