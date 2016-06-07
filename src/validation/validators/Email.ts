import { IValidator } from "./Validator"
import { isEmpty } from "../../utils"

export class Email implements IValidator {
    public error: string = "INVALID_FORMAT_EMAIL"
    public valid (value?: any): boolean {
        if (isEmpty(value)) {
            return true
        }

        const v: string = value.toString()
        return v.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i) !== null
    }
}
