function scuberGreetingForFeet(distanceTraveled){
    if (distanceTraveled <= 400) {
      return 'This one is on me!';
    } else if(distanceTraveled <= 2000) {
      return 'That will be twenty bucks.'
    } else if(distanceTraveled <= 2500) {
      return 'I will gladly take your thirty bucks.'
    } else if(distanceTraveled >= 2501) {
     return 'No can do.'
    }
  }


function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tipAmount){
  switch(tipAmount){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}