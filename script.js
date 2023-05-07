// Keyboard creation

document.body.innerHTML = `

<div class="container">
  <textarea class="input-form" id="text" name="name" autofocus></textarea>
  <div class="keyboard">

    <div class="row">
      <div class="button" id="btn-tld">
      \`
      </div>
      <div class="button" id="btn1">
      1
      </div>
      <div class="button" id="btn2">
      2
      </div>
      <div class="button" id="btn3">
      3
      </div>
      <div class="button" id="btn4">
      4
      </div>
      <div class="button" id="btn5">
      5
      </div>
      <div class="button" id="btn6">
      6
      </div>
      <div class="button" id="btn7">
      7
      </div>
      <div class="button" id="btn8">
      8
      </div>
      <div class="button" id="btn9">
      9
      </div>
      <div class="button" id="btn0">
      0
      </div>
      <div class="button" id="btn-">
      -
      </div>
      <div class="button" id="btn=">
      =
      </div>
      <div class="button function-btn bkspc" id="btn-bcksp">
      Backspace
      </div>

    </div>

    <div class="row">
      <div class="button function-btn" id="tab">
      Tab
      </div>
      <div class="button" id="btn-q">
      q
      </div>
      <div class="button" id="btn-w">
      w
      </div>
      <div class="button" id="btn-e">
      e
      </div>
      <div class="button" id="btn-r">
      r
      </div>
      <div class="button" id="btn-t">
      t
      </div>
      <div class="button" id="btn-y">
      y
      </div>
      <div class="button" id="btn-u">
      u
      </div>
      <div class="button" id="btn-i">
      i
      </div>
      <div class="button" id="btn-o">
      o
      </div>
      <div class="button" id="btn-p">
      p
      </div>
      <div class="button" id="btn-[">
      [
      </div>
      <div class="button" id="btn-]">
      ]
      </div>

      <div class="button function-btn" id="btn-del">
      DEL
      </div>
    </div>

    <div class="row">
      <div class="button function-btn" id="btn-caps">
      Caps Lock
      </div>
      <div class="button" id="btn-a">
      a
      </div>
      <div class="button" id="btn-s">
      s
      </div>
      <div class="button" id="btn-d">
      d
      </div>
      <div class="button" id="btn-f">
      f
      </div>
      <div class="button" id="btn-g">
      g
      </div>
      <div class="button" id="btn-h">
      h
      </div>
      <div class="button" id="btn-j">
      j
      </div>
      <div class="button" id="btn-k">
      k
      </div>
      <div class="button" id="btn-l">
      l
      </div>
      <div class="button" id="btn-smcln">
      ;
      </div>
      <div class="button" id="btn-quo">
      '
      </div>
      <div class="button" id="btn-backslash">
      \\
      </div>
      <div class="button function-btn" id="btn-enter">
      ENTER
      </div>

    </div>

    <div class="row">
      <div class="button function-btn" id="btn-shift-l">
      Shift
      </div>

      <div class="button" id="btn-z">
      z
      </div>
      <div class="button" id="btn-x">
      x
      </div>
      <div class="button" id="btn-c">
      c
      </div>
      <div class="button" id="btn-v">
      v
      </div>
      <div class="button" id="btn-b">
      b
      </div>
      <div class="button" id="btn-n">
      n
      </div>
      <div class="button" id="btn-m">
      m
      </div>
      <div class="button" id="btn-comma">
      ,
      </div>
      <div class="button" id="btn-point">
      .
      </div>
      <div class="button" id="btn-slash">
      /
      </div>

      <div class="button" id="btn-arrow-up">
      \u{2191}
      </div>
      
      <div class="button function-btn" id="btn-shift-r">
      Shift
      </div>

    </div>

    <div class="row">
      <div class="button function-btn" id="btn-ctrl-l">
      Ctrl
      </div>
      <div class="button function-btn">
      Win
      </div>
      <div class="button function-btn" id="btn-alt-l">
      Alt
      </div>
      <div class="button space" id="btn-space" >
      
      </div>
      <div class="button function-btn" id="btn-alt-r">
      Alt
      </div>
      <div class="button function-btn" id="btn-ctrl-r">
      Ctrl
      </div>
      <div class="button function-btn">
        <select id="language">
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </select>
      </div>
      <div class="button" id="btn-arrow-left">
      \u{2190}
      </div>
      <div class="button" id="btn-arrow-down">
      \u{2193}
      </div>
      <div class="button" id="btn-arrow-right">
      \u{2192}
      </div>
      

  </div>
</div>
<div class="text">
<p>Virtual keyboar created in Windows OS. There is a separate key on the keyboard to change the language.</p>
</div>


`

let text = document.getElementById('text');
const language = document.getElementById("language");

// SAVE LANGUAGE 

function setLocalStorage() {
  localStorage.setItem('language', language.value);
}


window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {
  if (localStorage.getItem('language')) {
    language.value = localStorage.getItem('language');
}
}
window.addEventListener('load', getLocalStorage);


function changeLanguage() {

  if (document.getElementById("language").value === "ru") {

      document.getElementById("btn-tld").innerHTML = "ё";
     
      document.getElementById("btn-q").innerHTML = "й";

      document.getElementById("btn-w").innerHTML = "ц";

      document.getElementById("btn-e").innerHTML = "у";

      document.getElementById("btn-r").innerHTML = "к";

      document.getElementById("btn-t").innerHTML = "е";

      document.getElementById("btn-y").innerHTML = "н";

      document.getElementById("btn-u").innerHTML = "г";

      document.getElementById("btn-i").innerHTML = "ш";

      document.getElementById("btn-o").innerHTML = "щ";

      document.getElementById("btn-p").innerHTML = "з";

      document.getElementById("btn-[").innerHTML = "х";

      document.getElementById("btn-]").innerHTML = "ъ";

      document.getElementById("btn-a").innerHTML = "ф";

      document.getElementById("btn-s").innerHTML = "ы";

      document.getElementById("btn-d").innerHTML = "в";

      document.getElementById("btn-f").innerHTML = "а";

      document.getElementById("btn-g").innerHTML = "п";

      document.getElementById("btn-h").innerHTML = "р";

      document.getElementById("btn-j").innerHTML = "о";

      document.getElementById("btn-k").innerHTML = "л";

      document.getElementById("btn-l").innerHTML = "д";

      document.getElementById("btn-smcln").innerHTML = "ж";

      document.getElementById("btn-quo").innerHTML = "э";

      document.getElementById("btn-z").innerHTML = "я";

      document.getElementById("btn-x").innerHTML = "ч";

      document.getElementById("btn-c").innerHTML = "с";

      document.getElementById("btn-v").innerHTML = "м";

      document.getElementById("btn-b").innerHTML = "и";

      document.getElementById("btn-n").innerHTML = "т";

      document.getElementById("btn-m").innerHTML = "ь";

      document.getElementById("btn-comma").innerHTML = "б";

      document.getElementById("btn-point").innerHTML = "ю";

      document.getElementById("btn-slash").innerHTML = ".";

  }

  else if (document.getElementById("language").value === "en") {

      document.getElementById("btn-tld").innerHTML = "\`";

      document.getElementById("btn-q").innerHTML = "q";

      document.getElementById("btn-w").innerHTML = "w";

      document.getElementById("btn-e").innerHTML = "e";

      document.getElementById("btn-r").innerHTML = "r";

      document.getElementById("btn-t").innerHTML = "t";

      document.getElementById("btn-y").innerHTML = "y";

      document.getElementById("btn-u").innerHTML = "u";

      document.getElementById("btn-i").innerHTML = "i";

      document.getElementById("btn-o").innerHTML = "o";

      document.getElementById("btn-p").innerHTML = "p";

      document.getElementById("btn-[").innerHTML = "[";

      document.getElementById("btn-]").innerHTML = "]";

      document.getElementById("btn-a").innerHTML = "a";

      document.getElementById("btn-s").innerHTML = "s";

      document.getElementById("btn-d").innerHTML = "d";

      document.getElementById("btn-f").innerHTML = "f";

      document.getElementById("btn-g").innerHTML = "g";

      document.getElementById("btn-h").innerHTML = "h";

      document.getElementById("btn-j").innerHTML = "j";

      document.getElementById("btn-k").innerHTML = "k";

      document.getElementById("btn-l").innerHTML = "l";

      document.getElementById("btn-smcln").innerHTML = ";";

      document.getElementById("btn-quo").innerHTML = "'";

      document.getElementById("btn-z").innerHTML = "z";

      document.getElementById("btn-x").innerHTML = "x";

      document.getElementById("btn-c").innerHTML = "c";

      document.getElementById("btn-v").innerHTML = "v";

      document.getElementById("btn-b").innerHTML = "b";

      document.getElementById("btn-n").innerHTML = "n";

      document.getElementById("btn-m").innerHTML = "m";

      document.getElementById("btn-comma").innerHTML = ",";

      document.getElementById("btn-point").innerHTML = ".";

      document.getElementById("btn-slash").innerHTML = "/";

  }

}



window.addEventListener('load', changeLanguage);


// CHANGE LANGUAGE


document.getElementById("language").addEventListener("change", function() {

changeLanguage();

});


//Keyboard action

document.getElementById("btn1").addEventListener('click', function () {
    text.value += '1';
});

document.getElementById("btn3").addEventListener('click', function () {
    text.value += '3';
});

document.getElementById("btn4").addEventListener('click', function () {
    text.value += '4';
});

document.getElementById("btn2").addEventListener('click', function () {
    text.value += '2';
});

document.getElementById("btn5").addEventListener('click', function () {
    text.value += '5';
});

document.getElementById("btn6").addEventListener('click', function () {
    text.value += '6';
});

document.getElementById("btn7").addEventListener('click', function () {
    text.value += '7';
});

document.getElementById("btn8").addEventListener('click', function () {
    text.value += '8';
});

document.getElementById("btn9").addEventListener('click', function () {
    text.value += '9';
});

document.getElementById("btn0").addEventListener('click', function () {
    text.value += '0';
});

document.getElementById("btn=").addEventListener('click', function () {
    text.value += '=';
});

document.getElementById("btn-").addEventListener('click', function () {
    text.value += '-';
});

document.getElementById("tab").addEventListener('click', function () {
    text.value += '	';
});

document.getElementById("btn-enter").addEventListener('click', function () {
    text.value += '\n';

});

document.getElementById("btn-arrow-up").addEventListener('click', function () {
    text.value += '\u{2191}';

});

document.getElementById("btn-arrow-left").addEventListener('click', function () {
    text.value += '\u{2190}';

});

document.getElementById("btn-arrow-down").addEventListener('click', function () {
    text.value += '\u{2193}';

});

document.getElementById("btn-arrow-right").addEventListener('click', function () {
    text.value += '\u{2192}';

});


document.getElementById("btn-bcksp").addEventListener('click', function () {
    text.value = text.value.slice(0, -1); 

});

document.getElementById("btn-backslash").addEventListener('click', function () {
    text.value += '\\';

});


document.getElementById("btn-space").addEventListener('click', function () {
    text.value += ' ';

});

document.getElementById("btn-tld").addEventListener('click', function () {
        text.value += document.getElementById("btn-tld").textContent;
      });


      document.getElementById("btn-q").addEventListener('click', function () {
        text.value += document.getElementById("btn-q").textContent;
      });


      document.getElementById("btn-w").addEventListener('click', function () {
        text.value += document.getElementById("btn-w").textContent;
      });


      document.getElementById("btn-e").addEventListener('click', function () {
        text.value += document.getElementById("btn-e").textContent;
      });


      document.getElementById("btn-r").addEventListener('click', function () {
        text.value += document.getElementById("btn-r").textContent;
      });


      document.getElementById("btn-t").addEventListener('click', function () {
        text.value += document.getElementById("btn-t").textContent;
      });


      document.getElementById("btn-y").addEventListener('click', function () {
        text.value += document.getElementById("btn-y").textContent;
      });


      document.getElementById("btn-u").addEventListener('click', function () {
        text.value += document.getElementById("btn-u").textContent;
      });


      document.getElementById("btn-i").addEventListener('click', function () {
        text.value += document.getElementById("btn-i").textContent;
      });

 
      document.getElementById("btn-o").addEventListener('click', function () {
        text.value += document.getElementById("btn-o").textContent;
      });


      document.getElementById("btn-p").addEventListener('click', function () {
        text.value += document.getElementById("btn-p").textContent;
      });


      document.getElementById("btn-[").addEventListener('click', function () {
        text.value += document.getElementById("btn-[").textContent;
      });


      document.getElementById("btn-]").addEventListener('click', function () {
        text.value += document.getElementById("btn-]").textContent;
      });



      document.getElementById("btn-a").addEventListener('click', function () {
        text.value += document.getElementById("btn-a").textContent;
      });


      document.getElementById("btn-s").addEventListener('click', function () {
        text.value += document.getElementById("btn-s").textContent;
      });


      document.getElementById("btn-d").addEventListener('click', function () {
        text.value += document.getElementById("btn-d").textContent;
      });

 
      document.getElementById("btn-f").addEventListener('click', function () {
        text.value += document.getElementById("btn-f").textContent;
      });


      document.getElementById("btn-g").addEventListener('click', function () {
        text.value += document.getElementById("btn-g").textContent;
      });


      document.getElementById("btn-h").addEventListener('click', function () {
        text.value += document.getElementById("btn-h").textContent;
      });


      document.getElementById("btn-j").addEventListener('click', function () {
        text.value += document.getElementById("btn-j").textContent;
      });


      document.getElementById("btn-k").addEventListener('click', function () {
        text.value += document.getElementById("btn-k").textContent;
      });


      document.getElementById("btn-l").addEventListener('click', function () {
        text.value += document.getElementById("btn-l").textContent;
      });


      document.getElementById("btn-smcln").addEventListener('click', function () {
        text.value += document.getElementById("btn-smcln").textContent;
      });


      document.getElementById("btn-quo").addEventListener('click', function () {
        text.value += document.getElementById("btn-quo").textContent;
      });


      document.getElementById("btn-z").addEventListener('click', function () {
        text.value += document.getElementById("btn-z").textContent;
      });


      document.getElementById("btn-x").addEventListener('click', function () {
        text.value += document.getElementById("btn-x").textContent;
      });


      document.getElementById("btn-c").addEventListener('click', function () {
        text.value += document.getElementById("btn-c").textContent;
      });



      document.getElementById("btn-v").addEventListener('click', function () {
        text.value += document.getElementById("btn-v").textContent;
      });


      document.getElementById("btn-b").addEventListener('click', function () {
        text.value += document.getElementById("btn-b").textContent;
      });


      document.getElementById("btn-n").addEventListener('click', function () {
        text.value += document.getElementById("btn-n").textContent;
      });

 
      document.getElementById("btn-m").addEventListener('click', function () {
        text.value += document.getElementById("btn-m").textContent;
      });


      document.getElementById("btn-comma").addEventListener('click', function () {
        text.value += document.getElementById("btn-comma").textContent;
      });


      document.getElementById("btn-point").addEventListener('click', function () {
        text.value += document.getElementById("btn-point").textContent;
      });


      document.getElementById("btn-slash").addEventListener('click', function () {
        text.value += document.getElementById("btn-slash").textContent;
      });




/*
document.getElementById("btn-del").addEventListener('click', function () {
    text.value = text.value.slice(0, text.selectionStart - 1) + text.value.slice(text.selectionStart, text.value.length);

});
*/



// Phyzical keyboard press dublication

// Digits

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit1') {
        document.getElementById("btn1").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit1') {
        document.getElementById("btn1").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit2') {
        document.getElementById("btn2").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit2') {
        document.getElementById("btn2").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit3') {
        document.getElementById("btn3").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit3') {
        document.getElementById("btn3").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit4') {
        document.getElementById("btn4").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit4') {
        document.getElementById("btn4").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit5') {
        document.getElementById("btn5").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit5') {
        document.getElementById("btn5").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit6') {
        document.getElementById("btn6").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit6') {
        document.getElementById("btn6").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit7') {
        document.getElementById("btn7").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit7') {
        document.getElementById("btn7").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit8') {
        document.getElementById("btn8").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit8') {
        document.getElementById("btn8").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit9') {
        document.getElementById("btn9").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit9') {
        document.getElementById("btn9").classList.remove('active');
        }
        })

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Digit0') {
        document.getElementById("btn0").classList.add('active');
        }
        })
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Digit0') {
        document.getElementById("btn0").classList.remove('active');
        }
        })

// KEYS

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyQ') {
        document.getElementById("btn-q").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyQ') {
        document.getElementById("btn-q").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyW') {
        document.getElementById("btn-w").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyW') {
        document.getElementById("btn-w").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyE') {
        document.getElementById("btn-e").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyE') {
        document.getElementById("btn-e").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyR') {
        document.getElementById("btn-r").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyR') {
        document.getElementById("btn-r").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyT') {
        document.getElementById("btn-t").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyT') {
        document.getElementById("btn-t").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyY') {
        document.getElementById("btn-y").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyY') {
        document.getElementById("btn-y").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyU') {
        document.getElementById("btn-u").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyU') {
        document.getElementById("btn-u").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyI') {
        document.getElementById("btn-i").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyI') {
        document.getElementById("btn-i").classList.remove('active');
        }
})


document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyO') {
        document.getElementById("btn-o").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyO') {
        document.getElementById("btn-o").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyP') {
        document.getElementById("btn-p").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyP') {
        document.getElementById("btn-p").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyA') {
        document.getElementById("btn-a").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyA') {
        document.getElementById("btn-a").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyS') {
        document.getElementById("btn-s").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyS') {
        document.getElementById("btn-s").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyD') {
        document.getElementById("btn-d").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyD') {
        document.getElementById("btn-d").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyF') {
        document.getElementById("btn-f").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyF') {
        document.getElementById("btn-f").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyG') {
        document.getElementById("btn-g").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyG') {
        document.getElementById("btn-g").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyH') {
        document.getElementById("btn-h").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyH') {
        document.getElementById("btn-h").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyJ') {
        document.getElementById("btn-j").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyJ') {
        document.getElementById("btn-j").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyK') {
        document.getElementById("btn-k").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyK') {
        document.getElementById("btn-k").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyL') {
        document.getElementById("btn-l").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyL') {
        document.getElementById("btn-l").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyZ') {
        document.getElementById("btn-z").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyZ') {
        document.getElementById("btn-z").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyX') {
        document.getElementById("btn-x").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyX') {
        document.getElementById("btn-x").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyC') {
        document.getElementById("btn-c").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyC') {
        document.getElementById("btn-c").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyV') {
        document.getElementById("btn-v").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyV') {
        document.getElementById("btn-v").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyB') {
        document.getElementById("btn-b").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyB') {
        document.getElementById("btn-b").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyN') {
        document.getElementById("btn-n").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyN') {
        document.getElementById("btn-n").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'KeyM') {
        document.getElementById("btn-m").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'KeyM') {
        document.getElementById("btn-m").classList.remove('active');
        }
})


document.addEventListener ('keydown', function(event) {
        if(event.code == 'Comma') {
        document.getElementById("btn-comma").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Comma') {
        document.getElementById("btn-comma").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Period') {
        document.getElementById("btn-point").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Period') {
        document.getElementById("btn-point").classList.remove('active');
        }
})




document.addEventListener ('keydown', function(event) {
        if(event.code == 'Backspace') {
        document.getElementById("btn-bcksp").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Backspace') {
        document.getElementById("btn-bcksp").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Tab') {
        document.getElementById("tab").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Tab') {
        document.getElementById("tab").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Minus') {
        document.getElementById("btn-").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Minus') {
        document.getElementById("btn-").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Equal') {
        document.getElementById("btn=").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Equal') {
        document.getElementById("btn=").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Enter') {
        document.getElementById("btn-enter").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Enter') {
        document.getElementById("btn-enter").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Semicolon') {
        document.getElementById("btn-smcln").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Semicolon') {
        document.getElementById("btn-smcln").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Quote') {
        document.getElementById("btn-quo").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Quote') {
        document.getElementById("btn-quo").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'BracketLeft') {
        document.getElementById("btn-[").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'BracketLeft') {
        document.getElementById("btn-[").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'BracketRight') {
        document.getElementById("btn-]").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'BracketRight') {
        document.getElementById("btn-]").classList.remove('active');
        }
})


document.addEventListener ('keydown', function(event) {
        if(event.code == 'Backquote') {
        document.getElementById("btn-tld").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Backquote') {
        document.getElementById("btn-tld").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'CapsLock') {
        document.getElementById("btn-caps").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'CapsLock') {
        document.getElementById("btn-caps").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'ShiftRight') {
        document.getElementById("btn-shift-r").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'ShiftRight') {
        document.getElementById("btn-shift-r").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'ShiftLeft') {
        document.getElementById("btn-shift-l").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'ShiftLeft') {
        document.getElementById("btn-shift-l").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Space') {
        document.getElementById("btn-space").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Space') {
        document.getElementById("btn-space").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Delete') {
        document.getElementById("btn-del").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Delete') {
        document.getElementById("btn-del").classList.remove('active');
        }
})


document.addEventListener ('keydown', function(event) {
        if(event.code == 'Backslash') {
        document.getElementById("btn-backslash").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Backslash') {
        document.getElementById("btn-backslash").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'Slash') {
        document.getElementById("btn-slash").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'Slash') {
        document.getElementById("btn-slash").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'AltLeft') {
        document.getElementById("btn-alt-l").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'AltLeft') {
        document.getElementById("btn-alt-l").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'AltRight') {
        document.getElementById("btn-alt-r").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'AltRight') {
        document.getElementById("btn-alt-r").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'ControlLeft') {
        document.getElementById("btn-ctrl-l").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'ControlLeft') {
        document.getElementById("btn-ctrl-l").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'ControlRight') {
        document.getElementById("btn-ctrl-r").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'ControlRight') {
        document.getElementById("btn-ctrl-r").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'ArrowUp') {
        document.getElementById("btn-arrow-up").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'ArrowUp') {
        document.getElementById("btn-arrow-up").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'ArrowDown') {
        document.getElementById("btn-arrow-down").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'ArrowDown') {
        document.getElementById("btn-arrow-down").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'ArrowLeft') {
        document.getElementById("btn-arrow-left").classList.add('active');
        }
})
document.addEventListener ('keyup', function(event) {
        if(event.code == 'ArrowLeft') {
        document.getElementById("btn-arrow-left").classList.remove('active');
        }
})

document.addEventListener ('keydown', function(event) {
        if(event.code == 'ArrowRight') {
        document.getElementById("btn-arrow-right").classList.add('active');
        }
})

document.addEventListener ('keyup', function(event) {
        if(event.code == 'ArrowRight') {
        document.getElementById("btn-arrow-right").classList.remove('active');
        }
})
