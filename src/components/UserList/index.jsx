import React from "react";
import UserDetail from "../UserDetail";
import "./index.css";

const UserList = ({ state, setUser, closeUser, inputData, delUser }) => {
  return (
    <div className="listCont">
      <div className="contTable">
        <div className="titulo">
          <p>Lista de Usuarios</p>
        </div>
        {state.users.map((user) => (
          <div>
            <div className="user" key={user.id}>
              <p>{`${user.firstName} ${user.lastName}`}</p>
              <button onClick={() => delUser(user.id)} className="btnDel">
                Borrar Usuario
              </button>
              <button className="btn" onClick={() => setUser(user)}>
                Ver perfil de usuario
              </button>
            </div>
            <div className="border" />
          </div>
        ))}
        {state.selectedUser && (
          <UserDetail user={state.selectedUser} closeUser={closeUser} />
        )}
        <button
          className="btnToCreate"
          name="change"
          onClick={(e) => inputData(e)}
        >
          Ir a crear usuario
        </button>
      </div>
    </div>
  );
};

export default UserList;
