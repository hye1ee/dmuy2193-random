const colors = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Skyblue",
  "Black",
  "White",
  "Brown",
  "Gray",
  "Cyan",
  "Magenta",
  "Lavender",
  "Teal",
  "Maroon",
  "Olive",
  "Navy",
  "Indigo",
];
const adjectives = [
  "Brave",
  "Happy",
  "Kind",
  "Generous",
  "Loving",
  "Caring",
  "Optimistic",
  "Creative",
  "Intelligent",
  "Talented",
  "Confident",
  "Energetic",
  "Enthusiastic",
  "Friendly",
  "Grateful",
  "Honest",
  "Humorous",
  "Inspiring",
  "Joyful",
  "Passionate",
  "Patient",
  "Positive",
  "Sincere",
  "Smart",
  "Successful",
  "Sympathetic",
  "Vibrant",
];

const names = [
  "Drakon",
  "Fafnir",
  "Smaug",
  "Alduin",
  "Viserion",
  "Drogon",
  "Rhaegal",
  "Toothless",
  "Firnen",
  "Glaurung",
  "Shenron",
  "Bahamut",
  "Tiamat",
  "Mnemosyne",
  "Eldrax",
  "Nidhogg",
  "Vermithrax",
  "Scatha",
  "Glaedr",
  "Ancalagon",
];

const colorvals = [
  [242, 76, 0],
  [72, 86, 150],
  [252, 122, 30],
  [51, 0, 54],
  [10, 54, 157],
  [94, 124, 226],
  [136, 102, 93],
  [142, 85, 114],
  [196, 158, 133],
  [228, 154, 176],
  [205, 231, 127],
  [255, 240, 124],
  [62, 255, 139],
  [56, 108, 11],
];

const getRandomIdx = (max) => {
  return Math.floor(Math.random() * max);
};

const generator = (input) => {
  const hashVals = [0, 0, 0];
  for (let i = 0; i < input.length; i++) {
    hashVals[i % 3] += input.charCodeAt(i);
  }
  return `${colors[hashVals[0] % colors.length]} ${
    adjectives[hashVals[1] % adjectives.length]
  } ${names[hashVals[2] % names.length]}`;
};

const restyle = () => {
  const resultText = document.getElementById("div-result");
  resultText.className = `font-${getRandomIdx(6) + 1}`;

  const colorIdx = getRandomIdx(colorvals.length);
  resultText.style.color = `rgb(${colorvals[colorIdx][0]},${colorvals[colorIdx][1]},${colorvals[colorIdx][2]})`;

  const fontSize = 20 + getRandomIdx(50);
  resultText.style.fontSize = `${fontSize}px`;

  const rotationDeg = getRandomIdx(180) - 90;
  resultText.style.transform = `rotate(${rotationDeg}deg)`;
};

document.getElementById("button-submit").addEventListener("click", () => {
  document.getElementById("div-description").innerText = `${
    document.getElementById("input-name").value
  }, your dragon name is`;
  document.getElementById("div-result").innerText = generator(
    document.getElementById("input-name").value
  );
  restyle();
});
