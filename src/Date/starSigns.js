let find = require('../Object/find');
let locales = require('./locales');
let from = require('./from');
let inRange = require('./inRange');


let starSigns = {
    Aries: {
        symbol: '♈',
        range: ['21.03', '20.04'],
        _id: 0,
    },
    Taurus: {
        symbol: '♉',
        range: ['21.04', '21.05'],
        _id: 1,
    },
    Gemini: {
        symbol: '♊',
        range: ['22.05', '21.06'],
        _id: 2,
    },
    Cancer: {
        symbol: '♋',
        range: ['22.06', '22.07'],
        _id: 3,
    },
    Leo: {
        symbol: '♌',
        range: ['23.07', '22.08'],
        _id: 4,
    },
    Virgo: {
        symbol: '♍',
        range: ['23.08', '22.09'],
        _id: 5,
    },
    Libra: {
        symbol: '♎',
        range: ['23.09', '22.10'],
        _id: 6,
    },
    Scorpio: {
        symbol: '♏',
        range: ['23.10', '22.11'],
        _id: 7,
    },
    Sagittarius: {
        symbol: '♐',
        range: ['23.11', '20.12'],
        _id: 8,
    },
    Capricorn: {
        symbol: '♑',
        range: ['21.12', '19.01'],
        _id: 9,
    },
    Aquarius: {
        symbol: '♒',
        range: ['20.01', '18.02'],
        _id: 10,
    },
    Pisces: {
        symbol: '♓',
        range: ['19.02', '20.03'],
        _id: 11,
    },
};
for (let starSign of Object.values(starSigns))
  Object.defineProperty(starSign, '_id', { enumerable: false });

/**
 * Finds the star sign which belongs to a specific date.
 *
 * @param {(Date|DateLike)} date A date.
 * @param {(string|Object)} [i18n='en'] A locales abbreviation or locale object.
 * @returns {Object} The star sign object.
 */
starSigns.getStarSign = (date, i18n = 'en') => {
    date = from(date);
    if (typeof i18n === 'string')
      i18n = locales.get(i18n);
    
    let year = date.getFullYear();
    let starSign = find(starSigns, ({ range }) => {
        let [startDate, startMonth] = range[0].split('.').map(Number);
        let [endDate, endMonth] = range[1].split('.').map(Number);
        return inRange(
            date,
            new Date(year, startMonth - 1, startDate),
            new Date((endMonth >= startMonth) ? year : year + 1, endMonth - 1, endDate)
        );
    });
    return Object.assign({}, starSign, { name: i18n.starSigns[starSign._id] });
};
Object.defineProperty(starSigns, 'getStarSign', { enumerable: false });


module.exports = starSigns;