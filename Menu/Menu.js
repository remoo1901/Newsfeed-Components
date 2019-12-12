/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems =[
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div> */
  
  //const menuNav = document.querySelector(".menu");



/* Step 3: Using a DOM selector, select the menu button 
  (the element with a class of 'menu-button') currently on the DOM. */


/*

  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.menu-button');
  function openMenu(arr){
    const navDiv = document.createElement('div');
    const listOfLinks = document.createElement('ul');
    navDiv.appendChild(listOfLinks);
    //create the li's
    menuItems.forEach((link) => {
      const item = document.createElement('li');
      item.textContent = link;
      listOfLinks.appendChild(item);
      item.style.cursor = 'pointer';
    })
    navDiv.classList.add('menu');
    menuButton.addEventListener('click', (e) => {
      navDiv.classList.toggle('menu--open');
    })
    return navDiv;
  }
  header.appendChild(openMenu(menuItems)) */

  const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');

function openMenu(arr){
  const navDiv = document.createElement('div');
  const listOfLinks = document.createElement('ul');

  navDiv.appendChild(listOfLinks);

  // create the Li's

  menuItems.forEach((link) =>{
    const item = document.createElement('li');
    item.textContent = link;
    listOfLinks.appendChild(item);
    item.style.cursor = 'pointer'
  })

  navDiv.classList.add('menu');
  menuButton.addEventListener('click', (x) => {
    navDiv.classList.toggle('menu--open');
  })

  return navDiv;
}

header.appendChild(openMenu(menuItems))