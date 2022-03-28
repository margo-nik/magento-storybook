const { spawn } = require('child_process');

module.exports = function () {
    const config = spawn('php', ['bin/magento', 'config:show', 'general/locale/code']);
    const { LANG_MAGE:LANG_ENV } = process.env;

    return new Promise(resolve => {
        config.stdout.on('data', msg => {
            const LOCALE_CONFIG = msg.toString().trim();
            let result = LOCALE_CONFIG.length === 5 ?
                LOCALE_CONFIG : LANG_ENV;

                resolve(result);
        });

        config.stderr.on('data', msg => {
            resolve(LANG_ENV);
        });
    });
};
