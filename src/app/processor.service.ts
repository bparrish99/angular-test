import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable()
export class ProcessorService {

  readonly superuser = {
    userId: "11111111-1111-1111-1111-111111111111",
    username: "super.user@email.com",
    email: "super.user@email.com",
    fullName: "Superadmin Localhost",
    firstName: "Superadmin",
    middleName: null,
    lastName: "Localhost",
    userType: "WORKFORCE",
    enabled: true,
    accountNonExpired: true,
    credentialsNonExpired: true,
    accountNonLocked: true,
    authorities: [
      { authority: "CAN_DO_EVERYTHING" },
      { authority: "CAN_ACCESS_ACTUATOR" },
      { authority: "CAN_ACCESS_CONFIGURATION" },
      { authority: "CAN_EDIT_CONFIGURATION" }
    ],
    userPreferences: {
      newField: "tested"
    }
  }

  constructor(private http: HttpClient) { }

  getProcessors(customer, environment) {
    let baseUrl = "https://gateway-" + customer.urlTag + "." + environment.urlTag + ".borrowerwallet.com";
    console.log("Retrieving processors from " + baseUrl);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let token = this.http.post(baseUrl + "/iam/localToken", this.superuser, httpOptions);

    return token.pipe(
        catchError(err => of(["asdadsad", "dfsdfsd"]))
    );

  }
}