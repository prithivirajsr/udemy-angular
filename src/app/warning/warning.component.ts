import { Component } from "@angular/core";

@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styles: [`
    .warning {
        width: 30%;
        background-color: pink;
        border-left: 5px solid red;
        padding-left: 10px;
        margin: auto;
      }`
          
    ]
})

export class WarningComponent{
    
}