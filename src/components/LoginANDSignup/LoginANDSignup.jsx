import React from 'react';
import styles from './LoginANDSignup.module.css'

function LoginANDSignup() {

  return (
    <body>
    <div className={styles.login_form_container}>
    <div className={styles.login_form}>
      <h2>Login</h2>
      <div className={styles.input_group}>
        <i class="fa fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          className={styles.input_text}
          autocomplete="off"
        />
      </div>
      <div className={styles.input_group}>
        <i class="fa fa-unlock-alt"></i>
        <input
          type="password"
          placeholder="Password"
          className={styles.input_text}
          autocomplete="off"
        />
      </div>
      <div className={styles.button_group} id="login_button">
        <a>Submit</a>
      </div>
      <div className={styles.fotter}>
        <a>Forgot Password ?</a>
        <a>SingUp</a>
      </div>
    </div>
  </div>
      
    </body>

  )
}

export default LoginANDSignup;