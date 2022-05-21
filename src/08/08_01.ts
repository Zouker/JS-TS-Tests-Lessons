export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

//users[1]   // найти с id 1

let user = {id: 100500, name: 'Igor'} //добавление пользователя
users[user.id] = user  //поиск пользователя
delete users[user.id] // удаление пользователя
users[user.id].name = 'Vitya' //изменение пользователя

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//usersArray.find(u => u.id === 1)  // найти с id 1
//let usersCopy = [...usersArray.filter(), user] //возможно еще придется пропустить через фильтр
//или
//usersArray.push(user)   //это добавление

//let usersArray = usersArray.filter(u => u.id !== user.id) //удаление пользователя