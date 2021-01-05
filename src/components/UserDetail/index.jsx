import React from "react";

import "./index.css";

const UserDetail = ({ user, closeUser }) => {
  return (
    <div className="userCont">
      <div className="cardCont">
        <div className="buttonCont">
          <button className="button" onClick={() => closeUser()}>
            x
          </button>
        </div>
        <img
          className="userImg"
          src={
            !user.file
              ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Favatar-375-456327.png&f=1&nofb=1"
              : typeof user.file === "string"
              ? user.file
              : URL.createObjectURL(user.file)
          }
        />
        <p>{`${user.firstName} ${user.lastName}`}</p>
        <p>{user.email}</p>
        <p>{user.tel}</p>
      </div>
    </div>
  );
};
export default UserDetail;
