import styles from './styles.module.scss'
import warning from '../../assets/warning.svg'
import { useState } from 'react'
import { useEffect } from 'react'


export function Form() {

    const [email, setEmail] = useState('empty@email.com')
    const [name, setName] = useState('empty')
    const [lastname, setLastName] = useState('empty')
    const [key, setKey] = useState('empty')

    let usuario = email.substring(0, email.indexOf("@"));
    let dominio = email.substring(email.indexOf("@") + 1, email.length);


    useEffect(() => {

        if (!usuario) {
            setEmail('')
        }
        if (!dominio) {
            setEmail('')
        }

    }, [email])



    return (

        <div className={styles.contentForm}>
            <button><span>Try it free 7 days</span> then $20/mo. thereafter</button>

            <form action=''>

                <div>
                    <input onBlur={(event) => setName(event.target.value)}
                        required
                        type="text"
                        className={!name && styles.invalidData}
                        placeholder='First Name' />

                    {!name ? <img src={warning} /> : ''}
                    {!name ? <span>First Name cannot be empty</span> : ''}
                </div>

                <div>
                    <input onBlur={(event) => setLastName(event.target.value)}
                        required
                        type="text"
                        className={!lastname && styles.invalidData}
                        placeholder='Last Name' />
                    {!lastname ? <img src={warning} /> : ''}
                    {!lastname ? <span>Last Name cannot be empty</span> : ''}
                </div>

                <div>
                    <input onBlur={(event) => setEmail(event.target.value)
                    } required type="email"
                        className={!email && styles.invalidData}
                        placeholder='Email Address' />

                    {!email ? <img src={warning} /> : ''}
                    {!email ? <span>Looks like this is not an email</span> : ''}

                </div>

                <div>

                    <input onBlur={(event) => setKey(event.target.value)}
                        required
                        type="password"
                        className={!key && styles.invalidData}
                        placeholder='Password' />

                    {!key ? <img src={warning} /> : ''}
                    {!key ? <span>Password cannot be empty</span> : ''}
                </div>

                <button type='submit'>CLAIM YOUR FREE TRIAL</button>
                <p>By clicking the button, you are agreeing to our <a>Terms and Services</a></p>
            </form>
        </div>


    )
}