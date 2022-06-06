const url = 'http://localhost:5500/api'

function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console(error))
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      const data = response.data
      userName.textContent = `Nome: ${data.name}`
      userCity.textContent = `Cidade: ${data.city}`
      userID.textContent = `ID: ${data.id}`
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
  name: 'Diego Fernandes',
  avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
  city: 'Curitiba'
}

const newUser = {
  name: 'Jakeliny Gracielly',
  avatar: 'https://avatars.githubusercontent.com/u/17316392?v=4',
  city: 'São Paulo'
}

getUsers()
getUser(2)

//addNewUser(newUser)

//updateUser(3, userUpdated)

deleteUser(18)
