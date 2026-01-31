import { Component, Input } from '@angular/core';
import { WorkerProfile } from 'src/app/@core/models/worker.model';

@Component({
  selector: 'card-professional',
  templateUrl: './card-professional.component.html',
  styleUrls: ['./card-professional.component.scss']
})

export class CardProfessionalComponent {
  @Input() worker: WorkerProfile;
  
  constructor() { }
}