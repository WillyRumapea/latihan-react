import { useState } from "react";
import Profile from "./Profile";
import ProfileAddres from "./ProfileAddres";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState("willea");

  return (
    <>
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <ProfileForm name={name} setName={setName} />
        <Profile />
        <ProfileAddres />
      </ProfileContext.Provider>
    </>
  );
}
