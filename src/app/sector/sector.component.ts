import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CompanyPriceDetails } from '../models/company-price-data';
import { Company } from '../models/company-data';
import { Sector } from '../models/sector-data';
import { SectorService } from '../service/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
//  @Input()
  sectors : Sector[] = [];
  companies : Company[] = [];
  selectedSector: Sector = new Sector();
  compareSector1;
  compareSector2;
  startDate;
  endDate;
  show: boolean = true;

  constructor(private sectorService: SectorService ) {
    sectorService.fetchSectors().subscribe(data => {
      this.sectors = data as Sector[];
    });
  }

  selectSector(id) {
    this.sectorService.fetchSectorCompanies(id).subscribe(data => {
      this.companies = data.companies as Company[];
      this.selectedSector.sectorId = data.sectorId;
      this.selectedSector.sectorName = data.sectorName;
      this.selectedSector.brief = data.brief;
    });
  }

  ngOnInit(): void {
  }

}
