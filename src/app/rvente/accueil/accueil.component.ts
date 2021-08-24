import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { ProductService } from 'src/app/services/product.service';
import { clientModel } from 'src/app/models/clients.model';
import { factureService } from 'src/app/services/facture.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nbprod: any;
  nbclt: any;
  facture:any;
  constructor(private ProductService:ProductService,private factService: factureService) { }

  ngOnInit(): void {
    this.get();
    this.getfacturefdata();
  }
  get(){
    this.ProductService.getNumberProduct().subscribe(res=>{
    this.nbprod=res;
  });
}
getfacturefdata(){
  this.factService.getData().subscribe(res=>{
  this.facture=res;
  console.log("####",this.facture);
  });
}
getColor(etat:any) {
  switch (etat) {
    case 'patiellement payé':
      return 'green';
    case 'payé':
      return 'blue';
    case 'non payé':
      return 'red';
  }
  return 'red';
}
}
