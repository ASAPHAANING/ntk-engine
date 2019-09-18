import { EventEmitter } from 'events';

import { NTK_PORT, NTK_IP } from '../../constants.json';
import * as net from 'net';

export default class NTKSocket extends EventEmitter {
	private _socket: net.Socket;
	public get socket(): net.Socket {
		return this._socket;
	}
	public set socket(value: net.Socket) {
		this._socket = value;
	}
	constructor() {
		super();
		this._socket = new net.Socket();
	}

	init(): void {
		this.connect(NTK_IP, NTK_PORT);
	}

	send(data?: Buffer): void {
		this.socket.write(data, 'binary');
	}

	close(): void {
		this.socket.removeAllListeners();
		this.socket.end();
	}

	connect(ip: string, port: number): void {
		this.socket.connect(port, ip);

		this.socket.on('data', (data) => {
			this.emit('data', data);
		});

		this.socket.on('connect', () => {
			this.emit('connected');
		});

		this.socket.on('error', (e) => {
			console.log(e);
		});
	}
}
