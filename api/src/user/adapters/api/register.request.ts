export class RegisterUserRequest {
    private _code: string;
    private _userName: string;
    private _userEmail: string;

    constructor(_code: string, _userName: string, _userEmail: string) {
        this._code = _code;
        this._userName = _userName;
        this._userEmail = _userEmail;
    }
    
    public get code(): string {
        return this._code;
    }

    public get userName(): string {
        return this._userName;
    }

    public get userEmail(): string {
        return this._userEmail;
    }
}