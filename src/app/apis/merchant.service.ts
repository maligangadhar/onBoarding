import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { environment } from "../../environments/environment.prod";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class MerchantService {
    constructor(private apiservice: ApiService) {}
    getMerchantDetails(): Observable<any> {
        const endpoint = environment.appDetailUrl;
        return this.apiservice.getApplicationDetails(endpoint);
    }
    getMerchantActionDetails(): Observable<any> {
        const endpoint = environment.actionViewDetailUrl;
        return this.apiservice.getActionViewDetails(endpoint);
    }
}
