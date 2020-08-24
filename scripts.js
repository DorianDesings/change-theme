const switchInput = document.getElementById('switch');
const styles = document.documentElement.style;

const lightTheme = {
  '--bg-color': '#eee',
  '--text-color': '#333',
  '--button-bg': '#555',
  '--button-color': '#ddd'
};

const darkTheme = {
  '--bg-color': '#333',
  '--text-color': '#eee',
  '--button-bg': '#ddd',
  '--button-color': '#555'
};

const changeTheme = theme => {
  const customStyles = Object.keys(theme);
  for (const style of customStyles) {
    styles.setProperty(style, theme[style]);
  }
};

switchInput.addEventListener('click', e => {
  e.target.previousElementSibling.checked
    ? changeTheme(lightTheme)
    : changeTheme(darkTheme);
});
