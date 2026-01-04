import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-single-view',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './single-view.html',
    styleUrl: './single-view.css'
})
export class SingleView implements OnInit {
    product: any = null;

    constructor(private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
        if (history.state && history.state['product']) {
            this.product = history.state['product'];
        } else {
            this.route.paramMap.subscribe(params => {
                const id = params.get('id');
                if (id) {
                    this.fetchProduct(id);
                }
            });
        }
    }

    fetchProduct(id: string) {
        this.http.get(`https://dummyjson.com/products/${id}`).subscribe((data: any) => {
            this.product = data;
        });
    }
}
