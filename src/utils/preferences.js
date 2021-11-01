export const savePreferences = () => {
  const isDark = document.body.classList.contains('dark')
  if (isDark) {
    window.localStorage.setItem('theme', 'dark')
  } else {
    window.localStorage.setItem('theme', 'light')
  }
}
