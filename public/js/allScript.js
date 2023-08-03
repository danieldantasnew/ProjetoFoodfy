import * as fetch from './fetch.js';
import Menu from './buttonMenu.js';
import Cards from './cards.js';
import Modal from './modal.js';
import RedirecionaPagina from './pageRedirect.js';
import darkTheme from './darkTheme.js';
import receitaUnica from './receitaUnica.js';
import menuMobile from './menuMobile.js';

const menu = new Menu('[data-menu="lista"]', '[data-menu="btn-menu"]');
menu.init();

const card = new Cards('[data-card]');
card.init();

const modal = new Modal('[data-card]');
modal.init();

const redireciona = new RedirecionaPagina('[data-card]');
redireciona.init();

fetch.fetchDados();
darkTheme();
receitaUnica();
menuMobile();
/* --------------------------------------------------------------------*/
