function increaseAge(u: UserType) {
    u.age++; // u.age = u.age + 1
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('reference type test', () => {
    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference type test', () => {
    var users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    var admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount = adminsCount + 1;

    // expect(users[2]).toEqual({name: 'Bandyugan', age: 10-immutability})

})

//не использовать var, использовать const, а где необходимо менять на let

test('ref type test', () => {
    const address = {
        title: 'Minsk'
    }

    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    //let addr = user.address

    var user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    address.title = 'Minsk City';

    expect(user.address.title).toBe('Minsk City')
    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']

    letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])

});

function passportist(letters: any) {
    const copy = [...letters].sort();
    console.log(letters)
}
