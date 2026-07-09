import { useEffect, useState } from "react";
import "../styles/Profile.css";

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    language: ""
  });

  useEffect(() => {

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser(savedUser);
    }

  }, []);

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  const saveProfile = () => {

    localStorage.setItem("user", JSON.stringify(user));

    alert("Profile Updated Successfully 🎉");

    setIsEditing(false);

  };

  return (

    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-image">
          👩
        </div>

        {
          isEditing ? (

            <>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />

              <select
                name="language"
                value={user.language}
                onChange={handleChange}
              >
                <option>English</option>
                <option>Hindi</option>
              </select>

              <button onClick={saveProfile}>
                Save Profile
              </button>

            </>

          ) : (

            <>

              <h2>{user.name}</h2>

              <p>LegalEase Assist User</p>

              <div className="profile-info">

                <div>

                  <h4>Email</h4>

                  <p>{user.email}</p>

                </div>

                <div>

                  <h4>Language</h4>

                  <p>{user.language}</p>

                </div>

                <div>

                  <h4>Account Type</h4>

                  <p>Standard User</p>

                </div>

                <div>

                  <h4>Status</h4>

                  <p>Active</p>

                </div>

              </div>

              <button
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>

            </>

          )

        }

      </div>

    </div>

  );

}

export default Profile;