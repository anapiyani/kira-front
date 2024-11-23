"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const user = "admin";
const password = "admin";

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	

	const handleRegiser = () => {
		console.log(username, email, password);
		redirect('/login');
	}

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='w-96 h-96 bg-slate-400 mt-32 rounded p-11'>
				<h1 className='text-white text-2xl w-full justify-center text-center'>REGISTER</h1>
				<p className='p-1 text-white'>Enter your usernamne and password and email down below</p>
				<div className='flex flex-col gap-2 mt-3'>
					<Input onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='text-xl text-white placeholder:text-white' />
					<Input onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='text-xl text-white placeholder:text-white' />
					<Input onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='text-xl text-white placeholder:text-white' type='password' />
					<Button onClick={handleRegiser} className='flex text-white text-xl hover:bg-slate-200 hover:text-slate-500'>Register</Button>
				</div>
				<div className='flex mt-4 w-full text-center justify-center'>
					<Link className='text-white underline' href='/login'>You have account? login here</Link>
				</div>
			</div>
		</div>
	)
}

export default Register;