var mainInterval,isFirstTime=!0;function getRandomInt(min,max){return min=Math.ceil(min),max=Math.floor(max),Math.floor(Math.random()*(max-min+1))+min}function setRandomBlob(){blob.style.width=getRandomInt(50,100)+"%",blob.style.height=getRandomInt(50,100)+"%",blob.style.rotate=getRandomInt(0,360)+"deg"}function randomPosition(element){var x=getRandomInt(0,window.innerWidth),y=getRandomInt(0,window.innerHeight);element.style.position="absolute",element.style.left=x+"px",element.style.top=y+"px"}function resetBlob(){setRandomBlob(),blob.style.background=generateGradient(),randomPosition(blob),blob.animate([{opacity:0},{opacity:.4}],{duration:3e3,iterations:1,fill:"forwards"})}function main(){if(!isFirstTime){var fadeOutAnimation=blob.animate([{opacity:.4},{opacity:0,scale:.8}],{duration:3e3,iterations:1,fill:"forwards"});fadeOutAnimation.onfinish=function(){resetBlob()}}else resetBlob(),isFirstTime=!1;mainInterval=setTimeout(main,getRandomInt(7500,3e4))}blob.addEventListener("click",function(){clearTimeout(mainInterval),main(getRandomInt(7500,3e4))}),main();