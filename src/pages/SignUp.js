import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	MDBContainer,
	MDBInput,
	MDBCheckbox,
	MDBBtn,
	MDBIcon
  }
  from 'mdb-react-ui-kit';
const SignUp = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPasssword] = useState("")
	const navigate = useNavigate()

	const submitData = () => {
		// console.log({"name":name,"email":email,"password":password,"confirm_password":confirmPassword})
		fetch("http://api.mern.co.in/api/v1/signup", {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ "name": name, "email": email, "password": password, "confirm_password": confirmPassword })
		}).then((res) => {
			return res.json()
		}).then((resp) => {
			console.log(resp)
			localStorage.setItem("Token", resp.data.accessToken)
			navigate("/dashboard")
		}).catch((err) => {
			console.log("Error", err)
		})
	}

	return (
		<div>
			<section className="vh-100" style={{ "background-color": "#eee" }}>
				<div className="container h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-lg-12 col-xl-11">
							<div className="card text-black" style={{ "border-radius": "25px" }}>
								<div className="card-body p-md-5">
									<div className="row justify-content-center">
										<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

											<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

											<MDBContainer className="p-3 my-5 d-flex flex-column w-60">

												<MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' name={name} onChange={(e) => { setName(e.target.value) }} />
												<MDBInput wrapperClass='mb-4' label='Email address' id='form2' type='email' name={email} onChange={(e) => { setEmail(e.target.value) }} />
												<MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password' name={password} onChange={(e) => { setPassword(e.target.value) }} />
												<MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type='password' name={confirmPassword} onChange={(e) => { setConfirmPasssword(e.target.value) }} />

												<MDBBtn className="mb-4" onClick={submitData}>Sign Up</MDBBtn>

											</MDBContainer>

										</div>
										<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

											<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
												className="img-fluid" alt="Sample image" />

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SignUp
