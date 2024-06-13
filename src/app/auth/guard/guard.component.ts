import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const autenticacionRuta: CanActivateFn = (route, state) => {

  const loggedUser = localStorage.getItem('loggedUser');
  const router = inject(Router);
  if( loggedUser ){
    return true;
  }
  
  router.navigateByUrl('/auth/login');
  return false;
};
