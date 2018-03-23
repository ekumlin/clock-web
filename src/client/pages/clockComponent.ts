import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import * as moment from "moment";

@Component({
    moduleId: `${module.id}`,
    templateUrl: "clockComponent.html",
    styleUrls: [ "clockComponent.scss" ],
})
export class ClockComponent implements OnInit {
    private static readonly millisInSecond: number = 1000;

    private currentTime: Date = new Date();

    constructor() {
    }

    ngOnInit(): void {
        let millisUntilSecond: number = ClockComponent.millisInSecond - new Date().getMilliseconds();
        setTimeout(() => {
            setInterval(() => this.updateTicks(), ClockComponent.millisInSecond);
        }, millisUntilSecond);
    }

    private updateTicks(): void {
        this.currentTime = new Date();
    }
}
