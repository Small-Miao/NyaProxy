// 定义 WSCmdType 枚举
const WSCmdType = {
    Draw: "Draw",
    SimpleElement: "SimpleElement",
    SimpleLockon: "SimpleLockon",
    CheckObject: "CheckObject",
    GetObjectList: "GetObjectList"
  };
  
  // 定义 WsCommand 类
  class WsCommand {
    constructor(commandType, commandArgs = '') {
      this.CommandType = commandType; // WSCmdType 枚举
      this.CommandArgs = commandArgs; // 字符串参数，默认空字符串
    }
  }
  
  module.exports = { WsCommand, WSCmdType };
  