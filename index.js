const fs = require('fs');
const WebSocket = require('ws');
const path = require('path');
const { WSMsg, WSMsgType } = require('./wsMsg');
const BaseScript = require(path.join(process.cwd(),'./wsCmd/BaseScript'));
const { log } = require('console');


if (!fs.existsSync(path.join(process.cwd(), 'config.json'))) {
    Log('ERROR', 'Config file not found.');
    process.exit(1);
}
let scripts = {};
const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config.json')));
const scriptDir = path.join(process.cwd(), 'scripts');
Log('INFO', 'Config file loaded.');
Log('INFO', 'WS server: ' + config.server);
const WebSocketClient = new WebSocket(config.server);
let openEventDisplay = false;
if(process.argv.length > 0 && process.argv.indexOf('-v')!= -1)
    openEventDisplay = true;


WebSocketClient.on('open', () => {
    Log('INFO', 'WebSocket connected.');
    loadScripts(scriptDir);
    Log('INFO', '事件系统已经开启！');
    WebSocketClient.on('message', (data) => {
        try {
            const msg = JSON.parse(data);
            if (msg && msg.EventType && WSMsgType[msg.EventType]) {
                const wsMsg = new WSMsg(msg.MsgTime, msg.TerritoryType,msg.PlayerGameObjectID, msg.WeatherID, msg.EventType, msg.EventArgs);
                if(openEventDisplay)
                    Log('INFO', `收到事件: ${msg.EventType}| ${JSON.stringify(msg.EventArgs)} | ${msg.PlayerGameObjectID} | ${msg.TerritoryType} | ${msg.WeatherID}`);
                for (const scriptPath in scripts) {
                    const script = scripts[scriptPath];
                    script._playerGameObjectID = wsMsg.playerGameObjectID;
                    if (script[wsMsg.eventType]) {
                        if(script.TerritoryType != 0 &&script.TerritoryType != wsMsg.territoryType) continue;
                        if(script.WeatherID != 0 && script.WeatherID == wsMsg.weatherID) continue;
                        if(script._actionID.length != 0 && script._actionID.indexOf(wsMsg.eventArgs.ActionId) == -1) continue;
                        script[wsMsg.eventType](wsMsg.eventArgs);
                    }
                }
            }
        } catch (e) {
            Log('ERROR', e.stack);
        }
    });

    WebSocketClient.on('close', () => {
        Log('INFO', 'WebSocket disconnected. reconnecting...');
    });
});

WebSocketClient.on('error', (err) => {
    Log('ERROR','Connect WebSocket Fail! Retry...' + err);
});


function loadScripts(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return;
        }
        files.forEach(file => {
            const fullPath = path.join(dirPath, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                loadScripts(fullPath);
            } else if (!fs.lstatSync(fullPath).isDirectory()) {
                if (fullPath.endsWith('.js')) {
                    loadScript(fullPath);
                }
            }
        })
    });
}

function loadScript(fullPath) {
    if (fs.lstatSync(fullPath).isDirectory()) {
        loadScripts(fullPath);
    } else if (fullPath.endsWith('.js')) {
        delete require.cache[require.resolve(fullPath)];
        try {
            const script = require(fullPath);
            // 检查是否继承了 BaseScript
            if (script instanceof BaseScript) {
                const relativePath = path.relative(process.cwd(), fullPath);
                scripts[relativePath] = script;
                Log('INFO', `加载脚本: ${relativePath}`);
                scripts[relativePath].WebSocket = WebSocketClient;
            } else {
                Log('WARN', `脚本 ${fullPath} 未继承 BaseScript，跳过加载`);
            }
        } catch (error) {
            Log('ERROR', `加载脚本 ${fullPath} 失败:` + error);
        }
    }
}

fs.watch(path.join(process.cwd(), 'scripts'), { recursive: true }, (eventType, filename) => {
    if (!filename.endsWith('.js')) return;
    if (eventType == 'change') {
        const fullPath = path.join(scriptDir, filename);
        Log('INFO', `检测到脚本更新: ${filename}`);
        loadScript(fullPath)
    } else if (eventType == 'rename') {
        Log('INFO', `检测到脚本删除: ${filename}`);
        delete scripts[filename];
    }

});

function Log(level, message) {
    console.log(`[${level}][${Date.now()}] ${message}`);
}