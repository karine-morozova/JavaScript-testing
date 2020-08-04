function formatString(string, maxLength = 40) {
  console.log(string.length);
  if (string.length <= maxLength) {
    console.log(string);
  } else {
    const newString = string.slice(0, maxLength);

    console.log(newString + "...");
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'
console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
