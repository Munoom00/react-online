import React from 'react'

const Sidebar = () => {
    
    // let fullname = 'Jhon'
    const [fullname, setFullname] = React.useState('Jhon');

    const [isShow, setIsShow] = React.useState(true);
    
    const changeName = () => {
        // fullname = "Marry"
        setFullname('Marry')
        setIsShow(false)
    }
    
    React.useEffect(() => {
        console.log("sidebar useEffect")
        //  
    })

    React.useEffect(() => {
        console.log("sidebar useEffect one time only")
    },[])

    React.useEffect(() => {
        console.log("sidebar useEffect fullname")
    },[fullname])
    
    return (
        <div>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> : <p>World</p>
            }
            <button onClick={changeName}>Change name</button>
        </div>
    )
}

export default Sidebar
