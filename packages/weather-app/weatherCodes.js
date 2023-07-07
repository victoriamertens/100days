function codeToIcon(code) {
  if (code === 800) {
    return icons[7];
  }

  return icons[Math.floor(code / 100)];
}

let icons = {
  2: '/src/Icons/thunder.svg',
  3: '/src/Icons/cloudy.svg',
  4: 'snow',
  5: '/src/Icons/rainy.svg',
  6: 'atmosphere',
  7: '/src/Icons/sunny.svg',
  8: '/src/Icons/partly.svg',
};

export { codeToIcon };
