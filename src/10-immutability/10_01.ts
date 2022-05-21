export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export type CompanyType = {
    id: number,
    title: string
}

export function makeHairstyle(u: UserType, power: number) {

    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(user: UserWithLaptopType, city: string) {

    return {
        ...user,
        address: {
            ...user.address,
            city: city
        }
    }
}

export function upgradeUserLaptop(user: UserWithLaptopType, laptop: string) {

    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: laptop
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, newHouseNumber: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: newHouseNumber
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
    return {...u, books: [...u.books.concat(newBooks)]}
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) =>
    ({...u, books: u.books.map(b => b === oldBook ? newBook : b)})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, removedBook: string) => ({
    ...u, books: u.books.filter(b => b !== removedBook)
})

export const addCompany = (u: UserWithLaptopType & UserWithBooksType & WithCompaniesType, addedCompany: { id: number, title: string }) => ({
    ...u, companies: u.companies.map(c => c ? {...c, addedCompany} : c)
})

export const updateCompanyTitle = (u: WithCompaniesType, companyIdNumber: number, newTitle: string) => ({
    ...u, companies: u.companies.map(c => c.id === companyIdNumber ? {...c, title: newTitle} : c)
})

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType> },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy;
}