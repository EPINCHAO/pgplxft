import { Component , ChangeDetectorRef } from '@angular/core';
import { Product } from '../../adapters/products';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagoPlux } from '../../adapters/payplux';
import { PayPluxService } from '../../services/payPlux.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule, 
    TableModule, 
    ButtonModule, 
    RatingModule, 
    TagModule, 
    CurrencyPipe,
FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [ProductService]
})
export class DashboardComponent {

  idTransaction: string = ''; 
  transactionDetails:PagoPlux|null = null;
  errorMessage: string = '';

  constructor( private payPluxService:PayPluxService, private cdr: ChangeDetectorRef) {}

  ngOnInit() { 
       this.getTransactionById("626d9095-ecf0-4af4-98ab-c14021d8206f")
  }

  
  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
              return 'info';
      }
  }

  async getTransactionById(idTransaction: string): Promise<PagoPlux> {
    return await firstValueFrom(this.payPluxService.getTransactionByIdStateResource(idTransaction));
  }
  async searchTransaction() {
    if (this.idTransaction) {
      try {
        const data = await this.getTransactionById(this.idTransaction);
        this.transactionDetails = data; 
        this.errorMessage = '';
        this.idTransaction = '';
        this.cdr.detectChanges();
      } catch (error) {
        this.errorMessage = 'No se pudo obtener la transacción. Verifica el ID.';
        this.transactionDetails = null;
        this.idTransaction = '';
        this.cdr.detectChanges();
      }
    }
  }
}
