type Address = {
  country: string
  city: string
  town: string
  houseNumber: number
}

export interface I_Test {
  firstname: string
  lastname: string
  age: number
  address?: Address
}
