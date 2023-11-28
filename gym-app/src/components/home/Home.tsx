import React from 'react'
import useAuthStore from '../../context/index.js';
import Cover2 from "../../materials/cover2.jpg";
import Navbar from '../reusable-components/Navbar.tsx';
import LoginForm from '../../LoginForm.tsx';

const appStyle = {
    backgroundImage: `url(${Cover2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  
  const formContainerStyle = {
    padding: "20px",
    borderRadius: "8px",
    marginTop: "20px",
  };
  
  const mockUser = {
    username: 'ledjoshukulli',
    password: 'Ledjo1999$',
  };

const Home = () => {
    const { isLoggedIn } = useAuthStore();
  return (
   <div>
      {isLoggedIn && <Navbar/>}
      <div style={appStyle}>
        <div style={formContainerStyle}>
          <LoginForm mockUser={mockUser} />
        </div>
      </div>
    </div>
  );
  
}

export default Home