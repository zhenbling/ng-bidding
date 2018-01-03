import { Component, OnInit, TemplateRef,Input, Output} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-final-price',
  templateUrl: './final-price.component.html',
  styleUrls: ['./final-price.component.scss']
})
export class FinalPriceComponent implements OnInit {
  modalRef: BsModalRef;
  @Input() finalPrice:number;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ class: 'final-price' });
  }
  ngOnInit() {
  }

}
