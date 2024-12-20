let stories = document.querySelector('.stories')

let arr = [
  {
    dp:'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D',
    profile:'https://images.unsplash.com/photo-1559308612-432395d6b70f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YiUyNnclMjBjYXJ8ZW58MHx8MHx8fDA%3D'
  },
  {
    dp:'https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVufGVufDB8fDB8fHww',
    profile:'https://images.unsplash.com/photo-1559308612-432395d6b70f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YiUyNnclMjBjYXJ8ZW58MHx8MHx8fDA%3D'
  },
  {
    dp:'https://media.istockphoto.com/id/1768341863/photo/happy-young-indian-woman-preparing-diwali-flower-rangoli-on-floor-for-pooja-or-ritual-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dac4QDWFlWYBL1m-YC7aYslHXcM7_0MeNwDVwS8-qxA=',
    profile:'https://images.unsplash.com/photo-1559308612-432395d6b70f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YiUyNnclMjBjYXJ8ZW58MHx8MHx8fDA%3D'
  },
  {
    dp:'https://plus.unsplash.com/premium_photo-1661768742069-4de270a8d9fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    profile:'https://images.unsplash.com/photo-1559308612-432395d6b70f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YiUyNnclMjBjYXJ8ZW58MHx8MHx8fDA%3D'
  },
  {
    dp:'https://plus.unsplash.com/premium_photo-1668896123837-b627615ad211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    profile:'https://images.unsplash.com/photo-1559308612-432395d6b70f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YiUyNnclMjBjYXJ8ZW58MHx8MHx8fDA%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    profile:'https://images.unsplash.com/photo-1559308612-432395d6b70f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YiUyNnclMjBjYXJ8ZW58MHx8MHx8fDA%3D'
  },
]

let stry = ` `
arr.forEach(function(elem){
  stry = stry + ` <div class="story">
                    <img src=${elem.dp}  alt="">
                  </div>`
})
stories.innerHTML = stry




 















