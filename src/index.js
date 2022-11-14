// 12 x 16
const ROW_SIZE = 12;
const COL_SIZE = 16;
const OCTAVES = [5, 4, 3];
const KEYS = [
  { note: "C", sharp: false },
  { note: "C#", sharp: true },
  { note: "D", sharp: false },
  { note: "D#", sharp: true },
  { note: "E", sharp: false },
  { note: "F", sharp: false },
  { note: "F#", sharp: true },
  { note: "G", sharp: false },
  { note: "G#", sharp: true },
  { note: "A", sharp: false },
  { note: "A#", sharp: true },
  { note: "B", sharp: false },
].reverse();

function makeGrid(octave) {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  for (let row = 0; row < ROW_SIZE; row++) {
    for (let col = 0; col < COL_SIZE; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.note = KEYS[row].note;
      cell.dataset.octave = octave;
      if (KEYS[row].sharp) {
        cell.classList.add("sharp");
      }

      cell.addEventListener("mousedown", (e) => {
        const note = e.target.dataset.note;
        const octave = e.target.dataset.octave;
        console.log(note + octave);
      });
      grid.append(cell);
    }
  }
  return grid;
}
const innerContainer = document.getElementById("inner-container");
const sequencer = document.createElement("div");
sequencer.setAttribute("id", "sequencer");
const grid = makeGrid(4);
sequencer.append(grid);
innerContainer.append(sequencer);
