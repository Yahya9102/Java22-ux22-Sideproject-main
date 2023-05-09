import { NextPage } from "next";
import style from "p-components/styles/adminPage.module.css";
import { useEffect, useState } from "react";
import { User } from "@/types/users";
import router from "next/router";
import Breaks from "./breaks";
import styles from "p-components/styles/playerInfo.module.css";

const AdminPage: NextPage = () => {
const [users, setUsers] = useState<User[]>([]);
const [selectedUser, setSelectedUser] = useState<User | null>(null);

const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

const [adminCredentials, setAdminCredentials] = useState({
username: "",
password: "",
});

const handleLoginClick = () => {
if (
adminCredentials.username === ADMIN_USERNAME &&
adminCredentials.password === ADMIN_PASSWORD
) {
setShowForm(true);
hideLogin();
} else {
alert("Invalid admin username or password");
}
};

useEffect(() => {
async function fetchData() {
try {
const response = await fetch("/api");
const data = await response.json();
if (Array.isArray(data)) {
setUsers(data);
} else {
console.log("Data is not an array:", data);
}
} catch (error) {
console.error("Error fetching data:", error);
}
}
fetchData();
}, []);

const handleDeleteClick = async (id: string) => {
const shouldDelete = window.confirm(
"Are you sure you want to delete this user?"
);
console.log(id);
if (shouldDelete) {
try {
const response = await fetch(/api/deleteUser?id=${id}, {
method: "DELETE",
});
if (!response.ok) {
throw new Error("Failed to delete user");
}
router.reload();
} catch (error) {
console.error("Error deleting user:", error);
}
}
};

const [editValues, setEditValues] = useState({
id: "",
name: "",
location: "",
title: "",
post: "",
discord: "",
});

const [showForm, setShowForm] = useState(false);
const [showLogin, setShowLogin] = useState(true);

const hideLogin = () => {
setShowLogin(false);
};

const handleUserSelection = (user: User) => {
setSelectedUser(user);
setEditValues({
id: user._id,
name: user.name,
location: user.location,
title: user.title,
post: user.post,
discord: user.discord,
});
setShowForm(true);
};

const handleEditSubmit = async (_id: string, user: User) => {
console.log(_id);
try {
const { name, location, title, post, discord } = editValues;

const userToUpdate: Partial<User> = {};
if (name) userToUpdate.name = name;
if (location) userToUpdate.location = location;
if (title) userToUpdate.title = title;
if (post) userToUpdate.post = post;
if (discord) userToUpdate.discord = discord;

console.log(_id);
const response = await fetch(
  `http://localhost:3000/api/editUser?id=${_id}`,
  {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userToUpdate),
  }
);

if (!response.ok) {
  throw new Error("Failed to edit user");
}
setShow
Form(false);
setSelectedUser(null);
router.reload();
} catch (error) {
console.error("Error editing user:", error);
}
};

return (
<div>
{showLogin && (
<div>
<fieldset>
<label htmlFor="adminUsername">Admin Username:</label>
<br />
<input
className={style.input_fields}
type="text"
name="adminUsername"
id="adminUsername"
value={adminCredentials.username}
onChange={(e) =>
setAdminCredentials({
...adminCredentials,
username: e.target.value,
})
}
placeholder="Username"
/>
<br />
<label className={style.label} htmlFor="adminPassword">
Admin Password:
</label>
<br />
<input
className={style.input_fields}
type="password"
name="adminPassword"
id="adminPassword"
value={adminCredentials.password}
onChange={(e) =>
setAdminCredentials({
...adminCredentials,
password: e.target.value,
})
}
placeholder="password"
/>
<br />
<button
           className={styles.createpost_button}
           onClick={handleLoginClick}
         >
Login
</button>
</fieldset>
</div>
)}  {showForm && (
  <div>
    {selectedUser && (
      // User editing form for the selected user goes here
    )}
  </div>
)}

{Array.isArray(users) &&
  users.map((user) => {
    return (
      <div
        className={styles.userCard}
        key={JSON.stringify(user._id)}
        onClick={() => handleUserSelection(user)}
      >
        <h3>{user.name}</h3>
        <p>{user.location}</p>
      </div>
    );
  })}
<Breaks />
</div>
);
};
export default AdminPage;