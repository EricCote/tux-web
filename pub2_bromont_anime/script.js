// Wrap every letter in a span
var ani = anime.timeline({loop: true,   easing: 'spring(1, 90, 10, 10)'});

var lines = document.querySelectorAll('.ml10 .letters');
lines.forEach((line,i) => {
    //isoler chaque lettre sans un span qui sera animé
    line.innerHTML = line.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    ani.add({
        targets: line.querySelectorAll(".letter"),
        rotateZ: [-90, 0],
        //translateX: [300 ,0] ,
        opacity: [0,1],
        delay: anime.stagger(45)
      }, i===0 ? '0' : '-=1000');
});

ani.add({
    targets: 'img',
    translateX: [-300 ,0] ,
    opacity: [0,1],
    delay: anime.stagger(500)
},'-=3000')


ani.add({
    targets: 'img, .ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });