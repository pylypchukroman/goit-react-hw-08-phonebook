import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { logIn } from 'redux/auth/authOperations';
import styles from './LoginView.module.css';

export default function LoginView() {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onLogin = useCallback(
    credentials => dispatch(logIn(credentials)),
    [dispatch]
  );

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setMail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        console.log(`Field with name -  ${name} not found`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ email, password });
    setMail('');
    setPassword('');
  };

  return (
    <div className={styles.login_view}>
      <div className={styles.form_background}>
        <h2 className={styles.title}>Login</h2>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <Form.Group size="sm" className="mb-3">
            {' '}
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group size="sm" className="mb-3">
            {' '}
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </Form.Group>

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
