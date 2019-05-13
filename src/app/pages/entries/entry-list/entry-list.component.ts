import { Component } from '@angular/core';

import { BaseResourceListComponent } from "../../../shared/components/base-resource-list.component/base-resource-list.component";

import { Entry  } from "../shared/entry.model";
import { EntryService  } from "../shared/entry.service";


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {

    // variavel a ser utilizada no ngFor do template, retorna o valor dos resources
  // caso nao quisesse usar desta forma teriamos de trocar no template o nome da variavel entries por resources
  get entries() {
    return this.resources;
  }

  constructor(private entryService: EntryService) {
    super(entryService);
  }

}
