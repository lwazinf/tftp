import styles from '../styles/Chat.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

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
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      toast.error('Something went wrong with registration')
    }
  }
  return (
    <div className={styles._blank}>
      <div className={styles._tray} style={{ left: tray ? '405px' : '0px' }} onClick={() => {
        setTray(!tray)
      }}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className={styles._container} style={{ width: tray ? '402px' : '0px' }}>
        <div className={styles._formCase}>
          {/* {
            authType
              ?
              <p style={{ fontSize: '23px', padding: '0px', margin: '0px', color: 'black', marginLeft: '5px', marginBottom: '10px', fontWeight: '700' }}>Login</p>
              :
              <p style={{ fontSize: '23px', padding: '0px', margin: '0px', color: 'black', marginLeft: '5px', marginBottom: '10px', fontWeight: '700' }}>Sign Up</p>
          } */}
          <form className={styles._form}>
            <input type='email' className={styles._textInput} placeholder='Email' onChange={() => { }} />
            <input type='password' className={styles._textInput} placeholder='Password' onChange={() => { }} />

            <input style={{ padding: '0px', margin: '0px', height: authType ? '0px' : '35px', opacity: authType ? '0' : '1', transition: 'all 0.4s', pointerEvents: authType ? 'none' : 'auto' }} type='password' className={styles._textInput} placeholder='Re-type password' onChange={() => { }} />

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