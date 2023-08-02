import * as fetch from './fetch.js';
import Menu from './buttonMenu.js';
import Cards from './cards.js';
import darkTheme from './darkTheme.js';
import modalAction from './modal.js';
import redirecionaPagina from './pageRedirect.js';
import receitaUnica from './receitaUnica.js';
import menuMobile from './menuMobile.js';

fetch.fetchDados();

const menu = new Menu('[data-menu="lista"]', '[data-menu="btn-menu"]');
menu.init();

const card = new Cards('[data-card]');
card.init();

darkTheme();
modalAction();
redirecionaPagina();
receitaUnica();
menuMobile();
/* --------------------------------------------------------------------*/
