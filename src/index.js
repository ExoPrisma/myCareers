import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Signin from './pages/Signin'; 
import Login from './pages/Login';
import Postings from './pages/Postings';
import Events from './pages/Events';
import MyProfile from './pages/myProfile'
import NoPage from './pages/NoPage';
import UserSignInSuccess from './pages/UserSignInSuccess';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login/>}></Route>
          <Route path="signin" element={<Signin/>}></Route>
          <Route index element={<Home />} />
          <Route path="usersigninsuccess" element={<UserSigninSuccess />} />
          <Route path="postings+applications" element={<Postings />} />
          <Route path="events" element={<Events />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="*" element={<NoPage />} />
      </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
