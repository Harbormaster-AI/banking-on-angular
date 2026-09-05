/**
 Base class of all Components.
 For convenience, contains all enums and entity lists
 **/
import { environment } from '../../environments/environment';

export class HelperBaseService {

    public apiUrl: string;

    constructor() {
        this.apiUrl = environment.apiUrl;
    }
}