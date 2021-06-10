//Array que contiene los datos para mostrar
let usersList = [
  {
    name: "Daniel",
    lastName: "Meza Miranda",
    email: "daniel.academlo@gmail.com"
  },
  {
    name: "Juan",
    lastName: "Martínez",
    email: "correo@correo.com"
  },
  {
    name: "Samantha",
    lastName: "López",
    email: "samantha@correo.com"
  }
];

//Varible que va a guardar el elemento HTML en el que vamos a hacer render de nuestro array
let userListUI = document.getElementById("userList");

const renderList = () => {
  //   userListUI.innerHTML = "";
  userListArray = usersList;

  userListArray.forEach(user => {
    //Creamos el contenedor principal que va a ser la fila de cada usuario
    const userItemDiv = document.createElement("div");
    userItemDiv.setAttribute("class", "userItem");
    userListUI.appendChild(userItemDiv);

    //Crear un div que va a contener la información de cada user
    const userInfoDiv = document.createElement("div");
    userInfoDiv.setAttribute("class", "userInfo");
    userItemDiv.appendChild(userInfoDiv);

    //Creamos dos h4 para tener el nombre, el apellido y email, y poder incrustarlos en el div anterior
    const nameUserDiv = document.createElement("h4");
    const emailUserDiv = document.createElement("h4");
    nameUserDiv.innerText = `${user.name} ${user.lastName}`;
    emailUserDiv.innerText = `${user.email} `;

    userInfoDiv.appendChild(nameUserDiv);
    userInfoDiv.appendChild(emailUserDiv);

    //Agregamos los botones de acción, estos botones podrán editar o eliminar
    const actionButtons = document.createElement("div");
    actionButtons.setAttribute("class", "actions");
    userItemDiv.append(actionButtons);

    //Creamos el botón de editar
    const updateBtn = document.createElement("button");

    //Agregamos una clase, un id y un addEventListener
    updateBtn.setAttribute("class", "update");
    updateBtn.addEventListener("click", () =>
      console.log("Este botón sirve para editar")
    );
    updateBtn.setAttribute("id", "update");
    updateBtn.innerText = "Editar";

    //Creamos el botón de borrar
    const deleteBtn = document.createElement("button");

    //Agregamos una clase, un id, y un addEventListener
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.addEventListener("click", () =>
      console.log("Sirve para borrar un elemento")
    );
    deleteBtn.innerHTML = "Eliminar";
    deleteBtn.setAttribute("id", "delete");

    //Agregamos el botón al div de botones creado anteriormente
    actionButtons.appendChild(updateBtn);
    actionButtons.appendChild(deleteBtn);
  });
};

document.addEventListener("DOMContentLoaded", renderList);
