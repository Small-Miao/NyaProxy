const { ElementType } = require('./wsCmdElementType'); // 引入 ElementType
const { WSCmdHitCounter, WSCmdStatusCheck, WSCmdCountCheck, WSCmdDistanceCheck, Vector3 ,Vector4} = require('./wsCmdAdditional');

class WSCmdDrawArgs {
  constructor() {
    this.drawTarget = 0; // 使用 BigInt 模拟 C# 的 ulong
    this.castTarget = null; // 可选的 ulong
    this.drawType = ElementType.Omen; // 使用 ElementType 枚举
    this.drawAvfx = ""; // 字符串
    this.refX = 0.0;
    this.refY = 0.0;
    this.refZ = 0.0;
    this.radiusX = 3.0;
    this.radiusY = 10.0;
    this.radiusZ = 3.0;
    this.refOffsetX = 0.0;
    this.refOffsetY = 0.0;
    this.refOffsetZ = 0.0;
    this.refRotation = 0.0;
    this.fixRotation = false;
    this.omenTarget = null; // 可选的 ulong
    this.targetPosition = new Vector3(); // 使用 Vector3
    this.drawOnObject = true;
    this.alwaysFaceCurrentTarget = false;
    this.alwaysDrawOnCurrentTarget = false;
    this.endToTarget = false;
    this.drawUseObjectPoint = false;
    this.destroyTime = 3000.0;
    this.delayDrawTime = 0.0;
    this.refRadian = 1.0;
    this.refColor = new Vector4();
    this.refTargetColor = new Vector4();

    this.DistanceCheck = null; // 使用 WSCmdDistanceCheck
    this.HitCounter = null; // 使用 WSCmdHitCounter
    this.StatusCheck = null; // 初始化 WSCmdStatusCheck
    this.TetherCheck = null; // 假设为其他自定义类
    this.CountCheck = null; // 使用 WSCmdCountCheck
  }
}

module.exports = { WSCmdDrawArgs, Vector3 ,Vector4};
