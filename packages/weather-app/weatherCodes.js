//Example response from API, using while I wait for API key to be activated

function codeToIcon(code) {
  if (code === 800) {
    return icons[7];
  }

  return icons[Math.floor(code / 100)];
}

let icons = {
  2: 'thunder',
  3: '/src/Icons/cloudy.svg',
  4: 'rain',
  5: 'snow',
  6: 'atmosphere',
  7: '/src/Icons/sunny.svg',
  8: '/src/Icons/partly.svg',
};

export { codeToIcon };
