// code your solution here
const cats = ["Milo", "Otis", "Garfield"]
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(objects){
    const winRecord = objects.find( obj => obj.result === "W")
    if (winRecord){
      return winRecord.year;
    }
    else{
      return undefined;
    }
}

