const TelegramBot = require('node-telegram-bot-api');

const token = '7500151367:AAFW0mljOCm7jfyp5i6FRX24ky6XAkb1YgM';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://sky-game.cfd/yL7KyPGf"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://sky-game.cfd/yL7KyPGf",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home-2.jpg');
            await bot.sendMessage(chatId, " 🔥 Casino.ru рекомендует: играй на Dragon Money прямо в Telegram 🔥\n\nСоветуем оценить преимущества казино с лицензией Кюрасао, эксклюзивами и пре-релизами мировых новинок раньше всех! На сайте топовые условия:\n\n🔸 не требуется верификация;\n🔸 безлимитные выплаты;\n🔸 большой выбор платежных систем;\n🔸 поддержка пользователей 24/7;\n🔸 еженедельный кешбэк 10%;\n🔸 более 7 000 слотов со средним RTP 97%.\n\nЕсли любишь азарт и мани — играй на Dragon Money. Жми на кнопку «СТАРТ» 👇🏻", menu_game) 
        }
    }
    startBot()
})