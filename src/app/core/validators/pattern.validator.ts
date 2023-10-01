
export abstract class ValidInputPattern {
    static readonly phone = (/^(?:\+?88)?01[3-9]\d{8}$/);
    static readonly email = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";
    static readonly whiteSpace = "/^[a-zA-Z.0-9#@\-_=?$%,+<> ]*[a-zA-Z.0-9#@\-_=?$%,+<>]$/";
    static readonly url = "/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/"
}
