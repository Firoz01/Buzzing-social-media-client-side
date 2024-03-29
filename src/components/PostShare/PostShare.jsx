import React from "react";
import defaultFemaleProfileImage from "../../img/defaultFemaleProfileImage.jpg";
import defaultMaleProfilePicture from "../../img/defaultMaleProfileImage.jpg";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { uploadPost } from "../../Action/uploadAction";

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);

  const [image, setImage] = useState(null);

  const imageRef = useRef();

  const desc = useRef();

  const { user } = useSelector((state) => state.authReducer.authData);

  const dispatch = useDispatch();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostWithOutImage = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      data.append("image", image);
      data.append("userId", user._id);
      data.append("desc", desc.current.value);
      console.log("postShare:",data);

      try {
        dispatch(uploadPost(data));
        reset();
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(uploadPost(newPostWithOutImage));
      reset();
    }
  };

  return (
    <div className="PostShare">
      <img
        src={
          user?.profilePicture ? user?.profilePicture : defaultFemaleProfileImage
        }
        alt=""
      />
      <div>
        <input type="text" placeholder="What's happening" ref={desc} required />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button
            className="button ps-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
