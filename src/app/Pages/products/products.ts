import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './products.html',
    styleUrl: './products.css'
})
export class Products implements OnInit {
    products: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
            this.products = data.products;
        });
    }
}
