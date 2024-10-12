const path = require('path');
const { WsCommand, WSCmdType, WSCmdDrawArgs, ElementType, Vector3, Vector4 ,GroundOmen} = require('./');

class BaseScript {
    constructor() {
        if (this.constructor === BaseScript) {
            throw new Error("BaseScript 是抽象类，不能被实例化");
        }
        this._territoryType = 0;
        this._actionID = [];
        this._weatherID = 0;
        this._numCasts = 0;
        this._canDraw = false;
        this._webSocket = null;
        this._playerGameObjectID = undefined;
    }
    get TerritoryType() {
       return this._territoryType;
    }

    // 抽象的 ActionID 属性
    get ActionID() {
        return this._actionID;
    }

    get WeatherID() {
        return this._weatherID;
    }

    // 读取 NumCasts
    get NumCasts() {
        return this._numCasts;
    }

    // 设置 NumCasts
    set NumCasts(value) {
        this._numCasts = value;
    }

    // 读取 CanDraw
    get CanDraw() {
        return this._canDraw;
    }

    // 设置 CanDraw
    set CanDraw(value) {
        this._canDraw = value;
    }

    set WebSocket(value) {
        this._webSocket = value;
    }

    get WebSocket() {
        return this._webSocket;
    }


    OnActionCast(info){

    }

    OnAbilityCast(info){

    }

    OnVfxCreate(info){

    }

    OnActorPlayerActionTimeLineEvent(info){

    }

    OnChatMessage(info){

    }

    OnActorTetherEvent(info){

    }

    OnActorTetherCancelEvent(info){

    }

    OnTargetIconEvent(info){

    }

    OnHeaderMarkerChangeEvent(info){

    }

    OnObjectCreatedEvent(info){

    }

    OnMapEffect(info){

    }

    OnEnvControl(info){

    }

    OnAddStatus(info){

    }

    OnRemoveStatus(info){

    }

    DrawAvfx(drawOption){
        var command = new WsCommand(WSCmdType.Draw,JSON.stringify(drawOption));
        this.WebSocket.send(JSON.stringify(command));
    }
}

module.exports = BaseScript;