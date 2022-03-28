const getLocale = require('./get-static-locale');
const AFTER_WORD_CUT = 'design';
const LENGTH_SLASH = 1;
const COUNT_SYMBOLS = AFTER_WORD_CUT.length + LENGTH_SLASH;
const ROOT_PATH = process.cwd();


module.exports = async function (path) {
    const whereDelete = path.indexOf(AFTER_WORD_CUT);
    const themePath = path.slice(whereDelete + COUNT_SYMBOLS);
    let currentLocal = await getLocale();
    return `${ROOT_PATH}/pub/static/${themePath}/${currentLocal}`;
};
