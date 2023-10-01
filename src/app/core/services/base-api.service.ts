import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * BaseService class for all API services to extend
 */
export abstract class BaseApiService {
  /**
   * Constructor
   * @param http
   */
  public constructor(public http: HttpClient) {
  }

  /**
   * Get single Model data by ID from API
   * @param id Model ID
   * @returns Observable<any>
   */
  public abstract getOne(id: number): Observable<any>;

  /**
   * Get all Model data from API
   * @param options to filter or paginate results
   * @returns Observable<DataModel>
   */

}
