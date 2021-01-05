import React, { useState } from "react";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";

function App() {
  const [state, setState] = useState({
    users: [
      {
        firstName: "Gabriel",
        lastName: "Pereyra",
        email: "gabrielpereyra@mail.com",
        tel: "1150308080",
        password: "asdasdasd",
        id: "1",
      },
      {
        firstName: "Hank",
        lastName: "Graber",
        email: "Hank@intelifaz.com",
        tel: "1150308080",
        password: "asdasdasd",
        id: "2",
        file:
          "https://media-exp1.licdn.com/dms/image/C4E03AQH8rFCoOn5amg/profile-displayphoto-shrink_800_800/0/1570539845294?e=1615420800&v=beta&t=NSOG1Z3nFfs7KvttAib3wE5FpbrQLP1McFm8OxqolFo",
      },
      {
        firstName: "Cecilia",
        lastName: "Diaz",
        email: "CDiaz@intelifaz.com",
        tel: "11256385",
        password: "asdasdasd",
        id: "3",
        file:
          "https://media-exp1.licdn.com/dms/image/C4E03AQH6ZOwjZGP9mw/profile-displayphoto-shrink_800_800/0/1603374802239?e=1615420800&v=beta&t=Erz96O3tldgaMeVKh-96jJfP_1Sb6IZHf03GZArKwjw",
      },
      {
        firstName: "Alan",
        lastName: "Sujovolsky",
        email: "AlanS@intelifaz.com",
        tel: "11256385",
        password: "asdasdasd",
        id: "4",
        file:
          "https://media-exp1.licdn.com/dms/image/C4E03AQE7BnzFOfGlWQ/profile-displayphoto-shrink_200_200/0/1560993472148?e=1615420800&v=beta&t=ClxvNltFWUsjrG3KrbYJbzpZ0tyJpg0aZUCscfs-fx0",
      },
      {
        firstName: "Sergio",
        lastName: "Farías",
        email: "SergioF@intelifaz.com",
        tel: "11256385",
        password: "asdasdasd",
        id: "5",
        file:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFZJvWkjv-PtQ/profile-displayphoto-shrink_800_800/0/1548269937254?e=1615420800&v=beta&t=9WMPwfDfVzc1XGtWuEdghmBX5zCYg6Xj-hrhtb3-zKM",
      },
      {
        firstName: "Pablo",
        lastName: "Herrera",
        email: "PabloH@intelifaz.com",
        tel: "11256385",
        password: "asdasdasd",
        id: "6",
        file:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGrBDgOYdH43Q/profile-displayphoto-shrink_200_200/0/1601338585523?e=1615420800&v=beta&t=Ec-JBjbWie5ENWBvMg0tkUEvQ1wY4hp11Z9lFYMDGuc",
      },
      {
        firstName: "Julio",
        lastName: "Mayorga",
        email: "JMayorga@intelifaz.com",
        tel: "11256385",
        password: "asdasdasd",
        id: "7",
        file:
          "https://media-exp1.licdn.com/dms/image/C4D03AQHMHeQVlGzLDA/profile-displayphoto-shrink_800_800/0/1593571057065?e=1615420800&v=beta&t=n0QBut6m0fGDi2m0fa8rXVt_gJwFNHvXL-5_25bHNMk",
      },
    ],
    confirmPassword: false,
    id: 8,
    selectedUser: "",
    change: "",
  });

  const inputData = (e) => {
    if (e.target.name === "confirmPassword") {
      e.target.value === state.password
        ? setState({ ...state, confirmPassword: true })
        : setState({ ...state, confirmPassword: false });
    } else if (e.target.name === "change") {
      setState({ ...state, change: !state.change });
    } else if (e.target.name === "file") {
      setState({ ...state, file: e.target.files[0] });
    } else
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
  };

  const setUser = (user) => {
    return setState({ ...state, selectedUser: user });
  };

  const closeUser = () => {
    return setState({ ...state, selectedUser: "" });
  };

  const delUser = (id) => {
    let result = window.confirm("¿Realmente desea borrar el usuario?");

    return (
      result &&
      setState({
        ...state,
        users: state.users.filter((user) => user.id !== id),
      })
    );
  };
  const create = (e) => {
    e.preventDefault();
    let {
      firstName,
      lastName,
      email,
      tel,
      password,
      confirmPassword,
      file,
    } = state;

    if ((!firstName, !lastName, !email, !tel, !password, !confirmPassword)) {
      return alert("Hay campos obligatorios incompletos o mal completados");
    } else {
      setState({
        ...state,
        users: [
          ...state.users,
          { firstName, lastName, email, tel, password, id: state.id, file },
        ],
        firstName: "",
        lastName: "",
        tel: "",
        password: "",
        email: "",
        file: "",
        id: state.id + 1,
      });
      return alert("Usuario creado");
    }
  };

  return (
    <div className="body">
      {state.change ? (
        <UserList
          state={state}
          setUser={setUser}
          closeUser={closeUser}
          inputData={inputData}
          delUser={delUser}
        />
      ) : (
        <CreateUser state={state} inputData={inputData} create={create} />
      )}
    </div>
  );
}

export default App;
