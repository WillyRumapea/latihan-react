import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddres() {
  const profile = useContext(ProfileContext);
  return (
    <div>
      <h2>Profile Addres</h2>
      <p>Alamat {profile}</p>
    </div>
  );
}
