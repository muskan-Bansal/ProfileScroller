// array of obj to be passed as an argument to iterator function
const data=[
  {
    name:'Jancy',
    age:'25',
    gender:'female',
    location:'Bangalore',
    image:'https://xsgames.co/randomusers/assets/avatars/female/28.jpg'
  },
  {
    name:'James',
    age:'28',
    gender:'male',
    location:'pensyllvanaia',
    image:'https://xsgames.co/randomusers/assets/avatars/male/48.jpg'
  },
  {
    name:'Bruce',
    age:'35',
    gender:'male',
    location:'Boston',
    image:'https://xsgames.co/randomusers/assets/avatars/male/29.jpg'
  }
];
    // iterator call
const profiles=profileIterator(data);

document.querySelector('#next').addEventListener('click',nextProfile);
nextProfile();

function nextProfile(){  
  let currentProfile=profiles.next().value;

        if(currentProfile!=undefined)
        {
          document.querySelector('#profileDisplay').innerHTML=
          '<ul class="list-group"><li class="list-group-item"> Name:  '+currentProfile.name+'</li>   <li class="list-group-item"> Age:  '+currentProfile.age+'</li>     <li class="list-group-item"> Gender:  '+currentProfile.gender+'</li>                 <li class="list-group-item"> Location:  '+currentProfile.location+'</li>         '
 
        document.querySelector('#imageDisplay').innerHTML=
        ' <img src=" '+ currentProfile.image +' " >'
       }else{
                window.location.reload();
                // nextProfile(); 

       }
}

// Iterator
function profileIterator(profiles){
   let nextIndex=0;
   return{
    next: function(){
      return nextIndex<profiles.length? 
      { value: profiles[nextIndex++] ,done: false}:
      {  done:true}
    }
  }
}