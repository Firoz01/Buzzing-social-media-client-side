import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../../Action/uploadAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let userData = formData;

    const {
      _id,
      firstName,
      lastName,
      worksAt,
      livesIn,
      relationship,
      country,
    } = userData;

    const updatedata = {
      _id: _id,
      firstName: firstName,
      lastName: lastName,
      worksAt: worksAt,
      livesIn: livesIn,
      relationship: relationship,
      country: country,
    };

    if (profileImage && coverImage) {
      const data = new FormData();
      data.append("profileImage", profileImage);
      data.append("coverImage", coverImage);
      data.append("_id", _id);
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("worksAt", worksAt);
      data.append("livesIn", livesIn);
      data.append("relationship", relationship);
      data.append("country", country);

      try {
        dispatch(updateUser(params.id, data));
        setModalOpened(false);
      } catch (error) {
        console.log(error);
      }
    } else if (profileImage) {
      const data = new FormData();
      data.append("profileImage", profileImage);
      data.append("_id", _id);
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("worksAt", worksAt);
      data.append("livesIn", livesIn);
      data.append("relationship", relationship);
      data.append("country", country);

      try {
        dispatch(updateUser(params.id, data));
        setModalOpened(false);
      } catch (error) {
        console.log(error);
      }
    } else if (coverImage) {
      const data = new FormData();
      data.append("coverImage", coverImage);
      data.append("_id", _id);
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("worksAt", worksAt);
      data.append("livesIn", livesIn);
      data.append("relationship", relationship);
      data.append("country", country);

      try {
        dispatch(updateUser(params.id, data));
        setModalOpened(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(updateUser(params.id, updatedata));
        setModalOpened(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
          />
          <input
            type="text"
            className="infoInput"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="Lives In"
            onChange={handleChange}
            value={formData.livesIn}
          />
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="relationship"
            placeholder="Relationship Status"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <button className="button infoButton" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
