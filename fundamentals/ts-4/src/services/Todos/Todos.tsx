import Printer from '../../utils/console'

const axios = require('axios')

const Todos = {
  Get() {
    Printer.set(` Todos Service `).c('cyan').b().s(16).write()
    return axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response: any) => {
        return response.data
      })
      .then((json: any[]) => {
        if (Array.isArray(json)) {
          return json
        } else {
          throw `Todos Fetch Response was not an Array`
        }
      })
  },
}

export default Todos
