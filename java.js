const btnElPrev = document.getElementById("prev");
const btnElNext = document.getElementById("next");
const quoteElDesktop = document.getElementById("quote");
const quoteElMobile = document.getElementById("quote-mobile");
const personName = document.getElementById("name");
const personPosition = document.getElementById("position");
const personImage = document.getElementById("image-tanya");
const imageJohn = document.getElementById("image-john");

btnElNext.addEventListener("click", nextPerson);
btnElPrev.addEventListener("click", prevPerson);

function nextPerson() {
    personImage.src = "/image-john.jpg";
    quoteElDesktop.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`;
    quoteElMobile.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`;
    personName.innerHTML = `John Tarkpor`;
    personPosition.innerHTML = ` Junior Front-end Developer`;
}

function prevPerson() {
    personImage.src = "/image-tanya.jpg";
    quoteElDesktop.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`;
    quoteElMobile.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`;
    personName.innerHTML = `Tanya Sinclair`;
    personPosition.innerHTML = ` UX Engineer`;
}
