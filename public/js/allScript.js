import * as fetch from './fetch.js';
import Menu from './buttonMenu.js';
import darkTheme from './darkTheme.js';
import cards from './cards.js';
import modalAction from './modal.js';
import redirecionaPagina from './pageRedirect.js';
import receitaUnica from './receitaUnica.js';
import menuMobile from './menuMobile.js';

fetch.fetchDados();

const menu = new Menu('[data-menu="lista"]', '[data-menu="btn-menu"]');
menu.init();

darkTheme();
cards();
modalAction();
redirecionaPagina();
receitaUnica();
menuMobile();
/* --------------------------------------------------------------------*/
