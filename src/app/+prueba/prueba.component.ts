import { Component, OnInit } from '@angular/core';
import {JsonApiService} from "../core/api/json-api.service";
import * as jsPDF from 'jspdf'
import { query } from '../../../node_modules/@angular/core/src/animation/dsl';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class pruebaComponent implements OnInit {

  constructor(private JAS : JsonApiService) { }
  morrisDemoData:any;
  
  ngOnInit() {
    this.JAS.fetch( '/graphs/morris.json').subscribe(data => this.morrisDemoData = data)
    console.log(this.morrisDemoData)
  }

  download() {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');
   
 // doc.fromHTML(jQuery('#prueba').html(), 15, 15, { 'width': 170, 'elementHandlers': specialElementHandlers });
    // Save the PDF
    doc.save('Test.pdf');
}
}
