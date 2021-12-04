import React from 'react'
import useHover from '../hooks/useHover'
import { logo,title } from '../styles/style'
const Logo = () => {

    // const logoImage = "./logo192.png"

    const [hover, mouseOver, mouseOut] = useHover()

    const logoImage = {
        url: './logo192.png'
    }
    return (
        <div>
            <h3 style={title}>Logo</h3>
            {
                hover ? <h3>Logo</h3> : null
            }
            {/* <img src={logoImage} width="100" alt="logo" /> */}
            {/* <img src={logoImage.url} width="100" alt="logo" /> */}
            <img onMouseOver={mouseOver} onMouseOut={mouseOut} style={logo}src={logoImage.url} width="100" alt="logo" />
        </div>
    )
}
export default Logo