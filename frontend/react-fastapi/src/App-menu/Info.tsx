import "./Info.css";
import { useContext } from "react";
import { ConfigContext } from "../config/ConfigProvider";

function Info() {
  const config = useContext(ConfigContext);
  if (!config) return null;

  const { profileInfo } = config;

  return (
    <section className="profile">
      <div className="profile-photo">
        <img
          src={profileInfo.imgUrl}
          alt={profileInfo.fullName}
        />
      </div>

      <div className="profile-info">
        <h1>{profileInfo.fullName}</h1>

        <ul>
          <li><strong>Residenza:</strong> {profileInfo.residence}</li>
          <li><strong>Nascita:</strong> {profileInfo.birthDate}</li>
          <li><strong>Titolo:</strong> {profileInfo.degree}</li>
        </ul>

        <p>{profileInfo.generalInfo}</p>
      </div>
    </section>
  );
}

export default Info;
