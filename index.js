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

const generator = (input) => {
  const hashValues = [0, 0, 0];
  for (let i = 0; i < input.length; i++) {
    hashValues[i % 3] += input.charCodeAt(i);
  }
  return `${colors[hashValues[0] % colors.length]} ${
    adjectives[hashValues[1] % adjectives.length]
  } ${names[hashValues[2] % names.length]}`;
};

document.getElementById("button-submit").addEventListener("click", () => {
  document.getElementById("div-result").innerText = generator(
    document.getElementById("input-name").value
  );
});
