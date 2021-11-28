import React from 'react'
import Button from '../styles/button/Button.js'
import Title from '../styles/title/Title'
import Logo from './Logo'

const Header = () => {
    
    let companyName = "TNI"
    // const companyAddress = <p>Bangkok</p>
    // let number = 10
    const showMassage = () => {
        return companyName + ".com"
    }
    const isLogin = true;
    const showMe = () => {
        alert('Hello react')
    }
    const products = [
        {id: 1, name: "Coke"},
        {id: 2, name: "Pepsi"}
    ]

    const keyword = 'correct'
    return (
        <div>
            <Title>Project React</Title>
            <h1>Hello {showMassage()}</h1>
            <br />
             {
                isLogin === true ? (
                    <>
                    <p>Welcome</p>
                    <p>Student</p>
                    </>
                ) : (
                    <>
                        <p>Welcome</p>
                        <p>Teacher</p>
                    </>
                )
            }
            {isLogin ? <Logo /> : <p>Unlock</p> }

            <button onClick={showMe}>Click me</button>

            <Button onClick={showMe} keyword={keyword}> Click me</Button>
            <ul>
                {

                    products.map((product,index) => {
                        return (<li key={index}>{index+1}{product.name}</li>)
                    })
                }
                </ul>
            
        </div>
    )
}
export default Header