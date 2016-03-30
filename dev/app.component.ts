import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h3 [class.clicked]="showDetail===true" (click)="onSelect()" >{{contact.firstname}}</h3>
        <input [(ngModel)]="contact.firstname" type="text">
        <div *ngIf="showDetail === true">
            Phone number: {{contact.phoneNumber}} <br>
        </div>
    `,
    styleUrls: [ '../src/css/app.css' ]
})
export class AppComponent {
    public contact = { firstname: "Michael", lastname: "Caine", phoneNumber: "1234"}
    public showDetail : boolean = false;
    
    onSelect() {
        this.showDetail = true;
    }
    
}
