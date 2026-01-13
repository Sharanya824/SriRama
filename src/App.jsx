import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import MainHomePage from './Screens/Home/HomePage';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import Products from './Screens/Products';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainHomePage />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
    </Router >
  );
}
export default App;
