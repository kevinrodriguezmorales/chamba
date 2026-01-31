import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { JobService } from 'src/app/services/job-categories/job-categories.service';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/@core/services/helper.service';

@Component({
    selector: 'categories',
    templateUrl: './categories.template.html',
    styleUrls: ['./categories.template.scss'],
    providers: [
        JobService
    ]
})

export class CategoriesTemplate implements OnInit {

    @ViewChild("wrapperMain", { static: true }) wrapperMain: ElementRef;

    public titlePage: string;
    public nameImage: string;
    public arrayCategories:Array<any>;
    public categories: Subscription;

    constructor(
        public jobService: JobService,
        public _helper: HelperService
    ) { }

    public ngOnInit(): void {
        this.showCategories();
        // this.scrollToElement(this.wrapperMain.nativeElement);
        this.titlePage = "Categorías";
        this.nameImage = "gardering"
    }

    public showCategories(){
        this.categories = this.jobService.listCategoriesWorkers().subscribe(res => {
            const dataResponse = JSON.parse(JSON.stringify(res));
            this.arrayCategories = dataResponse;
        });

    }


    public scrollToElement($element): void {
        setTimeout(() => {
            $element.scrollIntoView(
                {
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                }
            );
        }, 500);
    }
}