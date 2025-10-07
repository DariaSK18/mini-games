// main logic

// const triggerTabList = document.querySelectorAll('#myTab button')
// triggerTabList.forEach(triggerEl => {
//   const tabTrigger = new bootstrap.Tab(triggerEl)

//   triggerEl.addEventListener('click', event => {
//     event.preventDefault()
//     tabTrigger.show()
//   })
// })

// const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
// bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

// const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
// bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab

// const triggerTabList = document.querySelectorAll('.nav-link')

// triggerTabList.forEach(tab => {
//     tab.addEventListener('click', (e) => {
//         e.preventDefault();
//         triggerTabList.forEach(t => t.classList.remove('active'));
//         tab.classList.add('active');
//     })
// })
document.addEventListener('DOMContentLoaded', () => {

  const box = document.querySelector('.color-sort__box')
  const draggableList = document.querySelectorAll('.draggable')
  // console.log(draggableList);
  const boxWidth = box.clientWidth
  const boxHeight = box.clientHeight
  
  draggableList.forEach(e => {
    const elWidth = e.offsetWidth
    const elHeight = e.offsetHeight

    const randomTop = Math.random() * (boxHeight - elHeight)
    const randomLeft = Math.random() * (boxWidth - elWidth)

    // console.log(randomTop, randomLeft);
    

    e.style.top = `${randomTop}px`
    e.style.left = `${randomLeft}px`
  })
})



$(document).ready(function () {
$( function() {
    $( "#sortable" ).sortable();
    $( ".draggable" ).draggable();
    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          // .addClass( "ui-state-highlight" )
          // .find( "p" )
          //   .html( "Dropped!" );
      }
    });
  } );
})