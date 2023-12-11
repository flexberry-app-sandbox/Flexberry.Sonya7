import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sonya-7-клиенты-l');
  this.route('i-i-s-sonya-7-клиенты-e',
  { path: 'i-i-s-sonya-7-клиенты-e/:id' });
  this.route('i-i-s-sonya-7-клиенты-e.new',
  { path: 'i-i-s-sonya-7-клиенты-e/new' });
  this.route('i-i-s-sonya-7-материалы-l');
  this.route('i-i-s-sonya-7-материалы-e',
  { path: 'i-i-s-sonya-7-материалы-e/:id' });
  this.route('i-i-s-sonya-7-материалы-e.new',
  { path: 'i-i-s-sonya-7-материалы-e/new' });
  this.route('i-i-s-sonya-7-поставщики-l');
  this.route('i-i-s-sonya-7-поставщики-e',
  { path: 'i-i-s-sonya-7-поставщики-e/:id' });
  this.route('i-i-s-sonya-7-поставщики-e.new',
  { path: 'i-i-s-sonya-7-поставщики-e/new' });
  this.route('i-i-s-sonya-7-приход-денег-l');
  this.route('i-i-s-sonya-7-приход-денег-e',
  { path: 'i-i-s-sonya-7-приход-денег-e/:id' });
  this.route('i-i-s-sonya-7-приход-денег-e.new',
  { path: 'i-i-s-sonya-7-приход-денег-e/new' });
  this.route('i-i-s-sonya-7-расход-денег-l');
  this.route('i-i-s-sonya-7-расход-денег-e',
  { path: 'i-i-s-sonya-7-расход-денег-e/:id' });
  this.route('i-i-s-sonya-7-расход-денег-e.new',
  { path: 'i-i-s-sonya-7-расход-денег-e/new' });
  this.route('i-i-s-sonya-7-регистр-оборот-l');
  this.route('i-i-s-sonya-7-регистр-оборот-e',
  { path: 'i-i-s-sonya-7-регистр-оборот-e/:id' });
  this.route('i-i-s-sonya-7-регистр-оборот-e.new',
  { path: 'i-i-s-sonya-7-регистр-оборот-e/new' });
  this.route('i-i-s-sonya-7-товары-l');
  this.route('i-i-s-sonya-7-товары-e',
  { path: 'i-i-s-sonya-7-товары-e/:id' });
  this.route('i-i-s-sonya-7-товары-e.new',
  { path: 'i-i-s-sonya-7-товары-e/new' });
  this.route('i-i-s-sonya-7-услуги-l');
  this.route('i-i-s-sonya-7-услуги-e',
  { path: 'i-i-s-sonya-7-услуги-e/:id' });
  this.route('i-i-s-sonya-7-услуги-e.new',
  { path: 'i-i-s-sonya-7-услуги-e/new' });
  this.route('i-i-s-sonya-7-финансисты-l');
  this.route('i-i-s-sonya-7-финансисты-e',
  { path: 'i-i-s-sonya-7-финансисты-e/:id' });
  this.route('i-i-s-sonya-7-финансисты-e.new',
  { path: 'i-i-s-sonya-7-финансисты-e/new' });
});

export default Router;
