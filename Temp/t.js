// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const rec = records[id];
  console.log(rec);
  if (rec) {
    console.log(rec.hasOwnProperty(prop));
    //if (rec.hasOwnProperty(prop)) {
    if (value === "") {
      delete rec[prop];
    } else if (prop === "tracs") {
      if (!rec.hasOwnProperty(prop)) {
        rec[prop] = [];
      }
      rec[prop].push(value);
    }
    rec[prop] = value;
    //}
  } else {
    records[id] = {
      [prop]: value,
    };
  }

  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

console.dir(recordCollection);
