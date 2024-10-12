// 定义 WSCmdHitCounter 类
class WSCmdHitCounter {
    constructor() {
      this.ActionID = 0; // uint
      this.ActionIdList = new Set(); // 使用 Set 模拟 HashSet
      this.TargetHitCount = 1; // int
      this.HitTarget = null; // 可选的 uint
    }
  }
  
  // 定义 WSCmdStatusCheck 类
  class WSCmdStatusCheck {
    constructor(checkObject, status) {
      this.CheckObject = checkObject; // required ulong
      this.Status = status; // required uint
      this.Reverse = false; // 默认值 false
    }
  }
  
  // 定义 WSCmdCountCheck 类
  class WSCmdCountCheck {
    constructor(checkObject) {
      this.CheckObject = checkObject; // required ulong
      this.Count = 0; // 默认值 0
      this.SafeAlpha = 0.4; // 默认 alpha 值
    }
  }
  
  // 定义 Vector3 类
  class Vector3 {
    constructor(x = -1, y = -1, z = -1) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    static Negate(v) {
      return new Vector3(-v.x, -v.y, -v.z);
    }
  
    static One() {
      return new Vector3(1, 1, 1);
    }
  }

  class Vector4 {
    constructor(x = 1, y = 1, z = 1, w = 1) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }
  }
  // 定义 WSCmdDistanceCheck 类
  class WSCmdDistanceCheck {
    constructor() {
      this.OmenOwner = null; // 可选的 ulong
      this.CheckObject = null; // 可选的 ulong
      this.CheckType = -1; // 默认值 -1
      this.Count = 1; // 默认值 1
      this.Position = Vector3.Negate(Vector3.One()); // 默认 Vector3 负值
    }
  }
  
  module.exports = {
    WSCmdHitCounter,
    WSCmdStatusCheck,
    WSCmdCountCheck,
    WSCmdDistanceCheck,
    Vector3,
    Vector4
  };
  