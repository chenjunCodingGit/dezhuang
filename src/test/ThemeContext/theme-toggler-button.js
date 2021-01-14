import {ThemeContext} from './theme-context'

function ThemeTogglerButton() {
  // ThemeToggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
  return(
    <ThemeContext.Consumer>
      {(theme, toggleTheme) => (
        <button
        style={{backgroundColor: theme.background,color:'#f00'}}
        onClick={toggleTheme}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeTogglerButton;