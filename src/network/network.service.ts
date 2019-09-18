import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'events';
import NTKClient from './client';
import UserDTO from './interfaces/user.dto';

@Injectable()
export class NetworkService extends EventEmitter {
	constructor() {
		super();
		new NTKClient().init();
	}
}
