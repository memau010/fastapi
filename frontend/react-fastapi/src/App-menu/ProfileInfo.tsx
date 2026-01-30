import React from "react";

interface ProfileInfoProps {
  imgUrl: string;
  fullName: string;
  residence: string;
  degree: string;
  birthDate: string;
  generalInfo: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  imgUrl,
  fullName,
  residence,
  degree,
  birthDate,
  generalInfo,
}) => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={imgUrl} alt={`${fullName} profile`} />
      </div>

      <div className="profile-details">
        <h2>{fullName}</h2>
        <ul>
          <li><strong>Residenza:</strong> {residence}</li>
          <li><strong>Titolo di studio:</strong> {degree}</li>
          <li><strong>Data di nascita:</strong> {birthDate}</li>
          <li><strong>Info:</strong> {generalInfo}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
