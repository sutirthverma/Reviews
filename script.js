const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const rImg = document.querySelector('.img');
const rName= document.querySelector('.name');
const job = document.querySelector('.job');
const txt = document.querySelector('.txt');
const lArr = document.querySelector('.left');
const rArr = document.querySelector('.right');
const surpriseBtn = document.querySelector('.btn');

let counter = 0;
let len = reviews.length;

//onload
function load(num){
    let person = reviews[num];
    rImg.src = person.img;
    rName.innerText = person.name;
    job.innerText = person.job;
    txt.innerText = person.text;

}

lArr.addEventListener('click', function(){
    counter--;
    load(((counter % len) + len) % len);
})

rArr.addEventListener('click', function(){
    counter++;
    load(((counter % len) + len) % len);
})

surpriseBtn.addEventListener('click', function () {  

    counter = Math.floor(Math.random() * reviews.length);
    load(counter);
  });
