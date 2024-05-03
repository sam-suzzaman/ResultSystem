import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import photo from "../../assets/home.jpg";
import { useUserContext } from "../../context/Admin/UserContext";

const Hero = () => {
    const { user, userLogout } = useUserContext();
    return (
        <Wrapper>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="placeholder">
                        <img src={photo} alt="job viva photo" />
                    </div>
                    <div className="text-content">
                        <h3 className="fancy">Welcome To</h3>
                        <h1 className="title">
                            Department of Electrical and Electronic Engineering
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Praesentium, illo.
                        </p>
                        <div className="btn-grp">
                            {user?.role === "admin" ||
                            user?.role === "faculty" ? (
                                <Link to="/dashboard/admin/" className="btn">
                                    dashboard
                                </Link>
                            ) : (
                                <Link to="/dashboard/student/" className="btn">
                                    dashboard
                                </Link>
                            )}
                            {/* <Link className="btn" to="/login">
                                Dashboard
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .hero-container {
    }
    .hero-content {
        width: 100%;
    }

    .title {
        font-size: calc(1rem + 1.2vw);
        font-weight: 700;
        letter-spacing: 1.5px;
        color: var(--primary-clr);
    }
    h3.fancy {
        color: var(--primary-clr);
        display: inline-block;
        position: relative;
        margin-bottom: 29px;
    }
    h3.fancy:after {
        content: "";
        width: 37px;
        height: 2px;
        background-color: var(--primary-clr);
        position: absolute;
        bottom: -4px;
        left: 0;
    }
    p {
        font-size: calc(0.8rem + 0.2vw);
        font-weight: 300;
        line-height: 24px;
        text-align: justify;
        margin-top: 2rem;
        margin-bottom: 2.2rem;
    }
    .btn-grp {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        gap: 1rem;
    }

    .btn {
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 400;
        font-size: calc(1rem + 0.2vw);
        color: var(--white-clr);
        background-color: var(--primary-clr);
        border: 1px solid var(--primary-clr);
        padding: calc(5px + 0.15vw) calc(15px + 0.3vw);
        border-radius: 6px;
        transition: all 0.3s ease-in;
    }
    .btn:hover {
        background-color: var(--secondary-clr);
        box-shadow: var(--shadow-1);
    }
    .placeholder {
        display: flex;
        justify-content: start;
        max-width: 500px;
    }
    .placeholder img {
        width: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 768px) {
        .hero-content {
            display: flex;
            flex-direction: column-reverse;
        }
        .text-content {
            margin-top: 1.75rem;
        }
        .placeholder {
            justify-content: center;
        }
        .placeholder img {
            width: 100%;
            max-width: 400px;
            object-fit: cover;
        }
        p {
            margin-top: 1.5rem;
            margin-bottom: 2.2rem;
        }
    }
`;

export default Hero;
