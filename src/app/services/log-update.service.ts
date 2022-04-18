import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
//import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate) { }

  public init(){
    console.log("LOG SERVICE INIT HAS BEEN TRIGGERED");
    
    this.updates.versionUpdates.subscribe(value => {
      switch(value.type){
        case 'VERSION_DETECTED':
          console.log(`downloading new app version: ${value.version.hash}`);
        break;

        case 'VERSION_READY':
        console.log(`Current version: ${value.currentVersion.hash}`);
        console.log(`new app version ready: ${value.latestVersion.hash}`);
        this.updates.activateUpdate().then( _ => {
          document.location.reload()
        })
        break;
      }
    }) 
  }

  // openSnackBar(message: string, action: string){
  //   this._snackBar.open(message, action)
  // }


 

  
}
