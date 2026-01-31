import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LIST_WORKERS } from 'src/app/@core/mocks/workers';
import { WorkerProfile } from 'src/app/@core/models/worker.model';

@Component({
  selector: 'single-category',
  templateUrl: './single-category.template.html',
  styleUrls: ['./single-category.template.scss']
})

export class SingleCategoryTemplate implements OnInit {

  public data: any;
  public workersByCategory: WorkerProfile[] = LIST_WORKERS;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params);
    this.getParameters();
    console.log(this.data);
    this.getWorkersByCategory();
  }

  public getParameters(): any {
    return this.data = {
      titlePage: this.activatedRoute.snapshot.params.categoryName,
      imagePage: this.activatedRoute.snapshot.params.categoryImage,
      categoryID: parseInt(this.activatedRoute.snapshot.params.categoryID, 10)
    };
  }

  public getWorkersByCategory(): void {
    console.log(this.workersByCategory);
    this.workersByCategory = this.workersByCategory.filter(
      (worker) => worker.category.id === this.data.categoryID
    );
  }

}