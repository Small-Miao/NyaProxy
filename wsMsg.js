const WSMsgType = {
    OnActionCast: "OnActionCast",
    OnAbilityCast: "OnAbilityCast",
    OnVfxCreate: "OnVfxCreate",
    OnActorPlayerActionTimeLineEvent: "OnActorPlayerActionTimeLineEvent",
    OnChatMessage: "OnChatMessage",
    OnActorTetherEvent: "OnActorTetherEvent",
    OnActorTetherCancelEvent: "OnActorTetherCancelEvent",
    OnTargetIconEvent: "OnTargetIconEvent",
    OnHeaderMarkerChangeEvent: "OnHeaderMarkerChangeEvent",
    OnObjectCreatedEvent: "OnObjectCreatedEvent",
    OnMapEffect: "OnMapEffect",
    OnEnvControl: "OnEnvControl",
    OnAddStatus: "OnAddStatus",
    OnRemoveStatus: "OnRemoveStatus",
    UpdateObjectList: "UpdateObjectList"
  };
  
  class WSMsg {
    constructor(msgTime, territoryType,playerGameObjectID, weatherID, eventType, eventArgs) {
      this.msgTime = msgTime; // 消息时间
      this.territoryType = territoryType; // ushort
      this.playerGameObjectID = playerGameObjectID;
      this.weatherID = weatherID; // uint
      this.eventType = eventType; // WSMsgType
      this.eventArgs = eventArgs; // object
    }
  }
  
  module.exports = { WSMsg, WSMsgType };
  