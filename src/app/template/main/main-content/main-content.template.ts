import { Component, OnInit, OnDestroy } from '@angular/core';

import { JobService } from '../../../services/job-categories/job-categories.service';
import { CTALoginService } from 'src/app/@shared/components/cta-login/cta-login.service';
import { QuoteDialogService } from 'src/app/@shared/components/quote-dialog/quote-dialog.service';
import { Subscription } from 'rxjs';
import { DistritoService } from '../../../services/location/distrito.service';
import { HelperService } from 'src/app/@core/services/helper.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.template.html',
  styleUrls: ['./main-content.template.scss'],
  providers: [JobService, DistritoService]
})

export class MainContentTemplate implements OnInit, OnDestroy {

  public oficios: Array<any>;
  public arrayCategoriesMain: Array<any>;
  public distritos: Array<any>;
  public orientationCTA: string;
  public categoriesSubcription: Subscription;

  public stateDialog: boolean;
  public customOptions: OwlOptions;
  public buttonOwlPrev: string;
  public buttonOwlNext: string;

  constructor(
    public _helper: HelperService,
    public _jobService: JobService,
    public _quoteDialogService: QuoteDialogService,
    public _distritoService: DistritoService,
    public _ctaLoginService: CTALoginService
  ) { }

  public ngOnInit(): void {
    this.showCategoriesMain();
    this.showDistritosMain();

    this.buttonOwlPrev = `<div class='button-content'>
            <div class='md-icon'>
                <i class="fas fa-chevron-left"></i>
            </div>
        </div>`;

    this.buttonOwlNext = `<div class='button-content'>
            <div class='md-icon'>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>`;

    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: [this.buttonOwlPrev, this.buttonOwlNext],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        580: {
          items: 2
        },
        800: {
          items: 3
        },
        1080: {
          items: 4
        }
      },
      nav: true
    }

    this.orientationCTA = "left";
  }

  public ngOnDestroy(): void {
    if (this.categoriesSubcription) {
      this.categoriesSubcription.unsubscribe();
    }
  }

  public showCategoriesMain() {
    this.categoriesSubcription = this._jobService.listCategoriesWorkers().subscribe(res => {
      console.log(res);
      console.table(res);
      const dataResponse = JSON.parse(JSON.stringify(res));
      this.arrayCategoriesMain = dataResponse;
    });

  }


  public showDistritosMain() {
    this._distritoService.listar().subscribe(
      result => {
        console.log(result);
        const dataResponse = JSON.parse(JSON.stringify(result))
        this.distritos = dataResponse.response;
      },
      error => {
        console.log(error);
      }
    )
  }

  public quoteWork(): void {
    this._ctaLoginService.open();
  }

  public toggleQuoteDialog(): void {
    this._quoteDialogService.openDialog();
  }

}