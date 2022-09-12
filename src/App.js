import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Stack} from "react-bootstrap";
import Main from "./components/Main/Main";
import {useState} from "react";
import CustomModal from "./components/CustomModal/CustomModal";
import {Context} from "./context";

const {background} = {background: "linear-gradient(35deg, rgb(56 64 255), rgb(248 94 230)"}
let c = 0;
function App() {

    console.log(`Render count: ${c++}`)

    const [isShow, setShow] = useState(false);

    const [initialValues , setInitialValues] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const value = {
        handleClose,
        handleShow,
        isShow,
        setInitialValues,
        initialValues
    }

  return (
    <Stack direction={'vertical'} className={"ps-5 pt-5 min-vh-100"} style={{background}}>
        <Context.Provider value={value}>
            <NavBar/>
            <Main/>
        </Context.Provider>
        <CustomModal/>
    </Stack>
  );
}

export default App;
