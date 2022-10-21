import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import FullScreenLoader from "./Components/Layout/FullScreenLoader";
import { getToken } from "./helper/SessionHelper";
import CanceledPage from "./Pages/CanceledPage";
import CompletedPage from "./Pages/CompletedPage";
import CreatePasswordPage from "./Pages/CreatePasswordPage";
import CreateTaskPage from "./Pages/CreateTaskPage";
import DashboardPage from "./Pages/DashboardPage";
import InprogressPage from "./Pages/InprogressPage";
import LoginPage from "./Pages/LoginPage";
import NewTaskPage from "./Pages/NewTaskPage";
import NotFoundPage from "./Pages/NotFoundPage";
import RegisterPage from "./Pages/RegisterPage";
import SendOTPPage from "./Pages/SendOTPPage";
import SettingPage from "./Pages/SettingPage";
import VerifyOTPPage from "./Pages/VerifyOTPPage";

function App() {
  console.log(getToken())
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="dashboard" element={<DashboardPage />} />}
            />

            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/newTask" element={<NewTaskPage />} />
            <Route path="/createTask" element={<CreateTaskPage />} />
            <Route path="/inprogress" element={<InprogressPage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="/canceled" element={<CanceledPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
        <FullScreenLoader />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/sendOTP" element={<SendOTPPage />} />
            <Route path="/verifyOTP" element={<VerifyOTPPage />} />
            <Route path="/createPassword" element={<CreatePasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
        <FullScreenLoader />
      </Fragment>
    );
  }
}

export default App;
