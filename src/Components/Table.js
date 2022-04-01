
// const Table = () => {
//   const classB = {
//     border: "1px solid red",
//   }
//   const ded = {
//     border: "1px solid red",
//   }

//   const users = [
//     {
//       userId: 1,
//       id: 1,
//       title: "quidem molestiae enim",
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "sunt qui excepturi placeat culpa",
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: "omnis laborum odio",
//     },
//   ];    
//    const userList = users.map((user) => {
//     return (
//       <tr>
//         <td style={ded}>{user.userId}</td>
//         <td style={ded}>{user.id}</td>
//         <td style={ded}>{user.title}</td>
//       </tr>
//     )
//    })
//   return <table style={classB}>{userList}</table>;
// };



const Table = () => {
  const classB = {
    border: "1px solid red",
  }
  const ded = {
    border: "1px solid red",
  }

  const users = [
    {
      userId: 1,
      id: 1,
      age: 28,
      name: "Namat",
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 1,
      age: 38,
      name: "Namat",
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 1,
      age: 58,
      name: "Namat",
      title: "quidem molestiae enim",
    },
    {
      userId: 5,
      id: 2,
      age: 78,
      name: "Aziz",
      title: "quidem molestiae enim",
    },
    {
      userId: 2,
      id: 5,
      age: 27,
      name: "Gulnaz",
      title: "quidem molestiae enim",
    },
  ]
   const userList = users.map((user) => {
    return (
      <tr>
        <td style={ded}>{user.userId}</td>
        <td style={ded}>{user.id}</td>
        <td style={ded}>{user.age}</td>
        <td style={ded}>{user.name}</td>
        <td style={ded}>{user.title}</td>
      </tr>
    )
   })
  return <table style={classB}>{userList}</table>;
};
export default Table;