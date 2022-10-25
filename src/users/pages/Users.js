import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "U1",
      name: "Giri",
      image:
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
