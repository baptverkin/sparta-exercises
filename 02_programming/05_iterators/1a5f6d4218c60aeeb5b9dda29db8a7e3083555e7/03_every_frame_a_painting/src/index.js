function canTakeArtPieces(pieces) {
  return pieces.every(pieces => pieces.type !== "painting" ? false : true );
}

/*
const pieces = [
  {piece: "Mona Lisa", type: "other"},
  {piece: "Guernica", type: "painting"}
];*/


// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
