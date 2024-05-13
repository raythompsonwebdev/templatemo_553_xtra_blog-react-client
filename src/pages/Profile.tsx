import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "./auth/useToken";
import { useUser } from "./auth/useUser";

const Profile = () => {
  const user = useUser();
  const [token, setToken] = useToken();

  // const { id, email, info } = user;
  const { id, email } = user;

  const info = {
    hairColor: "beeef",
    favoriteFood: "beeef",
    bio: "beeef",
  };

  const navigate = useNavigate();

  // These states are bound to the values of the text inputs
  // on the page (see JSX below).
  const [favoriteFood, setFavoriteFood] = useState(info.favoriteFood || "");
  const [hairColor, setHairColor] = useState(info.hairColor || "");
  const [bio, setBio] = useState(info.bio || "");

  // These state variables control whether or not we show
  // the success and error message sections after making
  // a network request (see JSX below).
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // This useEffect hook automatically hides the
  // success and error messages after 3 seconds when they're shown.
  // Just a little user interface improvement.
  useEffect(() => {
    if (showSuccessMessage || showErrorMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showSuccessMessage, showErrorMessage]);

  const saveChanges = async () => {
    try {
      const response = await axios.put(
        `/api/users/${id}`,
        {
          favoriteFood,
          hairColor,
          bio,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { token: newToken } = response.data;
      setToken(newToken);
      setShowSuccessMessage(true);
    } catch (error) {
      setShowErrorMessage(true);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  const resetValues = () => {
    setFavoriteFood(info.favoriteFood);
    setHairColor(info.hairColor);
    setBio(info.bio);
  };

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     const response = await fetch("/api/profile", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const result = await response.json();

  //     setLoggedIn(false);
  //     setMessage(result.message);
  //     setUserName(result.token?.username);
  //     setUserEmail(result.token?.email);
  //   };

  //   fetchUserProfile();
  // }, [setLoggedIn]);

  // // eslint-disable-next-line no-console
  // console.log(message, loggedIn);

  return (
    <main className="tm-main">
      <div className="row tm-row">
        <div className="col-12">
          <h1>Info for {email}</h1>
          {showSuccessMessage && (
            <div className="success">Successfully saved user data!</div>
          )}
          {showErrorMessage && (
            <div className="fail">
              Uh oh... something went wrong and we couldn't save changes
            </div>
          )}
          <label>
            Favorite Food:
            <input
              onChange={(e) => setFavoriteFood(e.target.value)}
              value={favoriteFood}
            />
          </label>
          <label>
            Hair Color:
            <input
              onChange={(e) => setHairColor(e.target.value)}
              value={hairColor}
            />
          </label>
          <label>
            Bio:
            <input onChange={(e) => setBio(e.target.value)} value={bio} />
          </label>
          <hr />
          <button onClick={saveChanges}>Save Changes</button>
          <button onClick={resetValues}>Reset Values</button>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
      <footer className="row tm-row">
        <div className="col-md-6 col-12 tm-color-gray">
          Design:{" "}
          <a
            rel="nofollow"
            target="_parent"
            href="https://templatemo.com"
            className="tm-external-link"
          >
            TemplateMo
          </a>
        </div>
        <div className="col-md-6 col-12 tm-color-gray tm-copyright">
          Copyright 2020 Xtra Blog Company Co. Ltd.
        </div>
      </footer>
    </main>
  );
};

export default Profile;
