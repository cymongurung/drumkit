for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {

    var buttonInnerHTML =this.innerHTML;
makesound(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
makesound(event.key);
});

function makesound(key) {

  switch (key) {
    case "w":
    var msc1 = new Audio('sounds/crash.mp3');
  msc1.play();

      break;

      case "a":
      var msc2 = new Audio('sounds/kick-bass.mp3');
    msc2.play();

        break;

        case "s":
        var msc3 = new Audio('sounds/snare.mp3');
      msc3.play();

          break;

          case "d":
          var msc4 = new Audio('sounds/tom-1.mp3');
        msc4.play();

            break;

            case "j":
            var msc5 = new Audio('sounds/tom-2.mp3');
          msc5.play();

              break;

              case "k":
              var msc6 = new Audio('sounds/tom-3.mp3');
            msc6.play();

                break;

                case "l":
                var msc7 = new Audio('sounds/tom-4.mp3');
              msc7.play();

                  break;
    default: console.log(buttonInnerHTML);

  }

}
