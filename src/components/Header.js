import React from 'react'

const Header = () => {
    
    let companyName = "TNI"
    // const companyAddress = <p>Bangkok</p>
    // let number = 10

    const showMessage = () => {
        return companyName + ".com"
    }

    return (
        <div>
            <h1>Hello {showMessage()}</h1>
            <hr/>
        </div>
    )
}

export default Header
