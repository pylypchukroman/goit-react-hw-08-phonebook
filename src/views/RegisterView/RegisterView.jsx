import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { register } from 'redux/auth/authOperations';
import styles from './Register.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onRegister = useCallback(
    credentials => dispatch(register(credentials)),
    [dispatch]
  );

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

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

    onRegister({ name, email, password });
    setName('');
    setMail('');
    setPassword('');
  };

  return (
    <div className={styles.register_view}>
      <div className="form-background">
        <h2 className={styles.title}>Sign up</h2>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <Form.Group size="sm" className="mb-3">
            {' '}
            <Form.Control
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </Form.Group>

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

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
