import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login, { loggedUserEmail } from './screens/login';
import SignUp from './screens/signup';
import InBox from './screens/InBox';
import Header from './component/header';
import NavBar from './component/navBar';
import Groups from './screens/groups';
import Target from './screens/target';
import Reals from './screens/reels';


function App () {

  return (
      <Routes>
        <Route path='/login' element={
          <div className="h-[100vh] w-[100vw] md:bg-[#003f52b7] font-serif">
            <Login />
          </div>
        } />
      <Route path='/' element={
          <div className="h-[100vh] w-[100vw] md:bg-[#003f52b7] font-serif">
            <SignUp />
          </div>
      } />
      <Route path={`/InBox`} element={
        <div className="h-[100vh] w-[100vw] md:bg-[#003f52b7] font-serif">
          <Header loggeduser={loggedUserEmail} />
            <InBox />
          <NavBar />
          </div>
      } />
      <Route path='/groups' element={
        <div className="h-[100vh] w-[100vw] md:bg-[#003f52b7] font-serif">
          <Header loggeduser={loggedUserEmail} />
            <Groups />
          <NavBar />
          </div>
      } />
      <Route path='/target' element={
        <div className="h-[100vh] w-[100vw] md:bg-[#003f52b7] font-serif">
            <Target />
          <NavBar />
          </div>
      } />
      <Route path='/reels' element={
        <div className="h-[100vh] w-[100vw] md:bg-[#003f52b7] font-serif">
            <Reals />
          <NavBar />
          </div>
      } />
      </Routes>
  );
}

export default App;
