//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, pos) => { 
  if (pos == 1 || ((pos%10) == 1) && pos != 11 && pos%100 != 11 ) {
    return name + ', you are the ' + pos + 'st customer we serve today. Thank you!';
  } else if (pos == 2 || ((pos%10) == 2) && pos != 12 && pos%100 != 12 ) {
    return name + ', you are the ' + pos + 'nd customer we serve today. Thank you!';
  } else if (pos == 3 || ((pos%10) == 3) && pos != 13 && pos%100 != 13) {
    return name + ', you are the ' + pos + 'rd customer we serve today. Thank you!';
  } else if (pos > 3) {
    return (name + ', you are the ' + pos + 'th customer we serve today. Thank you!');
  }
};
