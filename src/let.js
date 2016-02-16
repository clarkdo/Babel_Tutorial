function withoutLet() {
  var i,x,y,z;

  {
    var x = 2;
  }

  for (var i = 0; i < 1; i++) {
    if (i === 0) {
      var y = 3;
    }
  }

  var z = 4;

  console.log('withoutLet i=>' + i);
  console.log('withoutLet x=>' + x);
  console.log('withoutLet y=>' + y);
  console.log('withoutLet z=>' + z);
}

function withLet() {
  var i,x,y;

  {
    let x = 2;
  }

  for (let i = 0; i < 1; i++) {
    if (i === 0) {
      let y = 3;
    }
  }

  let z = 4;

  console.log('withLet i=>' + i);
  console.log('withLet x=>' + x);
  console.log('withLet y=>' + y);
  console.log('withLet z=>' + z);
}

withoutLet();
withLet();
