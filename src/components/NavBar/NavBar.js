import React, {useContext} from 'react';
import {Button, Navbar} from "react-bootstrap";
import {Context} from "../../context";

const NavBar = () => {

    const {handleShow} = useContext(Context)
    return (
        <Navbar className="p-3 w-100 " style={{background:"rgba(255,255,255,0.5)"}}>
            <Button
                type="button"
                className={"text-black-50 border-0 bg-light"}
                style={{background: '#ebecf0'}}
                onClick={handleShow}
            >
                Add task
            </Button>
        </Navbar>
    );
};

export default NavBar;