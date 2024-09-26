function toggleAnswer(index) {
  const answer = document.getElementById(`answer${index}`);
  const question = answer.previousElementSibling;
  const icon = document.getElementById(`icon${index}`);

  if (answer.style.display === "block") {
    answer.style.display = "none";
    answer.classList.remove("active");
    question.classList.remove("active");
    icon.classList.remove("rotate");
  } else {
    answer.style.display = "block";
    answer.classList.add("active");
    question.classList.add("active");
    icon.classList.add("rotate");
  }
}

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
  });
});
