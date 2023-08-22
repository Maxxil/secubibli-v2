import { PermissionModel } from "./permission.model";

export class UserModel{
    _id: string;
    username: string;
    email: string;
    permissions : PermissionModel[];
}