import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Products } from './Pages/products/products';
import { SingleView } from './Pages/single-view/single-view';
import { Contact } from './Pages/contact/contact';
import { Home } from './Pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'navbar', component: Navbar },
    { path: 'products', component: Products },
    { path: 'products/:id', component: SingleView },
    { path: 'contact', component: Contact }
];
