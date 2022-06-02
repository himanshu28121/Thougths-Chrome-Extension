fetch("https://type.fit/api/quotes")
  .then(data => data.json())
  .then(thought =>{
      let thoughtdata=getRandomItem(thought);
      const thoughttext=thoughtdata.text;
      const thoughtauthor=thoughtdata.author;
      const thoughtelement=document.getElementById('thoughtelement');

      thoughtelement.innerHTML=thoughttext+"<br><br>"+"<i>Author-</i>"+thoughtauthor;
  });


  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
