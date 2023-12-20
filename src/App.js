import { useMemo, useState, lazy, Suspense } from "react";
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { Close } from "@mui/icons-material";
import { themeSettings } from "./theme";
import CircleLoading from "./components/global/circleloading";
import { MyContextProvider } from "./components/global/MyContext";
import ThankyouForm from "./view/bookingForm/ThankyouForm";
import ProjectGroup from "./view/project/ProjectGroup";
import Invoice from "./view/Invoice";

const Main = lazy(() => import('./view/main'));
const Home = lazy(() => import('./view/home'));
const AddAssociate = lazy(() => import('./view/associate/addassociate'));
const AssociateReport = lazy(() => import('./view/associate/associatereport'));
const EditAssociate = lazy(() => import('./view/associate/editassociate'));
const AddProject = lazy(() => import('./view/project/addproject'));
const AddBlock = lazy(() => import('./view/project/addblock'));
const AddPlot = lazy(()=> import('./view/project/PlotAdd'));
const PlotReport = lazy(() => import('./view/project/PlotReport'));

const Master = lazy(()=> import('./view/bookingForm/Master'));
const CustomerDetails = lazy(()=> import('./view/bookingForm/CustomerDetails'));
const PaymentDetails = lazy(()=> import('./view/bookingForm/PaymentDetails'));
const PlotDetails = lazy(()=> import('./view/bookingForm/PlotDetails'));
const Nominee = lazy(()=> import('./view/bookingForm/Nominee'));


const Login = lazy(() => import('./view/login/login'));
const Loginotp = lazy(() => import('./view/login/loginotp'));
const PassVerify = lazy(() => import('./view/login/passverify'));
const Forgetotp = lazy(() => import('./view/login/forgetotp'));
const ForgetVerify = lazy(() => import('./view/login/forgetverify'));
const Reset = lazy(() => import('./view/login/reset'));

function App() {

  const [user, setUser] = useState({});
  const theme = useMemo(() => createTheme(themeSettings()));
  const mainurl = process.env.REACT_APP_API_URL;
  const login = useSelector((state) => state.global.login);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          style={{ marginTop: "50px", fontSize: { xs: "12px", md: "14px" } }}
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={4000}
          preventDuplicate={true}
          action={(snackbarId) => (
            <IconButton onClick={() => closeSnackbar(snackbarId)}>
              <Close fontSize="small" sx={{ color: "#fff" }} />
            </IconButton>
          )}
        >
          <MyContextProvider value={{ mainurl, user, setUser }}>

            <BrowserRouter>
              <Routes>
                {/* {!login.payload && <Route path="/*" element={<Navigate to="/login" replace />} />} */}

                <Route exact path="/login" element={<Suspense fallback={<CircleLoading />}><Login /></Suspense>} />
                <Route exact path="/login-otp" element={<Suspense fallback={<CircleLoading />}><Loginotp /></Suspense>} />
                <Route exact path="/pass-verify" element={<Suspense fallback={<CircleLoading />}><PassVerify /></Suspense>} />
                <Route exact path="/forget" element={<Suspense fallback={<CircleLoading />}><Forgetotp /></Suspense>} />
                <Route exact path="/forget-verify" element={<Suspense fallback={<CircleLoading />}><ForgetVerify /></Suspense>} />
                <Route exact path="/reset" element={<Suspense fallback={<CircleLoading />}><Reset /></Suspense>} />
                {/* {login.payload && */}
                  <Route exact path="/" element={<Suspense fallback={<CircleLoading />}><Main /></Suspense>} >
                    <Route exact path="/" element={<Suspense fallback={<CircleLoading />}><Home /></Suspense>} />
                    <Route exact path="/add-associate" element={<Suspense fallback={<CircleLoading />}><AddAssociate /></Suspense>} />
                    <Route exact path="/edit-associate" element={<Suspense fallback={<CircleLoading />}><EditAssociate /></Suspense>} />
                    <Route exact path="/associate-report" element={<Suspense fallback={<CircleLoading />}><AssociateReport /></Suspense>} />
                   
                    <Route exact path="/" element={<Suspense fallback={<CircleLoading/>}><ProjectGroup/></Suspense>}>
                      <Route exact path="/add-project" element={<Suspense fallback={<CircleLoading />}><AddProject /></Suspense>} />
                      <Route exact path="/add-block" element={<Suspense fallback={<CircleLoading />}><AddBlock /></Suspense>} />
                      <Route exact path="/add-plot" element={<Suspense fallback={<CircleLoading />}><AddPlot /></Suspense>} />
                      <Route exact path="/plot-report" element={<Suspense fallback={<CircleLoading />}><PlotReport /></Suspense>} />
                    </Route>


                    <Route exact path="/invoice" element={<Suspense fallback={<CircleLoading />}><Invoice/></Suspense>} />
                    
                    
                    <Route exact path="*" element={<h1></h1>} />
                    <Route exact path="/booking/" element={<Suspense fallback={<CircleLoading />}><Master /></Suspense>} >
                      <Route index element={<Navigate to="form1" replace />} />
                      <Route exact path="form1" element={<Suspense fallback={<CircleLoading />}><CustomerDetails /></Suspense>} />
                      <Route exact path="form2" element={<Suspense fallback={<CircleLoading />}><Nominee /></Suspense>} />
                      <Route exact path="form3" element={<Suspense fallback={<CircleLoading />}><PaymentDetails /></Suspense>} />
                      <Route exact path="form4" element={<Suspense fallback={<CircleLoading />}><PlotDetails /></Suspense>} />
                      <Route exact path="form5" element={<Suspense fallback={<CircleLoading />}><ThankyouForm /></Suspense>} />
                    </Route>

                  </Route>
                {/* } */}
              </Routes>
            </BrowserRouter>
          </MyContextProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
