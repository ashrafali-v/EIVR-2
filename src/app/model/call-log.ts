export class CallLog {

    contactId: any;
    phoneNo: any;
    callDuration: any;
    timeStamp:any;
    callHealth:boolean;

    constructor() {
        this.contactId = '';
        this.phoneNo = '';
        this.callDuration = '';
        this.timeStamp = '';
        this.callHealth = true;
     }
}