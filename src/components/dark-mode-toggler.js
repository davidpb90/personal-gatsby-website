import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAtom,
    faCoffee
} from 'gatsby-plugin-fontawesome-css'

// const DarkModeToggler = ({ pageTitle, children }) => {
//     const data = useStaticQuery(graphql`
//         query MyTitleQuery {
//             site {
//                 siteMetadata {
//                     title
//                 }
//             }
//         }
//     `)
//     return (
//         <ThemeToggler>
//             {({ theme, toggleTheme }) => (
//                 <label>
//                     <input
//                         type="checkbox"
//                         onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
//                         checked={theme === 'dark'}
//                     />{' '}
//                     Dark mode
//                 </label>
//             )}
//         </ThemeToggler>
//     )
// }

// export default DarkModeToggler




function getDefaultTheme() {
    const savedTheme = window.localStorage.getItem("theme")
    return savedTheme ? savedTheme : "light"
}

export default function DarkModeToggler() {
    const [isDark, setIsDark] = React.useState(getDefaultTheme())

    React.useEffect(() => {
        if (isDark === "dark") {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
        window.localStorage.setItem("theme", isDark)
    }, [isDark])

    return (
        <div className="global-toggle-switch">
            <span onClick={() => setIsDark(isDark === "dark" ? "light" : "dark")}>
                {isDark === "dark" ? (
                    <FontAwesomeIcon icon={faAtom} size="1x" />
                ) : (
                        <FontAwesomeIcon icon={faCoffee} size="1x" />
                )}
            </span>
        </div>
    )
}