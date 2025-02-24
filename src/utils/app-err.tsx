import {message} from 'antd';

export class AppErrService {
    constructor() {

    }

    appErrClient(error : any) {
        if (error instanceof Error) {
            message.error(error.message);
        }
        else {
            message.warning('something went wrong, try again');
        }
    }

    appErrServer(error : any) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        else {
            throw new Error('Something went wrong');
        }
    }
}

export const appErr = new AppErrService();