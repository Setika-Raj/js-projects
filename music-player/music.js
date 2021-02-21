var typed = new Typed('#typed',{
  strings: [' Make your own music  <i class="fas fa-drum"></i> <i class="fas fa-drum"></i> <i class="fas fa-drum"></i>',
  ' Adorn your moves <i class="fas fa-music"></i> <i class="fas fa-music"></i> <i class="fas fa-music"></i>',],
      typeSpeed: 60,
      startDelay: 10,
      loop: true,
      smartBackspace:false,
      shuffle:false,

    });

    const visual=document.querySelector(".visual");
    const colors=[
      "#60d394","#d36060","#c060d3","#d3d160","#6860d3","#60b2d3"];

const sounds=document.querySelectorAll(".sound");
const pads=document.querySelectorAll(".pads div");

pads.forEach(function(pad,index){
pad.addEventListener("click",function(){
sounds[index].currentTime=0;
  sounds[index].play();
  bubbles(index);
});

});
function bubbles(index){
  const bubble=document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor=colors[index];
  bubble.style.animation="jump 1s ease";
  bubble.addEventListener('animationend',function(){
    visual.removeChild(this);
  });
}
