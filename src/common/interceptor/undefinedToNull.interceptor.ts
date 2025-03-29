import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, map, Observable } from "rxjs";

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // 전 부분
        return next.handle().pipe()

    }
}