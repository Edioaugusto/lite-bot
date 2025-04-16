/**
 * Menus
 *
 * @author Dev Gui </>
 */
const { BOT_NAME, PREFIX } = require("../config");

exports.menu = () => {
  const date = new Date();

  return `╭━━⪩ 𝐁𝐄𝐌 𝐕𝐈𝐍𝐃𝐎! ⪨━━
▢
▢ • ${BOT_NAME}
▢ • Data: ${date.toLocaleDateString("pt-mz")}
▢ • Hora: ${date.toLocaleTimeString("pt-mz")}
▢ • Prefixo: ${PREFIX}
▢
╰━━─「🪐」─━━

╭━━⪩ 𝐃𝐎𝐍𝐎 ⪨━━
▢
▢ • ${PREFIX}off
▢ • ${PREFIX}on
▢
╰━━─「🌌」─━━

╭━━⪩ 𝐀𝐃𝐌𝐈𝐍𝐒 ⪨━━
▢
▢ • ${PREFIX}anti-link (1/0)
▢ • ${PREFIX}ban
▢ • ${PREFIX}hidetag
▢ • ${PREFIX}welcome (1/0)
▢
╰━━─「⭐」─━━

╭━━⪩ 𝐌𝐄𝐍𝐔 ⪨━━
▢
▢ • ${PREFIX}attp
▢ • ${PREFIX}cep
▢ • ${PREFIX}gpt-4
▢ • ${PREFIX}image
▢ • ${PREFIX}ping
▢ • ${PREFIX}play-audio
▢ • ${PREFIX}play-video
▢ • ${PREFIX}sticker
▢ • ${PREFIX}ttp
▢
╰━━─「🚀」─━━`;
};
