class Printer {
  public static text: string | null = null
  public static backgroundColor: string = `transparent`
  public static color: string = `white`
  public static size: number = 12
  public static bold: boolean = false
  public static bg: Function = (text: string) => {
    Printer.backgroundColor = text
    return Printer
  }
  public static c: Function = (text: string): Printer => {
    Printer.color = text
    return Printer
  }
  public static s: Function = (num: number): Printer => {
    Printer.size = num
    return Printer
  }
  public static b: Function = (): Printer => {
    Printer.bold = true
    return Printer
  }
  public static set: Function = (text: string): Printer => {
    Printer.text = text
    return Printer
  }
  public static setStyle: Function = (): string => {
    return (
      `background:${Printer.backgroundColor};` +
      `color:${Printer.color};font-size:${Printer.size}px;` +
      `font-family:Comic Sans Ms;font-weight:${Printer.bold ? `bold` : ``};`
    )
  }
  public static write: Function = (): void => {
    if (Printer.text != null) {
      console.log(`%c${Printer.text}`, Printer.setStyle())
    }
    Printer.text = null
    Printer.bold = false
    Printer.backgroundColor = `transparent`
    Printer.color = `white`
    Printer.size = 12
  }
}

export default Printer
