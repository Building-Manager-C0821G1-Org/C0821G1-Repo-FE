import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user/user';
import {UserDTO} from '../model/user/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  // findById(id: number): Observable<User> {
  //   return this.httpClient.get<[]>(`""`);
  // }
  // PatchById(id: number): Observable<[]> {
  //   return this.httpClient.patch<[]>();
  // }
  updateUser(userDTO: UserDTO): Observable<any> {
    return this.httpClient.put<any>(this.API_URL + '/changePassword', {
      currentPassword: userDTO.currentPassword,
      newPassword: userDTO.newPassword,
      confirmPassword: userDTO.confirmPassword,
      id: userDTO.id,
    });
  }
}
