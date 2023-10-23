import React, {useState} from 'react'
import './Register.css';
import { Link ,useNavigate} from 'react-router-dom';

const RegisterForm = () => {

    let [values, setValues] = useState({
        simpleName:'',
        userName: '',
        email:'',
        mobile:'',
        checkBox:'',
    })
    
    const [ucheckBox, setUcheckBox] = useState(false);
    
    let [errorText, setErrorText ] = useState(false);
    
    const changeHandler = (e) => {
        let {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        setErrorText(false)
    }
    
    const checkboxHandler = (e) => {
      setUcheckBox(e.target.checked);
      setErrorText(false);
    };
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    
     let sName = e.target.simpleName.value;
     let uName = e.target.userName.value;
     let userEmail = e.target.email.value;
     let userMobile = e.target.mobile.value;
    let ucheckBox = e.target.checkBox.checked;
    
    
     if(sName===0||uName===0||userEmail===0||userMobile===0||!ucheckBox){
      setErrorText(true)
      return
     }if(userMobile.length<10){
      setErrorText(true)
      return
     }
    else{
     setValues({
      simpleName:'',
      userName:'',
      email:'',
      mobile:'',
     })
     setUcheckBox(false); 
     setErrorText(false);

    window.localStorage.setItem('values',JSON.stringify(values))
    navigate('/Genres')
    }
    };
  return (
    <>
    <div className='form'>
    <div className='heading'>
    <span className='mainHeading'>Super App</span><br/>
    <span className='subHeading'>Create your new account</span>
    </div>
    <div>
   
    </div>

    <form
      onSubmit={handleSubmit}
      >
      <div className='inputField'>
      <input
        className='typeInput'
        type='text'
        name='simpleName'
        placeholder='Name'
        value={values.simpleName}
        onChange={changeHandler}
        />
        {errorText&&values.simpleName.length<=0?<p className='errorMessage'>This field is required</p>:''}
      </div>
     <div className='inputField'>
     <input
          className='typeInput'
         type='text'
            name='userName'
            placeholder='Username'
            value={values.userName}
            onChange={changeHandler}
            />
       {errorText&&values.userName.length<=0?<p className='errorMessage'>This field is required</p>:''}
     </div>
       <div className='inputField'>
       <input
              className='typeInput'
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={changeHandler}
            />
            {errorText&&values.email.length<=0?<p className='errorMessage'>This field is required</p>:''}
       </div>
            <div className='inputField'>
            <input
             className='typeInput'
            type='text'
            name='mobile'
            placeholder='Mobile'
            pattern='[0-9]*'
            value={values.mobile}
            onChange={changeHandler}
            onInput={(e) => (e.target.value = e.target.value.replace(/[^\d]/, ''))}
            maxLength={10}
            />
            {errorText&&values.mobile.length<10&&values.mobile.length>0?<p className='errorMessage'>please enter 10 digit number</p>:''}
            {errorText&&values.mobile.length<=0?<p className='errorMessage'>This field is required</p>:''}
            </div>
          <div className='checkboxField'>
          <input
            type='checkbox'
            name='checkBox'
            checked={ucheckBox}
            onChange={checkboxHandler}
            />
            <span>Share my registration data with super app</span>
            {errorText&&!ucheckBox?<p className='errorMessage'>This field is required</p>:''}
          </div>    
         <div className='buttonField'>
         <button className='signUp'>SIGN UP</button>
         </div>
          <div className='terms'>
            <p>
            By clicking on Sign up. you agree to Superapp <Link style={{color:'#72DB73'}}>Terms and <br/>Conditions of Use</Link>
            </p>
            <p>
          To learn more about how Superapp collects, uses, shares, <br/> protects your personal data please head Superapp<Link style={{color:'#72DB73'}}>Privacy<br/>Policy</Link>
            </p>
          </div>
      </form>
    </div> 
    </>
  )
}

export default RegisterForm
