let baseConfig = {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    starSigns: 'Aries_Taurus_Gemini_Cancer_Leo_Virgo_Libra_Scorpio_Sagittarius_Capricorn_Aquarius_Pisces'.split('_'),
    ampm: 'am_pm'.split('_'),
    ordinal: (val) => {
        let num = Number(val);
        let n = num % 10;
        let ord = (Math.floor(num % 100 / 10) === 1) ? 'th' :
          (n === 1) ? 'st' :
          (n === 2) ? 'nd' :
          (n === 3) ? 'rd' :
          'th';
        return num + ord;
    },
};

class Locale {
    constructor(name, config) {
        Object.assign(this, config);
        this._abbr = name;
        this._config = config;
    }
}

let locales = new class Locales {
    constructor() {
        this.locales = new Map();
        this.localeFamilies = new Map();
    }
    
    delete(name) {
        return this.locales.delete(name);
    }
    get(name) {
        return this.locales.get(name);
    }
    has(name) {
        return this.locales.has(name);
    }
    set(name, config) {
        let { locales, localeFamilies } = this;
        
        let parentConfig = baseConfig;
        if (Object.hasOwnProperty.call(config, 'parentLocale'))
        {
          let parentLocale = config.parentLocale;
          if (locales.has(parentLocale))
            parentConfig = locales.get(parentLocale)._config;
          else
          {
            if (!localeFamilies.has(parentLocale))
              localeFamilies.set(parentLocale, []);
            localeFamilies.get(parentLocale).push({ name_: name, config_: config });
            return null;
          }
        }
        
        let locale = new Locale(name, Object.assign({}, parentConfig, config));
        locales.set(name, locale);
        if (localeFamilies.has(name))
        {
          for (let { name_, config_ } of localeFamilies.get(name))
            this.set(name_, config_);
          localeFamilies.delete(name);
        }
        
        return locale;
    }
}();

locales.set('de', {
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    starSigns: 'Widder_Stier_Zwillinge_Krebs_Löwe_Jungfrau_Waage_Skorpion_Schütze_Steinbock_Wassermann_Fische'.split('_'),
    ordinal: (val) => val + '.',
});
locales.set('en', {});
locales.set('la', {
    months: 'Ianuarius_Februarius_Martius_Aprilis_Maius_Iunius_Iulius_Augustus_September_October_November_December'.split('_'),
    monthsShort: 'Ian._Febr._Mart._Apr._Mai._Iun._Iul._Aug._Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Solis_Lunae_Martis_Mercurii_Iovis_Veneris_Saturni'.split('_'),
    weekdaysShort: 'So._Lu._Ma._Me._Io._Ve._Sa.'.split('_'),
    weekdaysMin: 'So_Lu_Ma_Me_Io_Ve_Sa'.split('_'),
    starSigns: 'Aries_Taurus_Gemini_Cancer_Leo_Virgo_Libra_Scorpio_Sagittarius_Capricornus_Aquarius_Pisces'.split('_'),
    ordinal: (val) => val + '.',
});


module.exports = locales;