class Printer {
	static text = null;
	static backgroundColor = 'transparent';
	static color = 'white';
	static size = 12;
	static bold = false;
	static setStyle = () => {
		return (
			`color:${Printer.color};backgroundColor:${Printer.backgroundColor};` +
			`font-size:${Printer.size}px;font-weight:${Printer.bold ? 'bold' : ''};` +
			`font-family:Comic Sans Ms;`
		);
	};
	static bg = (text) => {
		Printer.backgroundColor = text;
		return Printer;
	};
	static c = (text) => {
		Printer.color = text;
		return Printer;
	};
	static b = () => {
		Printer.bold = true;
		return Printer;
	};
	static s = (num) => {
		Printer.size = num;
		return Printer;
	};
	static set = (text) => {
		Printer.text = text;
		return Printer;
	};
	static write = () => {
		if (Printer.text != null) {
			console.log(`%c${Printer.text}`, Printer.setStyle());
		}
		Printer.text = null;
		Printer.bold = false;
		Printer.backgroundColor = 'transparent';
		Printer.color = 'white';
		Printer.size = 12;
	};
}

export default Printer;
