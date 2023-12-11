import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.sonya-7.caption'),
          title: i18n.t('forms.application.sitemap.sonya-7.title'),
          children: [{
            link: 'i-i-s-sonya-7-поставщики-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-поставщики-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-sonya-7-клиенты-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-клиенты-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-sonya-7-расход-денег-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-расход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-расход-денег-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-sonya-7-приход-денег-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-приход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-приход-денег-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-sonya-7-финансисты-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-финансисты-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-финансисты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-sonya-7-регистр-оборот-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-регистр-оборот-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-регистр-оборот-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-sonya-7-материалы-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-материалы-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-sonya-7-товары-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-товары-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-sonya-7-услуги-l',
            caption: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya-7.i-i-s-sonya-7-услуги-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})