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

//Para saber si se crea o se edita
let updateFlag = false;
let updateIndex = null;

//Varible que va a guardar el elemento HTML en el que vamos a hacer render de nuestro array
let userListUI = document.getElementById("userList");
//Variable que va a guardar el formulario
const userForm = document.getElementById("addUser");

const renderList = () => {
  userListUI.innerHTML = "";
  userListArray = usersList;

  userListArray.forEach((user, index) => {
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
    updateBtn.addEventListener("click", () => updateUser(index, user));
    updateBtn.setAttribute("id", "update");
    updateBtn.innerText = "Editar";

    //Creamos el botón de borrar
    const deleteBtn = document.createElement("button");

    //Agregamos una clase, un id, y un addEventListener
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.addEventListener("click", () => deleteUser(index));
    deleteBtn.innerHTML = "Eliminar";
    deleteBtn.setAttribute("id", "delete");

    //Agregamos el botón al div de botones creado anteriormente
    actionButtons.appendChild(updateBtn);
    actionButtons.appendChild(deleteBtn);
  });
};

const createUpdateUser = event => {
  event.preventDefault();
  if (updateFlag) {
    let updatedUser = {
      name: document.getElementById("name").value,
      lastName: document.getElementById("lastname").value,
      email: document.getElementById("email").value
    };

    usersList[updateIndex] = updatedUser;

    updateFlag = false;
    updateIndex = null;
    renderList();
  } else {
    let user = {
      name: document.getElementById("name").value,
      lastName: document.getElementById("lastname").value,
      email: document.getElementById("email").value
    };
    usersList.push(user);
    renderList();
  }
  userForm.reset();
};

const updateUser = (index, user) => {
  console.log(index);
  console.log(user);
  document.getElementById("name").value = user.name;
  document.getElementById("lastname").value = user.lastName;
  document.getElementById("email").value = user.email;
  updateFlag = true;
  updateIndex = index;
};

const deleteUser = index => {
  usersList.splice(index, 1);
  console.log(
    `Vamos a eliminar a ${usersList[index].name} que esté en la posición ${index}`
  );
  renderList();
};

userForm.addEventListener("submit", createUpdateUser);
document.addEventListener("DOMContentLoaded", renderList);
