import { useState } from "react"

const Register = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        displayName: '',
    })

    const { email, password, displayName } = formData

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log({ email, password, displayName })
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='DisplayName'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export { Register }