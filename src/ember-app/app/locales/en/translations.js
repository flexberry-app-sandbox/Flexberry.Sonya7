import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSonya_7КлиентыLForm from './forms/i-i-s-sonya-7-клиенты-l';
import IISSonya_7МатериалыLForm from './forms/i-i-s-sonya-7-материалы-l';
import IISSonya_7ПоставщикиLForm from './forms/i-i-s-sonya-7-поставщики-l';
import IISSonya_7ПриходДенегLForm from './forms/i-i-s-sonya-7-приход-денег-l';
import IISSonya_7РасходДенегLForm from './forms/i-i-s-sonya-7-расход-денег-l';
import IISSonya_7РегистрОборотLForm from './forms/i-i-s-sonya-7-регистр-оборот-l';
import IISSonya_7ТоварыLForm from './forms/i-i-s-sonya-7-товары-l';
import IISSonya_7УслугиLForm from './forms/i-i-s-sonya-7-услуги-l';
import IISSonya_7ФинансистыLForm from './forms/i-i-s-sonya-7-финансисты-l';
import IISSonya_7КлиентыEForm from './forms/i-i-s-sonya-7-клиенты-e';
import IISSonya_7МатериалыEForm from './forms/i-i-s-sonya-7-материалы-e';
import IISSonya_7ПоставщикиEForm from './forms/i-i-s-sonya-7-поставщики-e';
import IISSonya_7ПриходДенегEForm from './forms/i-i-s-sonya-7-приход-денег-e';
import IISSonya_7РасходДенегEForm from './forms/i-i-s-sonya-7-расход-денег-e';
import IISSonya_7РегистрОборотEForm from './forms/i-i-s-sonya-7-регистр-оборот-e';
import IISSonya_7ТоварыEForm from './forms/i-i-s-sonya-7-товары-e';
import IISSonya_7УслугиEForm from './forms/i-i-s-sonya-7-услуги-e';
import IISSonya_7ФинансистыEForm from './forms/i-i-s-sonya-7-финансисты-e';
import IISSonya_7КлиентыModel from './models/i-i-s-sonya-7-клиенты';
import IISSonya_7МатериалыModel from './models/i-i-s-sonya-7-материалы';
import IISSonya_7ПереченьМатModel from './models/i-i-s-sonya-7-перечень-мат';
import IISSonya_7ПереченьТоваровModel from './models/i-i-s-sonya-7-перечень-товаров';
import IISSonya_7ПереченьУслугModel from './models/i-i-s-sonya-7-перечень-услуг';
import IISSonya_7ПоставщикиModel from './models/i-i-s-sonya-7-поставщики';
import IISSonya_7ПриходДенегModel from './models/i-i-s-sonya-7-приход-денег';
import IISSonya_7РасходДенегModel from './models/i-i-s-sonya-7-расход-денег';
import IISSonya_7РегистрОборотModel from './models/i-i-s-sonya-7-регистр-оборот';
import IISSonya_7СоставТовараModel from './models/i-i-s-sonya-7-состав-товара';
import IISSonya_7ТоварыModel from './models/i-i-s-sonya-7-товары';
import IISSonya_7УслугиModel from './models/i-i-s-sonya-7-услуги';
import IISSonya_7ФинансистыModel from './models/i-i-s-sonya-7-финансисты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sonya-7-клиенты': IISSonya_7КлиентыModel,
    'i-i-s-sonya-7-материалы': IISSonya_7МатериалыModel,
    'i-i-s-sonya-7-перечень-мат': IISSonya_7ПереченьМатModel,
    'i-i-s-sonya-7-перечень-товаров': IISSonya_7ПереченьТоваровModel,
    'i-i-s-sonya-7-перечень-услуг': IISSonya_7ПереченьУслугModel,
    'i-i-s-sonya-7-поставщики': IISSonya_7ПоставщикиModel,
    'i-i-s-sonya-7-приход-денег': IISSonya_7ПриходДенегModel,
    'i-i-s-sonya-7-расход-денег': IISSonya_7РасходДенегModel,
    'i-i-s-sonya-7-регистр-оборот': IISSonya_7РегистрОборотModel,
    'i-i-s-sonya-7-состав-товара': IISSonya_7СоставТовараModel,
    'i-i-s-sonya-7-товары': IISSonya_7ТоварыModel,
    'i-i-s-sonya-7-услуги': IISSonya_7УслугиModel,
    'i-i-s-sonya-7-финансисты': IISSonya_7ФинансистыModel
  },

  'application-name': 'Sonya_7',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sonya_7',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sonya_7',
          title: 'Sonya_7'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'sonya-7': {
          caption: 'Sonya_7',
          title: 'Sonya_7',
          'i-i-s-sonya-7-поставщики-l': {
            caption: 'Поставщики',
            title: ''
          },
          'i-i-s-sonya-7-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-sonya-7-расход-денег-l': {
            caption: 'Расход денег',
            title: ''
          },
          'i-i-s-sonya-7-приход-денег-l': {
            caption: 'Приход денег',
            title: ''
          },
          'i-i-s-sonya-7-финансисты-l': {
            caption: 'Финансисты',
            title: ''
          },
          'i-i-s-sonya-7-регистр-оборот-l': {
            caption: 'Регистр оборот',
            title: ''
          },
          'i-i-s-sonya-7-материалы-l': {
            caption: 'Материалы',
            title: ''
          },
          'i-i-s-sonya-7-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-sonya-7-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-sonya-7-клиенты-l': IISSonya_7КлиентыLForm,
    'i-i-s-sonya-7-материалы-l': IISSonya_7МатериалыLForm,
    'i-i-s-sonya-7-поставщики-l': IISSonya_7ПоставщикиLForm,
    'i-i-s-sonya-7-приход-денег-l': IISSonya_7ПриходДенегLForm,
    'i-i-s-sonya-7-расход-денег-l': IISSonya_7РасходДенегLForm,
    'i-i-s-sonya-7-регистр-оборот-l': IISSonya_7РегистрОборотLForm,
    'i-i-s-sonya-7-товары-l': IISSonya_7ТоварыLForm,
    'i-i-s-sonya-7-услуги-l': IISSonya_7УслугиLForm,
    'i-i-s-sonya-7-финансисты-l': IISSonya_7ФинансистыLForm,
    'i-i-s-sonya-7-клиенты-e': IISSonya_7КлиентыEForm,
    'i-i-s-sonya-7-материалы-e': IISSonya_7МатериалыEForm,
    'i-i-s-sonya-7-поставщики-e': IISSonya_7ПоставщикиEForm,
    'i-i-s-sonya-7-приход-денег-e': IISSonya_7ПриходДенегEForm,
    'i-i-s-sonya-7-расход-денег-e': IISSonya_7РасходДенегEForm,
    'i-i-s-sonya-7-регистр-оборот-e': IISSonya_7РегистрОборотEForm,
    'i-i-s-sonya-7-товары-e': IISSonya_7ТоварыEForm,
    'i-i-s-sonya-7-услуги-e': IISSonya_7УслугиEForm,
    'i-i-s-sonya-7-финансисты-e': IISSonya_7ФинансистыEForm
  },

});

export default translations;
