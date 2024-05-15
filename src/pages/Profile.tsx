import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useToken } from "./auth/useToken";
import { useUser } from "./auth/useUser";
import { UserContext } from "../useContext/context";

const Profile = () => {
  const user = useUser();
  const [token, setToken] = useToken();
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const { user_id, username, email, info } = user;

  console.log(loggedIn);

  const [favoriteFood, setFavoriteFood] = useState(info.favoriteFood || "");
  const [hairColor, setHairColor] = useState(info.hairColor || "");
  const [bio, setBio] = useState(info.bio || "");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (showSuccessMessage || showErrorMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      }, 3000);
    }
    if (loggedIn) {
      setLoggedIn(true);
    }
  }, [showSuccessMessage, showErrorMessage, setLoggedIn]);

  const saveChanges = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/api/users/${user_id}`,
        {
          bio,
          hairColor,
          favoriteFood,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { token: newToken } = response.data;
      setToken(newToken);
      setShowSuccessMessage(true);
    } catch (error) {
      setShowErrorMessage(true);
    }
  };

  const resetValues = () => {
    setFavoriteFood(info.favoriteFood);
    setHairColor(info.hairColor);
    setBio(info.bio);
  };

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
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                    Image
                  </text>
                </svg>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{username}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="mb-5 ml-auto mr-0" id="form" onSubmit={saveChanges}>
            <div className="form-group">
              <label>
                Bio:
                <input
                  className="form-control"
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Hair Color:
                <input
                  className="form-control"
                  onChange={(e) => setHairColor(e.target.value)}
                  value={hairColor}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Favorite Food:
                <input
                  className="form-control"
                  onChange={(e) => setFavoriteFood(e.target.value)}
                  value={favoriteFood}
                />
              </label>
            </div>

            <hr />
            <button className="btn btn-primary" type="submit">
              Save Changes
            </button>
            <button className="btn btn-primary" onClick={resetValues}>
              Reset Values
            </button>
          </form>
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
