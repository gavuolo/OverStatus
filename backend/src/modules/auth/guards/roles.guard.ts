import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { Role } from "src/modules/users/enum/user-roles.enum";


@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector){}
    async canActivate(context: ExecutionContext) {
        const {authorization} = context.switchToHttp().getRequest()
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if(!requiredRoles) return true

        const request = context.switchToHttp().getRequest()
        const token = request.headers.authorization?.split(' ')[1]
        return token
    }
   

}