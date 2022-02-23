import React, { useState } from 'react';

export default function PasswordReset() {
    const [email, setEmail] = useState('');
    const onChange = (e) => {
        setEmail(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log('send activation link to ', email)
    }
    return <div>
        <form>
            <input type='email' value={email} onChange={(e) => onChange(e)} />
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit' onClick={(e) => submitForm(e)}>Send reset link</button>
        </form>
    </div>
}

export function NewPassword() {
    const [newPass, setNewPass] = useState('');
    const onChange = (e) => {
        setNewPass(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('new password for user is ', newPass);
    }

    return <div>
        <form>
            <input type='password' placeholder='New password' value={newPass} onChange={(e) => onChange(e)} />
            <input type='password' placeholder='Confirm password' value={newPass} onChange={(e) => onChange(e)} />

            <button type='submit' onClick={(e) => onSubmit(e)}>Reset Password</button>
        </form>
    </div>
}