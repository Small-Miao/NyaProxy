const { Vector4 } = require('./wsCmdAdditional');
const GroundOmen = {
    // 自定义
    customFan: "customFan",
    customCircle: "customCircle",
    customDonut: "customDonut",
    customRect: "customRect",
    customRect2: "customRect2",

    // 圆形
    Circle: "general_1bxf",
    CircleEr: "er_general_1f",
    CircleFriend: "s5p5_general_blue_01e1",

    // 长方形
    Rectangle: "general02xf",
    RectangleEr: "er_general02f",
    Rectangle2: "general_x02f",

    // 扇形
    Fan015: "gl_fan015_0x",
    Fan020: "gl_fan020_0f",
    Fan030: "gl_fan030_1bf",
    Fan045: "gl_fan045_1bf",
    Fan060: "gl_fan060_1bf",
    Fan060Er: "er_gl_fan060_1bf",
    Fan080: "gl_fan80_o0g",
    Fan090: "gl_fan090_1bf",
    Fan090Er: "er_gl_fan090_1bf",
    Fan120: "gl_fan120_1bf",
    Fan120Er: "er_gl_fan120_1bf",
    Fan130: "gl_fan130_0x",
    Fan135: "gl_fan135_c0g",
    Fan145: "m0501_fan145_d1",
    Fan150: "gl_fan150_1bf",
    Fan150Er: "er_gl_fan150_1bt",
    Fan180: "gl_fan180_1bf",
    Fan180Er: "er_gl_fan180_1bf",
    Fan210: "gl_fan210_1bf",
    Fan240: "x6d3_b1_fan240_p1",
    Fan270: "gl_fan270_0100af",
    Fan270Er: "er_gl_fan270_1bf",

    // 月环
    Sircle06: "gl_sircle_5003bf",
    Sircle08: "gl_sircle_7006x",
    Sircle10: "gl_sircle_4004bp1",
    Sircle11: "gl_sircle_1034bf",
    Sircle13: "gl_sircle_4005bf",
    Sircle15: "gl_circle4006_o0g",
    Sircle15Er: "er_sircle_4006_o0d1",
    Sircle17: "gl_sircle_6010ax",
    Sircle18: "gl_sircle_1703x",
    Sircle20: "gl_sircle_4008ah1",
    Sircle21: "gl_sircle_7015k1",
    Sircle23: "gl_sircle_3007bx",
    Sircle25: "gl_sicle_4010r1",
    Sircle25Er: "er_sicle_4010_n1",
    Sircle27: "gl_sircle_3008bf",
    Sircle28: "gl_sircle_1805r1",
    Sircle30Er: "er_sicle_2006_n1",
    Sircle33: "gl_sircle_1505bt1",
    Sircle38: "gl_sircle_0803c",
    Sircle40: "gl_sircle_2008bi",
    Sircle40Er: "er_sicle_1004r1",
    Sircle42Er: "er_sicle_1205f",
    Sircle47: "gl_sircle_3014bf",
    Sircle50: "gl_sircle_3015ac",
    Sircle50Er: "er_sicle_2010t",
    Sircle55: "gl_sircle_2011v",
    Sircle57: "gl_sircle_3520x",
    Sircle61Er: "er_sicle_1811t",
    Sircle67: "gl_sircle_3020bf",
    Sircle67Er: "er_sicle_3020t",
    Sircle75: "gl_sircle_2015bx",
    Sircle82: "gl_sircle_1109w",
    Sircle86: "gl_sircle_1412w",
    Sircle88: "gl_sircle_1715w",
    Sircle90: "gl_sircle_2018w",

    // 60°扇形月环
    Fan060_20: "gl_fan_o60h30m6p",
    Fan180_25: "gl_fan180_4010c",
    Fan060_38: "gl_fan_o60h16m6p",
    Fan060_61: "gl_fan_o60h23m14p",
    Fan060_70: "gl_fan_o60h30m21p",

    // 270°扇形
    Fan270_0100: "gl_fan270_0100af",
    Fan270_42: "gl_fan270_1908at",
    Fan270_50: "gl_fan270_1005af",
    Fan270_67: "gl_fan270_1510af",

    // 单人塔
    SingleTower: "m0119_trap_02t",
    SingleTowerShare: "share_trap01k1",
    WhiteTower: "co_trap00h1",

    // 击退
    KnockBack: "m0501_nockback_omen01d1",

    // 三角形
    Triangle30: "x6d3_b2_triangle30_p1",
    Triangle60: "x6d3_b2_triangle60_p1",
    Triangle90: "x6d3_b2_triangle90_p1",

    // 颜色
    enemyColor: new Vector4(1.0, 0.8, 0.2, 1.0),
    friendColor: new Vector4(0.7, 0.9, 1.0, 1.0),
    Red: new Vector4(1, 0, 0, 1),
    Yellow: new Vector4(1, 1, 0, 1),
    Blue: new Vector4(0, 0, 1, 1),

    // Friendly 子结构
    Friendly: {
        BasicCircle: "general_1bpf",
        Circle: "general_1bpxf",
        Rectangle: "general02pxf",
        Rectangle2: "general_x02pf",
        Fan020: "gl_fan020_0pt",
        Fan030: "gl_fan030_1bpf",
        Fan045: "gl_fan045_1bpxf",
        Fan060: "gl_fan060_1bpf",
        BasicFan090: "gl_fan090_1bpf",
        Fan090: "gl_fan090_1bpxf",
        Fan120: "gl_fan120_1bpxf",
        Fan150: "gl_fan150_1bpf"
    }
};

module.exports = { GroundOmen };
