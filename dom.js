const container =document.querySelector('#container');

const content= document.createElement('div');
content.classList.add('content');
content.textContent=  'This is the glorious text-content!';

 container.appendChild(content);



 //new div
 const newContainer= document.createElement('div');
 newContainer.classList.add('new-container');

 newContainer.setAttribute('style','widht: 400px; height:400px; background: gray;');
 document.body.appendChild(newContainer);
 //red

 const redParagraph= document.createElement('p');
 redParagraph.classList.add('paragraph-red');
 redParagraph.textContent="Hey I'm red";
 redParagraph.style.color='red';
 newContainer.appendChild(redParagraph);

 //h3

 const title =document.createElement('h3');
 title.classList.add('title');
 title.setAttribute('style','color:blue');
 title.textContent="I'm a blue h3";
 newContainer.appendChild(title);
//div
 const newDiv =document.createElement('div');
 newDiv.classList.add('new-div');
 newDiv.setAttribute('style','border:1px solid black; background:pink;');


newContainer.appendChild(newDiv);

const newTitle= document.createElement('h1');
newTitle.classList.add('new-title');
newTitle.textContent="I'm in a div";
newDiv.appendChild(newTitle);

const newP= document.createElement('p');
newP.classList.add('new-p');
newP.textContent="ME TOO!";
newDiv.appendChild(newP);

