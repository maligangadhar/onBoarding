import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MerchantService } from '../../../apis/merchant.service';
import { Message } from 'primeng/components/common/api';
import { Router } from '@angular/router';

import {
    NgbModal,
    ModalDismissReasons,
    NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-application-view',
    templateUrl: './application-view.component.html',
    styleUrls: ['./application-view.component.scss']
})
export class ApplicationViewComponent implements OnInit {
    @ViewChild('dt', { static: false }) dtRef: any;
    constructor(
        private merchantService: MerchantService,
        private modalService: NgbModal, private router: Router
    ) {
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }
    msgs: Message[] = [];
    cols: any[];
    kycData: any;
    statusList: any[] = [];
    merchantDetailsList: any[] = [];
    statusFilter: String = '';
    modalOptions: NgbModalOptions;
    closeResult: String;
    filterStatus: String = 'Not Done';
    ngOnInit() {
        this.getViewDetails();
        this.cols = [
            { field: 'appNo', header: 'App.No' },
            { field: 'status', header: 'Current Status' },
            { field: 'description', header: 'Description' },
            { field: 'actions', header: 'Actions' }
        ];
        this.statusList.push({ label: 'All' , value: null} , { label: 'Done', value: 'Done' }, { label: 'Not Done', value: 'Not Done' });
    }
    open(content, appNo) {
        this.modalService.open(content, this.modalOptions).result.then(
            result => {
                this.closeResult = `Closed with: ${result}`;
            },
            reason => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }
    confirm = appNo => {
        this.router.navigate(['actionView']);
    };
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    getViewDetails = () => {
        this.merchantService.getMerchantDetails().subscribe(
            response => {
                this.merchantDetailsList = response.data;
                this.kycData = response;
            },
            error => {
                this.msgs.push({
                    severity: 'error',
                    summary: 'Error Message: ',
                    detail: error
                });
            }
        );
    };
    /**
     * selected chart for Filter Grid
     */
    selectedChart = (type) => {
        const searchText = (type === 1) ? 'Done' : 'Not Done';
        this.dtRef.filter(searchText, 'status', 'equals');
        this.statusFilter = searchText;
    }
}
