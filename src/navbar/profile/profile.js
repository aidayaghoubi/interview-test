import img from "../../assets/1.png";
import "./profile.scss"

const Profile = () => {


  return (
    <div className="profile">
      <span>
        <img src={img} alt="profile" />
      </span>
      <div>
        <p>Omer E</p>
        <span>Premium user</span>
      </div>
    </div>
  );
};
export default Profile;
