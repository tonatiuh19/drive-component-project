const calculateSquareFootage = (rooms: number) => {
  let livingRoomsSqft = 0;
  let total = 0;
  if (rooms < 2) {
    livingRoomsSqft = 100;
  } else if (rooms > 3 && rooms < 5) {
    livingRoomsSqft = 200;
  } else {
    livingRoomsSqft = 300;
  }

  total = livingRoomsSqft * 80;
  return total + livingRoomsSqft;
};

export default calculateSquareFootage;
