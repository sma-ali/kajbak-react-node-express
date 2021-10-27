import React, { useContext } from "react";
import { Container, } from 'react-bootstrap'
import NavBar from '../../component/navbar/navbar'
import Footer from "../../component/footer/footer";
import './profile.css';

const Profile = () => {
    const { currentUser } = useContext();
    console.log(currentUser);
    const currentUserEmail = currentUser ? currentUser.email : "";

    return (
        <>
        <NavBar />
        <Container className="content-profile">
            <div>
                <h1>{`Bonjour, ${currentUserEmail} !`}</h1>
            </div>
        </Container>
        <Footer />
        </>

    )
};

export default Profile;

