import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./component/PrivateRoutes";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PrivateRoutes from "./PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            {/* <Route path='/admin' element={<Home />} />
            <Route path='/admin/tags' element={<Tags />} />
            <Route path='/admin/addtags' element={<AddTags />} />
            <Route path='/admin/editnotes/:id' element={<EditNotes />} />
            <Route path='/admin/editnotes/' element={<Home />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/tags' element={<FrontendTags />} />

            <Route path='/notification' element={<NotificationMain />} /> */}
            {/* <Route path="/tags" element={<FrontendTags />} /> */}
          </Route>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
