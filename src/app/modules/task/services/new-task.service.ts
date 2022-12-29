import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ColumnService } from './column.service';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService {
  private URL = environment.api;

  public payload = null;

  private _showModal$ = new BehaviorSubject<boolean>(false);
  public showModal$ = this. _showModal$.asObservable();

  // BehaviorSubject es una variable que nos permite inicializar un observanle con un valor
  private _itemsFormGroup$ = new BehaviorSubject(null);
  // Me obtiene el Observable
  public itemsFormGroup$ = this._itemsFormGroup$.asObservable()


  constructor(
    private httpClient:HttpClient,
    private columnService:ColumnService
    ) { }

  public setShow(flag:boolean, payload?:any){
    this.payload = payload;
    this._showModal$.next(flag)
  }

  public setFormGroup(data:any):void{
    // setear el valor dentro del observable
    this._itemsFormGroup$.next(data)
  }

  public saveTask(body:any):Observable<any>{
    return this.httpClient.post(
      `${this.URL}/task/${this.payload}`,
      body
      ).pipe(
        tap(() => this.columnService.reloadColumn(this.payload))
      )
  }
}
