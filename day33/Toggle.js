import {useContext} from "react"
import ThemeContext from './themecontext'
const Toggle = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <button onClick={()=>{
            setTheme(!theme)
        }}>
      {theme ? "Dark" : "Light"}
        </button>
    )
}
export default Toggle;