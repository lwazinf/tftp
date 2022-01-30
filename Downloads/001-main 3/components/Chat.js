import styles from '../styles/Chat.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'
import { db } from '../firebase'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import OAuth from './OAuth'

import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";

function Chat() {
  const { tray, setTray } = useContext(AppContext);
  const [authType, setAuthType] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData
  // const navigate = useNavigate()
  const auth = getAuth()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (authType == false) {
      try {
        // const auth = getAuth()

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

        const user = userCredential.user

        updateProfile(auth.currentUser, {
          displayName: name,
        })

        const formDataCopy = { ...formData }
        delete formDataCopy.password
        delete formDataCopy.passwordConfirm
        formDataCopy.timestamp = serverTimestamp()

        await setDoc(doc(db, 'users', user.uid), formDataCopy)
        // navigate('/')
      } catch (error) {
        console.log(error)
      }
      setTray(!tray)
    } else {
      try {
        // const auth = getAuth()

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )

        if (userCredential.user) {
          // navigate('/')
          console.log('Login Successful')
        }
      } catch (error) {
        // toast.error('Bad User Credentials')
      }
      setTray(!tray)
    }

  }
  return (
    <div className={styles._blank}>
      <div className={styles._tray} style={{ left: tray ? '405px' : '0px', background: formData.email.includes('@') ? 'crimson' : 'ghostwhite' }} onClick={() => {
        setTray(!tray)
        if (formData.email.includes('@')) {
          const auth = getAuth();
          signOut(auth).then(() => {
            console.log('Sign-out successful.')
          }).catch((error) => {
            // An error happened.
          });
        }
      }}>
        <FontAwesomeIcon icon={formData.email.includes('@') ? faCog : faUser} />
      </div>
      <div className={styles._container} style={{ width: tray ? '402px' : '0px' }}>
        <div className={styles._formCase}>
          <form className={styles._form} onSubmit={onSubmit}>
            <input style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', padding: '0px', margin: '0px', height: authType ? '0px' : '35px', opacity: authType ? '0' : '1', transition: 'all 0.4s', pointerEvents: authType ? 'none' : 'auto' }} type='text' className={styles._textInput} placeholder='Full Name' id='name' onChange={onChange} />

            <input type='email' id='email' className={styles._textInput} style={{ transition: 'all 0.5s', borderTopLeftRadius: authType ? '3px' : '0px', borderTopRightRadius: authType ? '3px' : '0px', padding: '0px', marginTop: authType ? '6px' : '0px' }} placeholder='Email' onChange={onChange} />

            <input type='password' id='password' className={styles._textInput} style={{ transition: 'all 0.5s', borderBottomLeftRadius: authType ? '3px' : '0px', borderBottomRightRadius: authType ? '3px' : '0px', padding: '0px', marginBottom: authType ? '6px' : '0px' }} placeholder='Password' onChange={onChange} />

            <input style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px', padding: '0px', margin: '0px', height: authType ? '0px' : '35px', opacity: authType ? '0' : '1', transition: 'all 0.4s', pointerEvents: authType ? 'none' : 'auto' }} type='password' className={styles._textInput} placeholder='Re-type password' id='passwordConfirm' onChange={onChange} />

            <input type='submit' className={styles._buttonInput} value={authType ? 'Login' : 'Sign Up'} onClick={() => { }} />
            {
              authType
                ?
                <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'row' }}>
                  <p style={{ padding: '0px', margin: '0px' }}>Need an account? </p>
                  <p style={{ fontSize: '13px', padding: '0px', margin: '0px', color: 'blue', marginLeft: '5px', cursor: 'pointer', fontWeight: '500' }} onClick={() => {
                    setAuthType(!authType);

                  }}>Register</p>
                </div>
                :
                <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'row' }}>
                  <p style={{ padding: '0px', margin: '0px' }}>Already have an account? </p>
                  <p style={{ fontSize: '13px', padding: '0px', margin: '0px', color: 'blue', marginLeft: '5px', cursor: 'pointer', fontWeight: '500' }} onClick={() => {
                    setAuthType(!authType);
                  }}>Login</p>
                </div>
            }
            { auth.user }
          </form>
        </div>
      </div >
    </div >
  );
}

export default Chat;


  // function Tile(props) {
  //   const { selectedState, setSelectedState, setPostImage, setPostDP, tray, setPostUser, setPostQuote, setTray } = useContext(AppContext);
  //   const _dp = 'url(' + props.dp + ')'
  //   const _cover = 'url(' + props.cover + ')'
  //   return (
  //     <div className={styles._tile0} style={{ opacity: tray ? '1' : '0', transition: tray ? 'all 0.3s' : 'all 0.3s', marginRight: tray ? '0px' : '400px' }} onClick={() => {
  //       setPostImage(props.cover)
  //       setPostDP(props.dp)
  //       setPostUser(props.userName)
  //       setPostQuote(props.quote)
  //       setTray(!tray)
  //           }}>
  //       <div className={styles._tile}>
  //         <div className={styles._tileLeft}>
  //           <div className={styles._title}>
  //             <div className={styles._displayPic} style={{ background: _dp, backgroundSize: 'cover',
  // backgroundPosition: 'center' }} />
  //             <p style={{ margin: '0px', padding: '0px', color: 'grey', fontWeight: 'bold', fontSize: '14px', marginTop: '12px', wordSpacing: '0px', letterSpacing: '0px' }}>{ props.userName }</p>
  //           </div>
  //           <p style={{ margin: '0px', fontWeight: 'normal', marginTop: '-2px', marginLeft: '5px', fontSize: '13px' }}>{props.quote}</p>
  //           <p style={{ margin: '0px', marginTop: '10px', letterSpacing: '0px', marginLeft: '5px', fontSize: '10px', color: '#b1b1b1' }}>SHOES | October 5, 2022</p>
  //         </div>
  //         <div className={styles._tileRight}>
  //           <div className={styles._cover} style={{ background: _cover, backgroundSize: 'cover',
  // backgroundPosition: 'center' }} />
  //         </div>
  //       </div>
  //       <div className={styles._break} />
  //     </div>
  //   );
  // }