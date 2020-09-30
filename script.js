const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe id tempore consequatur delectus, laudantium minus dolores nobis error fugiat hic iure quas, accusamus veritatis, nam vero numquam enim! Reprehenderit!"

let index = 0

function writeText()  {
  document.body.innerHTML = text.slice(0, index)
  index++

  if(index > text.length) {
    index = 0
  }
}

setInterval(writeText, 100)