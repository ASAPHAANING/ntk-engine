interface NTKSocket {
	on(event: 'connected', listener: () => void): this;
	on(event: 'data', listener: (data: Buffer) => void): this;
	send(data: Buffer): void;
}
