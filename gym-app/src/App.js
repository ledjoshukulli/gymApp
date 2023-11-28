import React from 'react';
import Navbar from '../src/components/reusable-components/Navbar.tsx';
import LoginForm from './LoginForm.tsx';
import Cover2 from './materials/cover2.jpg';

const appStyle = {
  backgroundImage: `url(${Cover2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column', // Ensure content stacks vertically
  alignItems: 'center',
};

const formContainerStyle = {
  // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Example background color for the form container
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px', // Adjust the spacing between navbar and form
};

function App() {
  return (
  <div>

 <Navbar />
    <div style={appStyle}>
      
      <div style={formContainerStyle}>
        <LoginForm />
      </div>
    </div> 
    </div>
  );
}

export default App;
