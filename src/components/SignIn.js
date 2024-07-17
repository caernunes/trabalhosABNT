import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Important for accessibility

function SignInModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sign In"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} className="close-button">X</button>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello, {user ? user.username : 'Guest'}</h1>
            {user ? (
              <button onClick={signOut}>Sign out</button>
            ) : (
              <div>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Password:
                  <input type="password" name="password" required />
                </label>
                <button type="submit">Sign In</button>
              </div>
            )}
          </main>
        )}
      </Authenticator>
    </Modal>
  );
}

export default SignInModal;
