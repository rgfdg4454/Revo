$('.floor1-ch3-carousel').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: $('.prevBtn1'),
  nextArrow: $('.nextBtn1')
});

$('.floor2-ch3-carousel').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: $('.prevBtn2'),
  nextArrow: $('.nextBtn2')
});

$('.ch5-carousel-floor').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: $('.prevBtn3'),
  nextArrow: $('.nextBtn3'),
  centerMode: false
});

function Tabs(){
  let tab1 = document.getElementById('tab-content1');
  let tab2 = document.getElementById('tab-content2');
  let tab3 = document.getElementById('tab-content3');

  let btn1 = document.getElementById('tab1');
  let btn2 = document.getElementById('tab2');
  let btn3 = document.getElementById('tab3');

  document.getElementById('tab1').addEventListener('click', function(){
    tab2.style.display = 'none';
    tab3.style.display = 'none';
    tab1.style.display = 'block';
    btn3.classList.remove('btn-tab-active');
    btn2.classList.remove('btn-tab-active');
    btn1.classList.add('btn-tab-active');
  });

  document.getElementById('tab2').addEventListener('click', function(){
    tab3.style.display = 'none';
    tab1.style.display = 'none';
    tab2.style.display = 'block';
    btn3.classList.remove('btn-tab-active');
    btn1.classList.remove('btn-tab-active');
    btn2.classList.add('btn-tab-active');
  });

  document.getElementById('tab3').addEventListener('click', function(){
    tab2.style.display = 'none';
    tab1.style.display = 'none';
    tab3.style.display = 'block';
    btn2.classList.remove('btn-tab-active');
    btn1.classList.remove('btn-tab-active');
    btn3.classList.add('btn-tab-active');
  });
}







// const btnsTab = document.querySelectorAll(".btn-tab");
// const tabContent = document.querySelectorAll(".tab");

// for (let item of btnsTab){
//   item.addEventListener('click', function() {
//     for (let element of tabContent){
//       element.classList.add('hidden');
//     }

//     const content = document.querySelector('#' + item.dataset.tab);
//     content.classList.remove('hidden');
//   })
// }

// const btnsTabs = document.querySelectorAll('.btn-tab');
// const tabContent = document.querySelectorAll('.tab');

// for (let btn of btnsTabs) {
//   btn.addEventListener('click', function() {
//     const tabId = btn.dataset.tab;
//     for (let tab of tabContent) {
//       if (tab.getAttribute('id') === tabId) {
//         tab.classList.remove('hidden');
//       } else {
//         tab.classList.add('hidden');
//       }
//     }
//   });
// }
