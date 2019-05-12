import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from "../../../shared/services/base-resource.service";

import { Entry } from './entry.model';
import { CategoryService } from "../../categories/shared/category.service";


import { Observable, throwError } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector,
              private categoryService: CategoryService ) 
  {
      super('api/entries', injector, Entry.fromJson)
  }

  create(entry: Entry): Observable<Entry>{

    // necessario para ficar compativel com o modelo do banco in-memory-web-api
    return this.categoryService.getByID(entry.categoryId).pipe(
      flatMap(
         category => {
          entry.category = category;

          return super.create(entry);
        }
      )
    )

  }

  update(entry: Entry): Observable<Entry> { 
    // necessario para ficar compativel com o modelo do banco in-memory-web-api
    return this.categoryService.getByID(entry.categoryId).pipe(
      flatMap(
        category => {
          entry.category = category;

          return super.update(entry);
        }
      )
    )
  }
  
}
