export const duration = (title: string) => {
  return (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    let fn = descriptor.value
    descriptor.value = (...args: any[]) => {
      console.time(title)
      fn(...args)
      console.timeEnd(title)
    }
  }
}
