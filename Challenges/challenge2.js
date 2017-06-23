// var years = [ 1950, 1960, 1970, 1980, 1990, 2000, 2010 ];
// var newYears = new Array;
//
// for ( var i = 0; i < years.length; i ++ ) {
//   newYears.push(years[i]);
// }
//
// var age
//
// while ( i < years.length ) {
  // if ( ( age = 2017 - years[i].length) >= 18 ) {
  //   console.log(years[i] -> age + " years old");
  //   i++;
  // }
// }

var years = [ 1950, 1960, 1970, 1980, 1990, 2000, 2010 ];
var age

var printFullAge = function(yearsArray) {
  var agesArray = new Array;
  var legalAge = new Array;

  for ( var i = 0; i < yearsArray.length; i ++ ) {
    age = 2017 - yearsArray[i];
    agesArray.push(age);
  };

  console.log(agesArray);

  var i = 0;

  while ( i < yearsArray.length ) {
    if ( agesArray[i] >= 18 ) {
      console.log( agesArray[i] + " years old" );
      legalAge.push(true);
    } else {
      legalAge.push(false);
    };
    i++;
  };
  console.log(legalAge);
  return legalAge;
}

printFullAge(years);
