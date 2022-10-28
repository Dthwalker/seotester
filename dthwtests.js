/* ————— SEO Test by DTHWalker —————*/

class DTHWalkerTests {

  checkTitle() {
    let x = document.querySelector('title');
    if (x) {
      console.log(x);
    } else {
      console.log('Title not found');
    }
  }

  checkH1() {
    let x = document.getElementsByTagName('h1');
    if (x.length == 0) {
      console.log('H1 not found');
      return
    }
    if (x.length > 1) {
      console.log('H1 more then 1:');
      console.log (x);
      return
    }
    console.log('H1 found:');
    console.log (x[0]);
  }

  checkKeys(x) {
    let word
    typeof x == 'object' ? word = x[this.t] : word = x
    const regexp = RegExp(word,'gi');
    let y = document.body.innerText.match(regexp);
    if (y) {
      console.log(word + ' : ' + y.length)
    } else {
      console.log(`Key '${word}' not found`)
    }
    if (typeof x == 'object') {
      if (this.t < x.length - 1) {
        this.t++
        this.checkKeys(x)
      } else {
        this.t = 0
      }
    }
  }

}

const dthwTest = new DTHWalkerTests()
