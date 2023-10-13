import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const isLogged: CanMatchFn = () => {
    const isLogged = inject(AuthService).isLogged;
    const router = inject(Router);

    if (!isLogged) {
        router.navigate(['/login']);
    }

    return isLogged;
};
