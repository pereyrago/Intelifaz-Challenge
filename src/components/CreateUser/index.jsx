import React from "react";
import "./index.css";

const CreateUser = ({ state, inputData, create }) => {
  return (
    <>
      <div className="createCont">
        <div className="formCont">
          <p className="title">Crear Usuario</p>
          <form className="form" onSubmit={(e) => create(e)}>
            <div className="inputCont">
              <label className="label">{state.firstName && "Nombre"}</label>
              <input
                onChange={(e) => inputData(e)}
                className="input"
                value={state.firstName}
                type="text"
                placeholder="Usuario"
                name="firstName"
              />
            </div>
            <div className="inputCont">
              <label className="label">{state.lastName && "Apellido"}</label>
              <input
                onChange={(e) => inputData(e)}
                className="input"
                value={state.lastName}
                type="text"
                placeholder="Apellido"
                name="lastName"
              />
            </div>
            <div className="inputCont">
              <label className="label">{state.email && "Mail"}</label>
              <input
                onChange={(e) => inputData(e)}
                className="input"
                value={state.email}
                placeholder="Mail"
                type="email"
                name="email"
              />
            </div>
            <div className="inputCont">
              <label className="label">{state.tel && "Teléfono"}</label>
              <input
                onChange={(e) => inputData(e)}
                className="input"
                value={state.tel}
                type="text"
                placeholder="Telefono"
                name="tel"
              />
            </div>
            <div className="inputCont">
              <label className="label">{state.password && "Contraseña"}</label>
              <input
                onChange={(e) => inputData(e)}
                className="input"
                value={state.password}
                placeholder="Contraseña"
                type="password"
                name="password"
              />
            </div>
            <div className="inputCont">
              <label className="label">
                {state.password &&
                  !state.confirmPassword &&
                  "Las contraseñas deben coincidir"}
              </label>
              <input
                className="input"
                onChange={(e) => inputData(e)}
                type="password"
                placeholder="Confirme contraseña"
                name="confirmPassword"
              />
            </div>
            <input
              className="file"
              type="file"
              name="file"
              onChange={(e) => inputData(e)}
            />
            <div className="contBtn">
              <div className="inputBtn">
                <input
                  className="boton"
                  onChange={(e) => inputData(e)}
                  type="submit"
                  value="Crear Usuario"
                />
              </div>
              <div className="inputBtn">
                <button
                  className="boton"
                  name="change"
                  onClick={(e) => inputData(e)}
                >
                  Ir a lista de usuarios
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateUser;
