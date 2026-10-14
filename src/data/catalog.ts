export type ProductSpec = { label: string; value: string };
export type SpecificationGroup = { name: string; rows: ProductSpec[] };

export type Product = {
  slug: string;
  name: string;
  englishName: string;
  category: string;
  tagline: string;
  description: string;
  positioning: string;
  image: string;
  features: string[];
  specs: ProductSpec[];
  useCases: string[];
  highlights: string[];
  cta: string;
  seoTitle: string;
  seoDescription: string;
  kind: 'car' | 'accessory';
  family: string;
  tier: string;
  badge: string;
  priceCNY: number;
  shortDescription: string;
  gallery: string[];
  keyStats: ProductSpec[];
  specificationGroups: SpecificationGroup[];
  inBox: string[];
  relatedAccessories: string[];
};

export type ProductFamily = {
  slug: string;
  name: string;
  group: 'consumer' | 'industry' | 'accessory';
  image: string;
  description: string;
};

export const families: ProductFamily[] = [
  {
    "slug": "sprint",
    "name": "Sprint",
    "group": "consumer",
    "image": "/images/cars/sprint.webp",
    "description": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。"
  },
  {
    "slug": "omni",
    "name": "Omni",
    "group": "consumer",
    "image": "/images/cars/omni.webp",
    "description": "麦克纳姆轮带来横移、转向与旋转，连接创意玩法和路径编程。"
  },
  {
    "slug": "rover",
    "name": "Rover",
    "group": "consumer",
    "image": "/images/cars/rover.webp",
    "description": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。"
  },
  {
    "slug": "drift",
    "name": "Drift",
    "group": "consumer",
    "image": "/images/cars/drift.webp",
    "description": "低重心车身配合漂移轮胎，适合在平整模型赛道练习转向与控速。"
  },
  {
    "slug": "maker",
    "name": "Maker",
    "group": "industry",
    "image": "/images/cars/maker.webp",
    "description": "开放式拼装底盘与控制板，让线路连接、传感器读取和小车程序变得直观。"
  },
  {
    "slug": "vision",
    "name": "Vision",
    "group": "industry",
    "image": "/images/cars/vision.webp",
    "description": "前置相机与车载计算模块，围绕颜色识别、图案跟随和第一视角探索设计项目。"
  },
  {
    "slug": "circuit",
    "name": "Circuit",
    "group": "consumer",
    "image": "/images/cars/circuit.webp",
    "description": "方程式风格车壳、清晰的转向反馈与迷你围栏组合，适合遥控竞速体验。"
  },
  {
    "slug": "cargo",
    "name": "Cargo",
    "group": "industry",
    "image": "/images/cars/cargo.webp",
    "description": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。"
  },
  {
    "slug": "transform",
    "name": "Transform",
    "group": "industry",
    "image": "/images/cars/transform.webp",
    "description": "模块化车身和可调安装位置，用轮式结构组合探索、搭建与编程玩法。"
  },
  {
    "slug": "power",
    "name": "电池与充电",
    "group": "accessory",
    "image": "/images/accessories/smart-battery.webp",
    "description": "补充电池与匹配充电器，让玩乐安排更从容。"
  },
  {
    "slug": "sensing",
    "name": "感知与编程",
    "group": "accessory",
    "image": "/images/accessories/sensor-pack.webp",
    "description": "让传感器与控制板成为创意的新入口。"
  },
  {
    "slug": "components",
    "name": "遥控与组件",
    "group": "accessory",
    "image": "/images/accessories/remote-controller.webp",
    "description": "从遥控器、驱动电机到小夹爪，拓展车类玩法。"
  }
];

export const carProducts: Product[] = [
  {
    "slug": "sprint-mini",
    "name": "RobotCar Sprint 迷你遥控车",
    "englishName": "SPRINT / MINI",
    "category": "遥控互动",
    "tagline": "迷你身形，释放驾驶灵感。",
    "description": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。迷你遥控车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/sprint.webp",
    "features": [
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "300 × 165 × 110 mm"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "后轮双电机 / 防滑轮胎"
      },
      {
        "label": "移动速度示例",
        "value": "12 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "60 mm"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 双速切换"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "35 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "迷你身形，释放驾驶灵感。",
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Sprint 迷你遥控车玩具机器人车｜RobotCar",
    "seoDescription": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。迷你遥控车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "sprint",
    "tier": "MINI",
    "badge": "趣玩精选",
    "priceCNY": 199,
    "shortDescription": "遥控互动 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/sprint.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "12 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "续航示例",
        "value": "35 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "300 × 165 × 110 mm"
          },
          {
            "label": "整车重量",
            "value": "0.75 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "后轮双电机 / 防滑轮胎"
          },
          {
            "label": "移动速度示例",
            "value": "12 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "60 mm"
          },
          {
            "label": "建议年龄",
            "value": "8+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 双速切换"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "35 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Sprint 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "sprint-pro",
    "name": "RobotCar Sprint 双速遥控车",
    "englishName": "SPRINT / PRO",
    "category": "遥控互动",
    "tagline": "迷你身形，释放驾驶灵感。",
    "description": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。双速遥控车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/sprint.webp",
    "features": [
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "300 × 165 × 110 mm"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "后轮双电机 / 防滑轮胎"
      },
      {
        "label": "移动速度示例",
        "value": "12 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "60 mm"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 双速切换"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "35 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "迷你身形，释放驾驶灵感。",
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Sprint 双速遥控车玩具机器人车｜RobotCar",
    "seoDescription": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。双速遥控车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "sprint",
    "tier": "PRO",
    "badge": "趣玩精选",
    "priceCNY": 299,
    "shortDescription": "遥控互动 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/sprint.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "12 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "续航示例",
        "value": "35 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "300 × 165 × 110 mm"
          },
          {
            "label": "整车重量",
            "value": "0.75 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "后轮双电机 / 防滑轮胎"
          },
          {
            "label": "移动速度示例",
            "value": "12 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "60 mm"
          },
          {
            "label": "建议年龄",
            "value": "8+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 双速切换"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "35 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Sprint 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "sprint-endurance",
    "name": "RobotCar Sprint 双电池畅玩套装",
    "englishName": "SPRINT / ENDURANCE",
    "category": "遥控互动",
    "tagline": "迷你身形，释放驾驶灵感。",
    "description": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。双电池畅玩套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/sprint.webp",
    "features": [
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "300 × 165 × 110 mm"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "后轮双电机 / 防滑轮胎"
      },
      {
        "label": "移动速度示例",
        "value": "12 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "60 mm"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 双速切换"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "35 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "迷你身形，释放驾驶灵感。",
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Sprint 双电池畅玩套装玩具机器人车｜RobotCar",
    "seoDescription": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。双电池畅玩套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "sprint",
    "tier": "ENDURANCE",
    "badge": "趣玩精选",
    "priceCNY": 399,
    "shortDescription": "遥控互动 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/sprint.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "12 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "续航示例",
        "value": "35 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "300 × 165 × 110 mm"
          },
          {
            "label": "整车重量",
            "value": "0.75 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "后轮双电机 / 防滑轮胎"
          },
          {
            "label": "移动速度示例",
            "value": "12 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "60 mm"
          },
          {
            "label": "建议年龄",
            "value": "8+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 双速切换"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "35 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Sprint 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "sprint-kit",
    "name": "RobotCar Sprint 拼装探索套装",
    "englishName": "SPRINT / KIT",
    "category": "遥控互动",
    "tagline": "迷你身形，释放驾驶灵感。",
    "description": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。拼装探索套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/sprint.webp",
    "features": [
      "遥控互动",
      "图形化编程",
      "模块配件拓展"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "300 × 165 × 110 mm"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "后轮双电机 / 防滑轮胎"
      },
      {
        "label": "移动速度示例",
        "value": "12 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "60 mm"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 双速切换"
      },
      {
        "label": "感知组合",
        "value": "相机 / 巡线 / 超声波模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按套装）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "35 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "迷你身形，释放驾驶灵感。",
      "遥控互动",
      "图形化编程",
      "模块配件拓展"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Sprint 拼装探索套装玩具机器人车｜RobotCar",
    "seoDescription": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。拼装探索套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "sprint",
    "tier": "KIT",
    "badge": "编程探索",
    "priceCNY": 499,
    "shortDescription": "遥控互动 · 图形化编程 · 模块配件拓展",
    "gallery": [
      "/images/cars/sprint.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "12 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "续航示例",
        "value": "35 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "300 × 165 × 110 mm"
          },
          {
            "label": "整车重量",
            "value": "0.75 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "后轮双电机 / 防滑轮胎"
          },
          {
            "label": "移动速度示例",
            "value": "12 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "60 mm"
          },
          {
            "label": "建议年龄",
            "value": "8+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 双速切换"
          },
          {
            "label": "感知组合",
            "value": "相机 / 巡线 / 超声波模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按套装）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "35 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Sprint 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "拼装件与玩法指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "sprint-fpv",
    "name": "RobotCar Sprint 第一视角体验套装",
    "englishName": "SPRINT / FPV",
    "category": "遥控互动",
    "tagline": "迷你身形，释放驾驶灵感。",
    "description": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。第一视角体验套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/sprint.webp",
    "features": [
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "300 × 165 × 110 mm"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "后轮双电机 / 防滑轮胎"
      },
      {
        "label": "移动速度示例",
        "value": "12 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "60 mm"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 双速切换"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "35 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "迷你身形，释放驾驶灵感。",
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Sprint 第一视角体验套装玩具机器人车｜RobotCar",
    "seoDescription": "蓝色轻量车壳与四轮底盘，适合从遥控转向到第一视角体验。第一视角体验套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "sprint",
    "tier": "FPV",
    "badge": "趣玩精选",
    "priceCNY": 699,
    "shortDescription": "遥控互动 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/sprint.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "12 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.75 kg"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "续航示例",
        "value": "35 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "300 × 165 × 110 mm"
          },
          {
            "label": "整车重量",
            "value": "0.75 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "后轮双电机 / 防滑轮胎"
          },
          {
            "label": "移动速度示例",
            "value": "12 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "60 mm"
          },
          {
            "label": "建议年龄",
            "value": "8+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 双速切换"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "35 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Sprint 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "omni-play",
    "name": "RobotCar Omni 全向趣玩车",
    "englishName": "OMNI / PLAY",
    "category": "遥控互动",
    "tagline": "让方向，拥有更多可能。",
    "description": "麦克纳姆轮带来横移、转向与旋转，连接创意玩法和路径编程。全向趣玩车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/omni.webp",
    "features": [
      "全向移动",
      "四轮独立驱动",
      "横移与旋转"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "280 × 220 × 135 mm"
      },
      {
        "label": "整车重量",
        "value": "0.95 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮独立驱动 / 麦克纳姆轮"
      },
      {
        "label": "移动速度示例",
        "value": "6 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "65 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 图形化编程（按套装）"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,000 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "40 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "让方向，拥有更多可能。",
      "全向移动",
      "四轮独立驱动",
      "横移与旋转"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Omni 全向趣玩车玩具机器人车｜RobotCar",
    "seoDescription": "麦克纳姆轮带来横移、转向与旋转，连接创意玩法和路径编程。全向趣玩车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "omni",
    "tier": "PLAY",
    "badge": "趣玩精选",
    "priceCNY": 399,
    "shortDescription": "全向移动 · 四轮独立驱动 · 横移与旋转",
    "gallery": [
      "/images/cars/omni.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "6 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.95 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "40 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "280 × 220 × 135 mm"
          },
          {
            "label": "整车重量",
            "value": "0.95 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮独立驱动 / 麦克纳姆轮"
          },
          {
            "label": "移动速度示例",
            "value": "6 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "65 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 图形化编程（按套装）"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,000 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "40 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Omni 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "omni-code",
    "name": "RobotCar Omni 全向编程套装",
    "englishName": "OMNI / CODE",
    "category": "遥控互动",
    "tagline": "让方向，拥有更多可能。",
    "description": "麦克纳姆轮带来横移、转向与旋转，连接创意玩法和路径编程。全向编程套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/omni.webp",
    "features": [
      "全向移动",
      "四轮独立驱动",
      "图形化编程"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "280 × 220 × 135 mm"
      },
      {
        "label": "整车重量",
        "value": "0.95 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮独立驱动 / 麦克纳姆轮"
      },
      {
        "label": "移动速度示例",
        "value": "6 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "65 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 图形化编程（按套装）"
      },
      {
        "label": "感知组合",
        "value": "相机 / 巡线 / 超声波模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按套装）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,000 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "40 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "让方向，拥有更多可能。",
      "全向移动",
      "四轮独立驱动",
      "图形化编程"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Omni 全向编程套装玩具机器人车｜RobotCar",
    "seoDescription": "麦克纳姆轮带来横移、转向与旋转，连接创意玩法和路径编程。全向编程套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "omni",
    "tier": "CODE",
    "badge": "编程探索",
    "priceCNY": 699,
    "shortDescription": "全向移动 · 四轮独立驱动 · 图形化编程",
    "gallery": [
      "/images/cars/omni.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "6 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.95 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "40 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "280 × 220 × 135 mm"
          },
          {
            "label": "整车重量",
            "value": "0.95 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮独立驱动 / 麦克纳姆轮"
          },
          {
            "label": "移动速度示例",
            "value": "6 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "65 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 图形化编程（按套装）"
          },
          {
            "label": "感知组合",
            "value": "相机 / 巡线 / 超声波模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按套装）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,000 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "40 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Omni 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "拼装件与玩法指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "omni-vision",
    "name": "RobotCar Omni 全向视觉套装",
    "englishName": "OMNI / VISION",
    "category": "遥控互动",
    "tagline": "让方向，拥有更多可能。",
    "description": "麦克纳姆轮带来横移、转向与旋转，连接创意玩法和路径编程。全向视觉套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/omni.webp",
    "features": [
      "全向移动",
      "四轮独立驱动",
      "图形化编程"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "280 × 220 × 135 mm"
      },
      {
        "label": "整车重量",
        "value": "0.95 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮独立驱动 / 麦克纳姆轮"
      },
      {
        "label": "移动速度示例",
        "value": "6 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "65 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 图形化编程（按套装）"
      },
      {
        "label": "感知组合",
        "value": "相机 / 巡线 / 超声波模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按套装）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,000 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "40 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "让方向，拥有更多可能。",
      "全向移动",
      "四轮独立驱动",
      "图形化编程"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Omni 全向视觉套装玩具机器人车｜RobotCar",
    "seoDescription": "麦克纳姆轮带来横移、转向与旋转，连接创意玩法和路径编程。全向视觉套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "omni",
    "tier": "VISION",
    "badge": "编程探索",
    "priceCNY": 999,
    "shortDescription": "全向移动 · 四轮独立驱动 · 图形化编程",
    "gallery": [
      "/images/cars/omni.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "6 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.95 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "40 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "280 × 220 × 135 mm"
          },
          {
            "label": "整车重量",
            "value": "0.95 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮独立驱动 / 麦克纳姆轮"
          },
          {
            "label": "移动速度示例",
            "value": "6 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "65 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 图形化编程（按套装）"
          },
          {
            "label": "感知组合",
            "value": "相机 / 巡线 / 超声波模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按套装）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,000 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "40 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Omni 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "拼装件与玩法指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "rover-scout",
    "name": "RobotCar Rover 入门越野车",
    "englishName": "ROVER / SCOUT",
    "category": "遥控互动",
    "tagline": "越过小障碍，开启大冒险。",
    "description": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。入门越野车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/rover.webp",
    "features": [
      "四驱轮胎",
      "玩具级避震",
      "可调速度"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "350 × 210 × 170 mm"
      },
      {
        "label": "整车重量",
        "value": "1.2 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮驱动 / 弹簧避震"
      },
      {
        "label": "移动速度示例",
        "value": "15 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "85 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 速度档位"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "30 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "越过小障碍，开启大冒险。",
      "四驱轮胎",
      "玩具级避震",
      "可调速度"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Rover 入门越野车玩具机器人车｜RobotCar",
    "seoDescription": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。入门越野车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "rover",
    "tier": "SCOUT",
    "badge": "趣玩精选",
    "priceCNY": 299,
    "shortDescription": "四驱轮胎 · 玩具级避震 · 可调速度",
    "gallery": [
      "/images/cars/rover.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "15 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.2 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "30 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "350 × 210 × 170 mm"
          },
          {
            "label": "整车重量",
            "value": "1.2 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮驱动 / 弹簧避震"
          },
          {
            "label": "移动速度示例",
            "value": "15 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "85 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 速度档位"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "30 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Rover 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "rover-pro",
    "name": "RobotCar Rover 四驱越野车",
    "englishName": "ROVER / PRO",
    "category": "遥控互动",
    "tagline": "越过小障碍，开启大冒险。",
    "description": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。四驱越野车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/rover.webp",
    "features": [
      "四驱轮胎",
      "玩具级避震",
      "可调速度"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "350 × 210 × 170 mm"
      },
      {
        "label": "整车重量",
        "value": "1.2 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮驱动 / 弹簧避震"
      },
      {
        "label": "移动速度示例",
        "value": "15 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "85 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 速度档位"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "30 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "越过小障碍，开启大冒险。",
      "四驱轮胎",
      "玩具级避震",
      "可调速度"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Rover 四驱越野车玩具机器人车｜RobotCar",
    "seoDescription": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。四驱越野车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "rover",
    "tier": "PRO",
    "badge": "趣玩精选",
    "priceCNY": 499,
    "shortDescription": "四驱轮胎 · 玩具级避震 · 可调速度",
    "gallery": [
      "/images/cars/rover.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "15 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.2 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "30 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "350 × 210 × 170 mm"
          },
          {
            "label": "整车重量",
            "value": "1.2 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮驱动 / 弹簧避震"
          },
          {
            "label": "移动速度示例",
            "value": "15 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "85 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 速度档位"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "30 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Rover 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "rover-x",
    "name": "RobotCar Rover 进阶避震套装",
    "englishName": "ROVER / X",
    "category": "遥控互动",
    "tagline": "越过小障碍，开启大冒险。",
    "description": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。进阶避震套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/rover.webp",
    "features": [
      "四驱轮胎",
      "玩具级避震",
      "可调速度"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "350 × 210 × 170 mm"
      },
      {
        "label": "整车重量",
        "value": "1.2 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮驱动 / 弹簧避震"
      },
      {
        "label": "移动速度示例",
        "value": "15 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "85 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 速度档位"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "30 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "越过小障碍，开启大冒险。",
      "四驱轮胎",
      "玩具级避震",
      "可调速度"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Rover 进阶避震套装玩具机器人车｜RobotCar",
    "seoDescription": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。进阶避震套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "rover",
    "tier": "X",
    "badge": "趣玩精选",
    "priceCNY": 699,
    "shortDescription": "四驱轮胎 · 玩具级避震 · 可调速度",
    "gallery": [
      "/images/cars/rover.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "15 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.2 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "30 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "350 × 210 × 170 mm"
          },
          {
            "label": "整车重量",
            "value": "1.2 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮驱动 / 弹簧避震"
          },
          {
            "label": "移动速度示例",
            "value": "15 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "85 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 速度档位"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "30 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Rover 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "rover-code",
    "name": "RobotCar Rover 越野编程套装",
    "englishName": "ROVER / CODE",
    "category": "遥控互动",
    "tagline": "越过小障碍，开启大冒险。",
    "description": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。越野编程套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/rover.webp",
    "features": [
      "四驱轮胎",
      "玩具级避震",
      "可调速度"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "350 × 210 × 170 mm"
      },
      {
        "label": "整车重量",
        "value": "1.2 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮驱动 / 弹簧避震"
      },
      {
        "label": "移动速度示例",
        "value": "15 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "85 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 速度档位"
      },
      {
        "label": "感知组合",
        "value": "相机 / 巡线 / 超声波模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按套装）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "30 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "越过小障碍，开启大冒险。",
      "四驱轮胎",
      "玩具级避震",
      "可调速度"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Rover 越野编程套装玩具机器人车｜RobotCar",
    "seoDescription": "四驱轮胎与玩具级避震结构，为公园模型路线和受控小坡道增添乐趣。越野编程套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "rover",
    "tier": "CODE",
    "badge": "编程探索",
    "priceCNY": 999,
    "shortDescription": "四驱轮胎 · 玩具级避震 · 可调速度",
    "gallery": [
      "/images/cars/rover.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "15 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.2 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "30 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "350 × 210 × 170 mm"
          },
          {
            "label": "整车重量",
            "value": "1.2 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮驱动 / 弹簧避震"
          },
          {
            "label": "移动速度示例",
            "value": "15 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "85 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 速度档位"
          },
          {
            "label": "感知组合",
            "value": "相机 / 巡线 / 超声波模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按套装）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "30 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Rover 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "拼装件与玩法指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "drift-street",
    "name": "RobotCar Drift 街道漂移车",
    "englishName": "DRIFT / STREET",
    "category": "遥控互动",
    "tagline": "每一道弯，都能玩出风格。",
    "description": "低重心车身配合漂移轮胎，适合在平整模型赛道练习转向与控速。街道漂移车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/drift.webp",
    "features": [
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "320 × 175 × 100 mm"
      },
      {
        "label": "整车重量",
        "value": "0.8 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "后轮驱动 / 可替换漂移胎"
      },
      {
        "label": "移动速度示例",
        "value": "10 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "55 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "比例转向 / 赛道练习"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "30 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "每一道弯，都能玩出风格。",
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Drift 街道漂移车玩具机器人车｜RobotCar",
    "seoDescription": "低重心车身配合漂移轮胎，适合在平整模型赛道练习转向与控速。街道漂移车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "drift",
    "tier": "STREET",
    "badge": "趣玩精选",
    "priceCNY": 299,
    "shortDescription": "遥控互动 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/drift.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "10 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.8 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "30 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "320 × 175 × 100 mm"
          },
          {
            "label": "整车重量",
            "value": "0.8 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "后轮驱动 / 可替换漂移胎"
          },
          {
            "label": "移动速度示例",
            "value": "10 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "55 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "比例转向 / 赛道练习"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "30 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Drift 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "drift-track",
    "name": "RobotCar Drift 赛道漂移套装",
    "englishName": "DRIFT / TRACK",
    "category": "遥控互动",
    "tagline": "每一道弯，都能玩出风格。",
    "description": "低重心车身配合漂移轮胎，适合在平整模型赛道练习转向与控速。赛道漂移套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/drift.webp",
    "features": [
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "320 × 175 × 100 mm"
      },
      {
        "label": "整车重量",
        "value": "0.8 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "后轮驱动 / 可替换漂移胎"
      },
      {
        "label": "移动速度示例",
        "value": "10 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "55 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "比例转向 / 赛道练习"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "30 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "每一道弯，都能玩出风格。",
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Drift 赛道漂移套装玩具机器人车｜RobotCar",
    "seoDescription": "低重心车身配合漂移轮胎，适合在平整模型赛道练习转向与控速。赛道漂移套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "drift",
    "tier": "TRACK",
    "badge": "趣玩精选",
    "priceCNY": 499,
    "shortDescription": "遥控互动 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/drift.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "10 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.8 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "30 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "320 × 175 × 100 mm"
          },
          {
            "label": "整车重量",
            "value": "0.8 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "后轮驱动 / 可替换漂移胎"
          },
          {
            "label": "移动速度示例",
            "value": "10 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "55 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "比例转向 / 赛道练习"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "30 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Drift 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "maker-start",
    "name": "RobotCar Maker 编程入门车",
    "englishName": "MAKER / START",
    "category": "编程教育",
    "tagline": "把第一行代码，变成一次出发。",
    "description": "开放式拼装底盘与控制板，让线路连接、传感器读取和小车程序变得直观。编程入门车组合围绕传感器、代码和基础项目安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/maker.webp",
    "features": [
      "模块化底盘",
      "图形化编程",
      "传感器扩展"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "260 × 190 × 120 mm"
      },
      {
        "label": "整车重量",
        "value": "0.65 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "双电机差速 / 编码反馈"
      },
      {
        "label": "移动速度示例",
        "value": "4 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "65 mm"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "图形化编程 / Python 示例"
      },
      {
        "label": "感知组合",
        "value": "巡线 / 超声波 / 相机模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按型号支持）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "50 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "把第一行代码，变成一次出发。",
      "模块化底盘",
      "图形化编程",
      "传感器扩展"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Maker 编程入门车玩具机器人车｜RobotCar",
    "seoDescription": "开放式拼装底盘与控制板，让线路连接、传感器读取和小车程序变得直观。编程入门车组合围绕传感器、代码和基础项目安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "maker",
    "tier": "START",
    "badge": "趣玩精选",
    "priceCNY": 599,
    "shortDescription": "模块化底盘 · 图形化编程 · 传感器扩展",
    "gallery": [
      "/images/cars/maker.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "4 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.65 kg"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "续航示例",
        "value": "50 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "260 × 190 × 120 mm"
          },
          {
            "label": "整车重量",
            "value": "0.65 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "双电机差速 / 编码反馈"
          },
          {
            "label": "移动速度示例",
            "value": "4 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "65 mm"
          },
          {
            "label": "建议年龄",
            "value": "12+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "图形化编程 / Python 示例"
          },
          {
            "label": "感知组合",
            "value": "巡线 / 超声波 / 相机模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按型号支持）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "50 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Maker 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "maker-lab",
    "name": "RobotCar Maker 创客实验套装",
    "englishName": "MAKER / LAB",
    "category": "编程教育",
    "tagline": "把第一行代码，变成一次出发。",
    "description": "开放式拼装底盘与控制板，让线路连接、传感器读取和小车程序变得直观。创客实验套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/maker.webp",
    "features": [
      "编程教育",
      "图形化编程",
      "模块配件拓展"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "260 × 190 × 120 mm"
      },
      {
        "label": "整车重量",
        "value": "0.65 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "双电机差速 / 编码反馈"
      },
      {
        "label": "移动速度示例",
        "value": "4 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "65 mm"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "图形化编程 / Python 示例"
      },
      {
        "label": "感知组合",
        "value": "相机 / 巡线 / 超声波模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按套装）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "50 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "把第一行代码，变成一次出发。",
      "编程教育",
      "图形化编程",
      "模块配件拓展"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Maker 创客实验套装玩具机器人车｜RobotCar",
    "seoDescription": "开放式拼装底盘与控制板，让线路连接、传感器读取和小车程序变得直观。创客实验套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "maker",
    "tier": "LAB",
    "badge": "编程探索",
    "priceCNY": 899,
    "shortDescription": "编程教育 · 图形化编程 · 模块配件拓展",
    "gallery": [
      "/images/cars/maker.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "4 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.65 kg"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "续航示例",
        "value": "50 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "260 × 190 × 120 mm"
          },
          {
            "label": "整车重量",
            "value": "0.65 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "双电机差速 / 编码反馈"
          },
          {
            "label": "移动速度示例",
            "value": "4 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "65 mm"
          },
          {
            "label": "建议年龄",
            "value": "12+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "图形化编程 / Python 示例"
          },
          {
            "label": "感知组合",
            "value": "相机 / 巡线 / 超声波模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按套装）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "50 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Maker 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "拼装件与玩法指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "vision-explore",
    "name": "RobotCar Vision 摄像探索车",
    "englishName": "VISION / EXPLORE",
    "category": "编程教育",
    "tagline": "让小车，看见新的玩法。",
    "description": "前置相机与车载计算模块，围绕颜色识别、图案跟随和第一视角探索设计项目。摄像探索车组合围绕传感器、代码和基础项目安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/vision.webp",
    "features": [
      "前置摄像头",
      "车载视觉体验",
      "图形化编程"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "290 × 200 × 165 mm"
      },
      {
        "label": "整车重量",
        "value": "1.05 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮底盘 / 可调相机支架"
      },
      {
        "label": "移动速度示例",
        "value": "5 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "70 mm"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "图像采集 / 图形化编程"
      },
      {
        "label": "感知组合",
        "value": "巡线 / 超声波 / 相机模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按型号支持）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "40 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "让小车，看见新的玩法。",
      "前置摄像头",
      "车载视觉体验",
      "图形化编程"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Vision 摄像探索车玩具机器人车｜RobotCar",
    "seoDescription": "前置相机与车载计算模块，围绕颜色识别、图案跟随和第一视角探索设计项目。摄像探索车组合围绕传感器、代码和基础项目安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "vision",
    "tier": "EXPLORE",
    "badge": "趣玩精选",
    "priceCNY": 999,
    "shortDescription": "前置摄像头 · 车载视觉体验 · 图形化编程",
    "gallery": [
      "/images/cars/vision.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "5 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.05 kg"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "续航示例",
        "value": "40 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "290 × 200 × 165 mm"
          },
          {
            "label": "整车重量",
            "value": "1.05 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮底盘 / 可调相机支架"
          },
          {
            "label": "移动速度示例",
            "value": "5 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "70 mm"
          },
          {
            "label": "建议年龄",
            "value": "12+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "图像采集 / 图形化编程"
          },
          {
            "label": "感知组合",
            "value": "巡线 / 超声波 / 相机模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按型号支持）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "40 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Vision 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "vision-ai",
    "name": "RobotCar Vision 视觉识别套装",
    "englishName": "VISION / AI",
    "category": "编程教育",
    "tagline": "让小车，看见新的玩法。",
    "description": "前置相机与车载计算模块，围绕颜色识别、图案跟随和第一视角探索设计项目。视觉识别套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/vision.webp",
    "features": [
      "前置摄像头",
      "车载视觉体验",
      "编程项目"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "290 × 200 × 165 mm"
      },
      {
        "label": "整车重量",
        "value": "1.05 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮底盘 / 可调相机支架"
      },
      {
        "label": "移动速度示例",
        "value": "5 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "70 mm"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "图像采集 / 图形化编程"
      },
      {
        "label": "感知组合",
        "value": "相机 / 巡线 / 超声波模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按套装）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "40 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "让小车，看见新的玩法。",
      "前置摄像头",
      "车载视觉体验",
      "编程项目"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Vision 视觉识别套装玩具机器人车｜RobotCar",
    "seoDescription": "前置相机与车载计算模块，围绕颜色识别、图案跟随和第一视角探索设计项目。视觉识别套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "vision",
    "tier": "AI",
    "badge": "编程探索",
    "priceCNY": 1499,
    "shortDescription": "前置摄像头 · 车载视觉体验 · 编程项目",
    "gallery": [
      "/images/cars/vision.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "5 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.05 kg"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "续航示例",
        "value": "40 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "290 × 200 × 165 mm"
          },
          {
            "label": "整车重量",
            "value": "1.05 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮底盘 / 可调相机支架"
          },
          {
            "label": "移动速度示例",
            "value": "5 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "70 mm"
          },
          {
            "label": "建议年龄",
            "value": "12+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "图像采集 / 图形化编程"
          },
          {
            "label": "感知组合",
            "value": "相机 / 巡线 / 超声波模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按套装）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "40 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Vision 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "拼装件与玩法指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "circuit-race",
    "name": "RobotCar Circuit 迷你方程式赛车",
    "englishName": "CIRCUIT / RACE",
    "category": "遥控互动",
    "tagline": "让小小赛道，充满速度感。",
    "description": "方程式风格车壳、清晰的转向反馈与迷你围栏组合，适合遥控竞速体验。迷你方程式赛车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/circuit.webp",
    "features": [
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "310 × 175 × 90 mm"
      },
      {
        "label": "整车重量",
        "value": "0.55 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "轻量四轮底盘 / 后轮驱动"
      },
      {
        "label": "移动速度示例",
        "value": "12 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "50 mm"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 双速切换"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "25 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "让小小赛道，充满速度感。",
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Circuit 迷你方程式赛车玩具机器人车｜RobotCar",
    "seoDescription": "方程式风格车壳、清晰的转向反馈与迷你围栏组合，适合遥控竞速体验。迷你方程式赛车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "circuit",
    "tier": "RACE",
    "badge": "趣玩精选",
    "priceCNY": 249,
    "shortDescription": "遥控互动 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/circuit.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "12 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.55 kg"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "续航示例",
        "value": "25 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "310 × 175 × 90 mm"
          },
          {
            "label": "整车重量",
            "value": "0.55 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "轻量四轮底盘 / 后轮驱动"
          },
          {
            "label": "移动速度示例",
            "value": "12 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "50 mm"
          },
          {
            "label": "建议年龄",
            "value": "8+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 双速切换"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "25 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Circuit 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "circuit-pro",
    "name": "RobotCar Circuit 竞速赛道套装",
    "englishName": "CIRCUIT / PRO",
    "category": "遥控互动",
    "tagline": "让小小赛道，充满速度感。",
    "description": "方程式风格车壳、清晰的转向反馈与迷你围栏组合，适合遥控竞速体验。竞速赛道套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/circuit.webp",
    "features": [
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "310 × 175 × 90 mm"
      },
      {
        "label": "整车重量",
        "value": "0.55 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "轻量四轮底盘 / 后轮驱动"
      },
      {
        "label": "移动速度示例",
        "value": "12 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "50 mm"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "2.4 GHz 遥控 / 双速切换"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 1,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "25 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "让小小赛道，充满速度感。",
      "遥控互动",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Circuit 竞速赛道套装玩具机器人车｜RobotCar",
    "seoDescription": "方程式风格车壳、清晰的转向反馈与迷你围栏组合，适合遥控竞速体验。竞速赛道套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "circuit",
    "tier": "PRO",
    "badge": "趣玩精选",
    "priceCNY": 399,
    "shortDescription": "遥控互动 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/circuit.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "12 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.55 kg"
      },
      {
        "label": "建议年龄",
        "value": "8+"
      },
      {
        "label": "续航示例",
        "value": "25 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "310 × 175 × 90 mm"
          },
          {
            "label": "整车重量",
            "value": "0.55 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "轻量四轮底盘 / 后轮驱动"
          },
          {
            "label": "移动速度示例",
            "value": "12 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "50 mm"
          },
          {
            "label": "建议年龄",
            "value": "8+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "2.4 GHz 遥控 / 双速切换"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 1,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "25 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Circuit 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "cargo-mini",
    "name": "RobotCar Cargo 积木运输车",
    "englishName": "CARGO / MINI",
    "category": "编程教育",
    "tagline": "把想象装上车，让任务更精彩。",
    "description": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。积木运输车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/cargo.webp",
    "features": [
      "编程教育",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "330 × 205 × 170 mm"
      },
      {
        "label": "整车重量",
        "value": "1.1 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮驱动 / 积木扩展孔位"
      },
      {
        "label": "移动速度示例",
        "value": "4 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "75 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 顺序任务编程"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "45 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "把想象装上车，让任务更精彩。",
      "编程教育",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Cargo 积木运输车玩具机器人车｜RobotCar",
    "seoDescription": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。积木运输车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "cargo",
    "tier": "MINI",
    "badge": "趣玩精选",
    "priceCNY": 399,
    "shortDescription": "编程教育 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/cargo.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "4 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.1 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "45 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "330 × 205 × 170 mm"
          },
          {
            "label": "整车重量",
            "value": "1.1 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮驱动 / 积木扩展孔位"
          },
          {
            "label": "移动速度示例",
            "value": "4 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "75 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 顺序任务编程"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "45 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Cargo 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "cargo-builder",
    "name": "RobotCar Cargo 积木搭建套装",
    "englishName": "CARGO / BUILDER",
    "category": "编程教育",
    "tagline": "把想象装上车，让任务更精彩。",
    "description": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。积木搭建套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/cargo.webp",
    "features": [
      "编程教育",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "330 × 205 × 170 mm"
      },
      {
        "label": "整车重量",
        "value": "1.1 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮驱动 / 积木扩展孔位"
      },
      {
        "label": "移动速度示例",
        "value": "4 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "75 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 顺序任务编程"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "45 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "把想象装上车，让任务更精彩。",
      "编程教育",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Cargo 积木搭建套装玩具机器人车｜RobotCar",
    "seoDescription": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。积木搭建套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "cargo",
    "tier": "BUILDER",
    "badge": "趣玩精选",
    "priceCNY": 599,
    "shortDescription": "编程教育 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/cargo.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "4 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.1 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "45 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "330 × 205 × 170 mm"
          },
          {
            "label": "整车重量",
            "value": "1.1 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮驱动 / 积木扩展孔位"
          },
          {
            "label": "移动速度示例",
            "value": "4 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "75 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 顺序任务编程"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "45 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Cargo 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "cargo-code",
    "name": "RobotCar Cargo 任务编程套装",
    "englishName": "CARGO / CODE",
    "category": "编程教育",
    "tagline": "把想象装上车，让任务更精彩。",
    "description": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。任务编程套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/cargo.webp",
    "features": [
      "编程教育",
      "图形化编程",
      "模块配件拓展"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "330 × 205 × 170 mm"
      },
      {
        "label": "整车重量",
        "value": "1.1 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮驱动 / 积木扩展孔位"
      },
      {
        "label": "移动速度示例",
        "value": "4 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "75 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 顺序任务编程"
      },
      {
        "label": "感知组合",
        "value": "相机 / 巡线 / 超声波模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按套装）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "45 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "把想象装上车，让任务更精彩。",
      "编程教育",
      "图形化编程",
      "模块配件拓展"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Cargo 任务编程套装玩具机器人车｜RobotCar",
    "seoDescription": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。任务编程套装组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "cargo",
    "tier": "CODE",
    "badge": "编程探索",
    "priceCNY": 799,
    "shortDescription": "编程教育 · 图形化编程 · 模块配件拓展",
    "gallery": [
      "/images/cars/cargo.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "4 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.1 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "45 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "330 × 205 × 170 mm"
          },
          {
            "label": "整车重量",
            "value": "1.1 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮驱动 / 积木扩展孔位"
          },
          {
            "label": "移动速度示例",
            "value": "4 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "75 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 顺序任务编程"
          },
          {
            "label": "感知组合",
            "value": "相机 / 巡线 / 超声波模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按套装）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "45 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Cargo 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "拼装件与玩法指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "cargo-gripper",
    "name": "RobotCar Cargo 夹爪任务套装",
    "englishName": "CARGO / GRIPPER",
    "category": "编程教育",
    "tagline": "把想象装上车，让任务更精彩。",
    "description": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。夹爪任务套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/cargo.webp",
    "features": [
      "编程教育",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "330 × 205 × 170 mm"
      },
      {
        "label": "整车重量",
        "value": "1.1 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮驱动 / 积木扩展孔位"
      },
      {
        "label": "移动速度示例",
        "value": "4 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "75 mm"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 顺序任务编程"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,200 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "45 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "把想象装上车，让任务更精彩。",
      "编程教育",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Cargo 夹爪任务套装玩具机器人车｜RobotCar",
    "seoDescription": "可拆积木货斗与扩展底盘，让搭建、运送和夹取成为一条有趣的任务链。夹爪任务套装组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "cargo",
    "tier": "GRIPPER",
    "badge": "趣玩精选",
    "priceCNY": 999,
    "shortDescription": "编程教育 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/cargo.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "4 km/h"
      },
      {
        "label": "整车重量",
        "value": "1.1 kg"
      },
      {
        "label": "建议年龄",
        "value": "10+"
      },
      {
        "label": "续航示例",
        "value": "45 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "330 × 205 × 170 mm"
          },
          {
            "label": "整车重量",
            "value": "1.1 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮驱动 / 积木扩展孔位"
          },
          {
            "label": "移动速度示例",
            "value": "4 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "75 mm"
          },
          {
            "label": "建议年龄",
            "value": "10+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 顺序任务编程"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,200 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "45 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Cargo 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "gripper-kit",
      "controller-board",
      "smart-battery"
    ]
  },
  {
    "slug": "transform-flex",
    "name": "RobotCar Transform 折叠创意车",
    "englishName": "TRANSFORM / FLEX",
    "category": "编程教育",
    "tagline": "一种底盘，多种创意形态。",
    "description": "模块化车身和可调安装位置，用轮式结构组合探索、搭建与编程玩法。折叠创意车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/transform.webp",
    "features": [
      "编程教育",
      "无线遥控",
      "便携玩乐"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "320 × 210 × 140 mm"
      },
      {
        "label": "整车重量",
        "value": "0.9 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮模块底盘 / 快拆车壳"
      },
      {
        "label": "移动速度示例",
        "value": "5 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "65 mm"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 图形化任务编排"
      },
      {
        "label": "感知组合",
        "value": "遥控接收器 / 状态指示灯"
      },
      {
        "label": "控制板",
        "value": "玩具遥控接收控制板"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "遥控玩法；编程需对应拓展套装"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,000 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "40 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "遥控竞速",
      "亲子玩乐",
      "模型赛道体验"
    ],
    "highlights": [
      "一种底盘，多种创意形态。",
      "编程教育",
      "无线遥控",
      "便携玩乐"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Transform 折叠创意车玩具机器人车｜RobotCar",
    "seoDescription": "模块化车身和可调安装位置，用轮式结构组合探索、搭建与编程玩法。折叠创意车组合围绕转向、控速和遥控体验安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "transform",
    "tier": "FLEX",
    "badge": "趣玩精选",
    "priceCNY": 699,
    "shortDescription": "编程教育 · 无线遥控 · 便携玩乐",
    "gallery": [
      "/images/cars/transform.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "5 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.9 kg"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "续航示例",
        "value": "40 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "320 × 210 × 140 mm"
          },
          {
            "label": "整车重量",
            "value": "0.9 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮模块底盘 / 快拆车壳"
          },
          {
            "label": "移动速度示例",
            "value": "5 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "65 mm"
          },
          {
            "label": "建议年龄",
            "value": "12+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 图形化任务编排"
          },
          {
            "label": "感知组合",
            "value": "遥控接收器 / 状态指示灯"
          },
          {
            "label": "控制板",
            "value": "玩具遥控接收控制板"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "遥控玩法；编程需对应拓展套装"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,000 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "40 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Transform 玩具车 × 1",
      "匹配遥控器 × 1",
      "匹配电池与充电线 × 1",
      "操作与保养指南"
    ],
    "relatedAccessories": [
      "smart-battery",
      "remote-controller",
      "usb-charger"
    ]
  },
  {
    "slug": "transform-code",
    "name": "RobotCar Transform 模块变形编程车",
    "englishName": "TRANSFORM / CODE",
    "category": "编程教育",
    "tagline": "一种底盘，多种创意形态。",
    "description": "模块化车身和可调安装位置，用轮式结构组合探索、搭建与编程玩法。模块变形编程车组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "positioning": "概念产品与套装展示。图片为原创效果图，价格和配置为演示参考；正式销售前须确认实际商品、规格、适龄标识、库存与报价。",
    "image": "/images/cars/transform.webp",
    "features": [
      "编程教育",
      "图形化编程",
      "模块配件拓展"
    ],
    "specs": [
      {
        "label": "车身尺寸（长 × 宽 × 高）",
        "value": "320 × 210 × 140 mm"
      },
      {
        "label": "整车重量",
        "value": "0.9 kg"
      },
      {
        "label": "车壳材质",
        "value": "ABS 工程塑料 / 金属底盘（按套装）"
      },
      {
        "label": "驱动结构",
        "value": "四轮模块底盘 / 快拆车壳"
      },
      {
        "label": "移动速度示例",
        "value": "5 km/h"
      },
      {
        "label": "轮胎直径",
        "value": "65 mm"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "转向方式",
        "value": "差速 / 比例转向（按配置）"
      },
      {
        "label": "操控方式",
        "value": "遥控 / 图形化任务编排"
      },
      {
        "label": "感知组合",
        "value": "相机 / 巡线 / 超声波模块（按套装）"
      },
      {
        "label": "控制板",
        "value": "ESP32 教学控制板（套装参考）"
      },
      {
        "label": "扩展接口",
        "value": "USB-C / 传感器插座 / 积木安装孔"
      },
      {
        "label": "编程支持",
        "value": "图形化编程 / Python 示例（按套装）"
      },
      {
        "label": "无线连接",
        "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
      },
      {
        "label": "电池组合示例",
        "value": "7.4 V / 2,000 mAh"
      },
      {
        "label": "续航时间示例",
        "value": "40 min"
      },
      {
        "label": "充电方式",
        "value": "匹配的 USB 充电器 / 以随箱说明为准"
      },
      {
        "label": "使用场地",
        "value": "干燥平整模型赛道 / 成人监督"
      },
      {
        "label": "包装与交付",
        "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
      },
      {
        "label": "参数说明",
        "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
      }
    ],
    "useCases": [
      "STEM 编程课堂",
      "创客拼装",
      "家庭创意任务"
    ],
    "highlights": [
      "一种底盘，多种创意形态。",
      "编程教育",
      "图形化编程",
      "模块配件拓展"
    ],
    "cta": "咨询此套装",
    "seoTitle": "Transform 模块变形编程车玩具机器人车｜RobotCar",
    "seoDescription": "模块化车身和可调安装位置，用轮式结构组合探索、搭建与编程玩法。模块变形编程车组合围绕感知、编程和创意任务安排玩法，让一次次小挑战成为看得见的进步。",
    "kind": "car",
    "family": "transform",
    "tier": "CODE",
    "badge": "编程探索",
    "priceCNY": 999,
    "shortDescription": "编程教育 · 图形化编程 · 模块配件拓展",
    "gallery": [
      "/images/cars/transform.webp"
    ],
    "keyStats": [
      {
        "label": "移动速度",
        "value": "5 km/h"
      },
      {
        "label": "整车重量",
        "value": "0.9 kg"
      },
      {
        "label": "建议年龄",
        "value": "12+"
      },
      {
        "label": "续航示例",
        "value": "40 min"
      }
    ],
    "specificationGroups": [
      {
        "name": "车身尺寸与驱动",
        "rows": [
          {
            "label": "车身尺寸（长 × 宽 × 高）",
            "value": "320 × 210 × 140 mm"
          },
          {
            "label": "整车重量",
            "value": "0.9 kg"
          },
          {
            "label": "车壳材质",
            "value": "ABS 工程塑料 / 金属底盘（按套装）"
          },
          {
            "label": "驱动结构",
            "value": "四轮模块底盘 / 快拆车壳"
          },
          {
            "label": "移动速度示例",
            "value": "5 km/h"
          },
          {
            "label": "轮胎直径",
            "value": "65 mm"
          },
          {
            "label": "建议年龄",
            "value": "12+"
          },
          {
            "label": "转向方式",
            "value": "差速 / 比例转向（按配置）"
          }
        ]
      },
      {
        "name": "遥控、感知与编程",
        "rows": [
          {
            "label": "操控方式",
            "value": "遥控 / 图形化任务编排"
          },
          {
            "label": "感知组合",
            "value": "相机 / 巡线 / 超声波模块（按套装）"
          },
          {
            "label": "控制板",
            "value": "ESP32 教学控制板（套装参考）"
          },
          {
            "label": "扩展接口",
            "value": "USB-C / 传感器插座 / 积木安装孔"
          },
          {
            "label": "编程支持",
            "value": "图形化编程 / Python 示例（按套装）"
          },
          {
            "label": "无线连接",
            "value": "2.4 GHz 遥控 / Wi-Fi（按配置）"
          }
        ]
      },
      {
        "name": "电源、玩乐与套装",
        "rows": [
          {
            "label": "电池组合示例",
            "value": "7.4 V / 2,000 mAh"
          },
          {
            "label": "续航时间示例",
            "value": "40 min"
          },
          {
            "label": "充电方式",
            "value": "匹配的 USB 充电器 / 以随箱说明为准"
          },
          {
            "label": "使用场地",
            "value": "干燥平整模型赛道 / 成人监督"
          },
          {
            "label": "包装与交付",
            "value": "小车、遥控器或控制板、电源和玩法资料逐项确认"
          },
          {
            "label": "参数说明",
            "value": "概念套装数据；实际商品规格、年龄标识和供货信息需核实"
          }
        ]
      }
    ],
    "inBox": [
      "Transform 玩具车 × 1",
      "教学控制板 × 1",
      "匹配电池与充电线 × 1",
      "拼装件与玩法指南"
    ],
    "relatedAccessories": [
      "sensor-pack",
      "controller-board",
      "smart-battery"
    ]
  }
];

export const accessoryProducts: Product[] = [
  {
    "slug": "smart-battery",
    "name": "玩具车备用电池",
    "englishName": "SMART BATTERY",
    "category": "玩具车配件",
    "tagline": "为下一段玩乐，准备好能量。",
    "description": "为下一段玩乐，准备好能量。围绕同系列兼容插头，按车型核对规划的拓展组件，让小车的维护、搭建与玩法更有条理。采购前请核对实际型号、接口与配套说明。",
    "positioning": "配件图片为原创概念效果图，实际供货、参数和适配关系需确认。",
    "image": "/images/accessories/smart-battery.webp",
    "features": [
      "可替换电池",
      "便携供能",
      "接口匹配"
    ],
    "specs": [
      {
        "label": "配置参考",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "兼容方向",
        "value": "同系列兼容插头，按车型核对"
      },
      {
        "label": "用途",
        "value": "玩具车维护、编程或创意拓展"
      },
      {
        "label": "安装与使用",
        "value": "按随箱说明操作，儿童需成人协助"
      },
      {
        "label": "匹配要求",
        "value": "核对车型、接口、电压与控制板版本"
      },
      {
        "label": "外形尺寸参考",
        "value": "85 × 45 × 20 mm"
      },
      {
        "label": "重量参考",
        "value": "92 g"
      },
      {
        "label": "供电参考",
        "value": "7.4 V"
      },
      {
        "label": "性能参考",
        "value": "1,800 mAh"
      },
      {
        "label": "接口与配套参考",
        "value": "8.4 V / 匹配充电器"
      },
      {
        "label": "平台兼容方向",
        "value": "同系列兼容插头，按车型核对"
      },
      {
        "label": "配置说明",
        "value": "原创概念效果图；参数与价格为展示参考"
      }
    ],
    "useCases": [
      "创客拼装",
      "STEM 编程课堂",
      "家庭创意任务"
    ],
    "highlights": [
      "可替换电池",
      "便携供能",
      "接口匹配"
    ],
    "cta": "咨询配件适配",
    "seoTitle": "玩具车备用电池配置与适配｜RobotCar 玩具车配件",
    "seoDescription": "了解玩具车备用电池的兼容方向、配置参考和玩具机器人车搭配方法。",
    "kind": "accessory",
    "family": "power",
    "tier": "配件套装",
    "badge": "玩法拓展",
    "priceCNY": 129,
    "shortDescription": "可替换电池 · 便携供能 · 接口匹配",
    "gallery": [
      "/images/accessories/smart-battery.webp"
    ],
    "keyStats": [
      {
        "label": "配置参考",
        "value": "7.4 V / 1,800 mAh"
      },
      {
        "label": "兼容方向",
        "value": "同系列兼容插头，按车型核对"
      },
      {
        "label": "重量参考",
        "value": "92 g"
      }
    ],
    "specificationGroups": [
      {
        "name": "配置与参数示例",
        "rows": [
          {
            "label": "配置参考",
            "value": "7.4 V / 1,800 mAh"
          },
          {
            "label": "兼容方向",
            "value": "同系列兼容插头，按车型核对"
          },
          {
            "label": "用途",
            "value": "玩具车维护、编程或创意拓展"
          },
          {
            "label": "安装与使用",
            "value": "按随箱说明操作，儿童需成人协助"
          },
          {
            "label": "匹配要求",
            "value": "核对车型、接口、电压与控制板版本"
          },
          {
            "label": "外形尺寸参考",
            "value": "85 × 45 × 20 mm"
          },
          {
            "label": "重量参考",
            "value": "92 g"
          },
          {
            "label": "供电参考",
            "value": "7.4 V"
          },
          {
            "label": "性能参考",
            "value": "1,800 mAh"
          },
          {
            "label": "接口与配套参考",
            "value": "8.4 V / 匹配充电器"
          }
        ]
      },
      {
        "name": "兼容与集成",
        "rows": [
          {
            "label": "平台兼容方向",
            "value": "同系列兼容插头，按车型核对"
          },
          {
            "label": "配置说明",
            "value": "原创概念效果图；参数与价格为展示参考"
          }
        ]
      }
    ],
    "inBox": [
      "玩具车备用电池 × 1",
      "安装与使用说明"
    ],
    "relatedAccessories": []
  },
  {
    "slug": "drive-motor",
    "name": "微型减速驱动电机",
    "englishName": "DRIVE MOTOR",
    "category": "玩具车配件",
    "tagline": "把每一分灵感，变成车轮的转动。",
    "description": "把每一分灵感，变成车轮的转动。围绕Maker / Cargo 底盘，按轴径与供电适配规划的拓展组件，让小车的维护、搭建与玩法更有条理。采购前请核对实际型号、接口与配套说明。",
    "positioning": "配件图片为原创概念效果图，实际供货、参数和适配关系需确认。",
    "image": "/images/accessories/drive-motor.webp",
    "features": [
      "齿轮减速",
      "编码反馈选配",
      "模块安装"
    ],
    "specs": [
      {
        "label": "配置参考",
        "value": "6 V / 150 RPM"
      },
      {
        "label": "兼容方向",
        "value": "Maker / Cargo 底盘，按轴径与供电适配"
      },
      {
        "label": "用途",
        "value": "玩具车维护、编程或创意拓展"
      },
      {
        "label": "安装与使用",
        "value": "按随箱说明操作，儿童需成人协助"
      },
      {
        "label": "匹配要求",
        "value": "核对车型、接口、电压与控制板版本"
      },
      {
        "label": "外形尺寸参考",
        "value": "25 × 45 mm"
      },
      {
        "label": "重量参考",
        "value": "48 g"
      },
      {
        "label": "供电参考",
        "value": "6 V"
      },
      {
        "label": "性能参考",
        "value": "150 RPM"
      },
      {
        "label": "接口与配套参考",
        "value": "6 mm 输出轴参考"
      },
      {
        "label": "平台兼容方向",
        "value": "Maker / Cargo 底盘，按轴径与供电适配"
      },
      {
        "label": "配置说明",
        "value": "原创概念效果图；参数与价格为展示参考"
      }
    ],
    "useCases": [
      "创客拼装",
      "STEM 编程课堂",
      "家庭创意任务"
    ],
    "highlights": [
      "齿轮减速",
      "编码反馈选配",
      "模块安装"
    ],
    "cta": "咨询配件适配",
    "seoTitle": "微型减速驱动电机配置与适配｜RobotCar 玩具车配件",
    "seoDescription": "了解微型减速驱动电机的兼容方向、配置参考和玩具机器人车搭配方法。",
    "kind": "accessory",
    "family": "components",
    "tier": "配件套装",
    "badge": "玩法拓展",
    "priceCNY": 89,
    "shortDescription": "齿轮减速 · 编码反馈选配 · 模块安装",
    "gallery": [
      "/images/accessories/drive-motor.webp"
    ],
    "keyStats": [
      {
        "label": "配置参考",
        "value": "6 V / 150 RPM"
      },
      {
        "label": "兼容方向",
        "value": "Maker / Cargo 底盘，按轴径与供电适配"
      },
      {
        "label": "重量参考",
        "value": "48 g"
      }
    ],
    "specificationGroups": [
      {
        "name": "配置与参数示例",
        "rows": [
          {
            "label": "配置参考",
            "value": "6 V / 150 RPM"
          },
          {
            "label": "兼容方向",
            "value": "Maker / Cargo 底盘，按轴径与供电适配"
          },
          {
            "label": "用途",
            "value": "玩具车维护、编程或创意拓展"
          },
          {
            "label": "安装与使用",
            "value": "按随箱说明操作，儿童需成人协助"
          },
          {
            "label": "匹配要求",
            "value": "核对车型、接口、电压与控制板版本"
          },
          {
            "label": "外形尺寸参考",
            "value": "25 × 45 mm"
          },
          {
            "label": "重量参考",
            "value": "48 g"
          },
          {
            "label": "供电参考",
            "value": "6 V"
          },
          {
            "label": "性能参考",
            "value": "150 RPM"
          },
          {
            "label": "接口与配套参考",
            "value": "6 mm 输出轴参考"
          }
        ]
      },
      {
        "name": "兼容与集成",
        "rows": [
          {
            "label": "平台兼容方向",
            "value": "Maker / Cargo 底盘，按轴径与供电适配"
          },
          {
            "label": "配置说明",
            "value": "原创概念效果图；参数与价格为展示参考"
          }
        ]
      }
    ],
    "inBox": [
      "微型减速驱动电机 × 1",
      "安装与使用说明"
    ],
    "relatedAccessories": []
  },
  {
    "slug": "sensor-pack",
    "name": "巡线与测距传感器包",
    "englishName": "SENSOR PACK",
    "category": "玩具车配件",
    "tagline": "看见赛道，也看见新的玩法。",
    "description": "看见赛道，也看见新的玩法。围绕Maker / Omni / Vision 编程套装规划的拓展组件，让小车的维护、搭建与玩法更有条理。采购前请核对实际型号、接口与配套说明。",
    "positioning": "配件图片为原创概念效果图，实际供货、参数和适配关系需确认。",
    "image": "/images/accessories/sensor-pack.webp",
    "features": [
      "红外巡线",
      "超声波测距",
      "插接式扩展"
    ],
    "specs": [
      {
        "label": "配置参考",
        "value": "超声波 2–200 cm / 三路红外参考"
      },
      {
        "label": "兼容方向",
        "value": "Maker / Omni / Vision 编程套装"
      },
      {
        "label": "用途",
        "value": "玩具车维护、编程或创意拓展"
      },
      {
        "label": "安装与使用",
        "value": "按随箱说明操作，儿童需成人协助"
      },
      {
        "label": "匹配要求",
        "value": "核对车型、接口、电压与控制板版本"
      },
      {
        "label": "外形尺寸参考",
        "value": "75 × 55 × 25 mm"
      },
      {
        "label": "重量参考",
        "value": "35 g"
      },
      {
        "label": "供电参考",
        "value": "3.3–5 V"
      },
      {
        "label": "性能参考",
        "value": "2–200 cm 测距参考"
      },
      {
        "label": "接口与配套参考",
        "value": "10 Hz 采样参考"
      },
      {
        "label": "平台兼容方向",
        "value": "Maker / Omni / Vision 编程套装"
      },
      {
        "label": "配置说明",
        "value": "原创概念效果图；参数与价格为展示参考"
      }
    ],
    "useCases": [
      "创客拼装",
      "STEM 编程课堂",
      "家庭创意任务"
    ],
    "highlights": [
      "红外巡线",
      "超声波测距",
      "插接式扩展"
    ],
    "cta": "咨询配件适配",
    "seoTitle": "巡线与测距传感器包配置与适配｜RobotCar 玩具车配件",
    "seoDescription": "了解巡线与测距传感器包的兼容方向、配置参考和玩具机器人车搭配方法。",
    "kind": "accessory",
    "family": "sensing",
    "tier": "配件套装",
    "badge": "玩法拓展",
    "priceCNY": 149,
    "shortDescription": "红外巡线 · 超声波测距 · 插接式扩展",
    "gallery": [
      "/images/accessories/sensor-pack.webp"
    ],
    "keyStats": [
      {
        "label": "配置参考",
        "value": "超声波 2–200 cm / 三路红外参考"
      },
      {
        "label": "兼容方向",
        "value": "Maker / Omni / Vision 编程套装"
      },
      {
        "label": "重量参考",
        "value": "35 g"
      }
    ],
    "specificationGroups": [
      {
        "name": "配置与参数示例",
        "rows": [
          {
            "label": "配置参考",
            "value": "超声波 2–200 cm / 三路红外参考"
          },
          {
            "label": "兼容方向",
            "value": "Maker / Omni / Vision 编程套装"
          },
          {
            "label": "用途",
            "value": "玩具车维护、编程或创意拓展"
          },
          {
            "label": "安装与使用",
            "value": "按随箱说明操作，儿童需成人协助"
          },
          {
            "label": "匹配要求",
            "value": "核对车型、接口、电压与控制板版本"
          },
          {
            "label": "外形尺寸参考",
            "value": "75 × 55 × 25 mm"
          },
          {
            "label": "重量参考",
            "value": "35 g"
          },
          {
            "label": "供电参考",
            "value": "3.3–5 V"
          },
          {
            "label": "性能参考",
            "value": "2–200 cm 测距参考"
          },
          {
            "label": "接口与配套参考",
            "value": "10 Hz 采样参考"
          }
        ]
      },
      {
        "name": "兼容与集成",
        "rows": [
          {
            "label": "平台兼容方向",
            "value": "Maker / Omni / Vision 编程套装"
          },
          {
            "label": "配置说明",
            "value": "原创概念效果图；参数与价格为展示参考"
          }
        ]
      }
    ],
    "inBox": [
      "巡线与测距传感器包 × 1",
      "安装与使用说明"
    ],
    "relatedAccessories": []
  },
  {
    "slug": "remote-controller",
    "name": "2.4G 双摇杆遥控器",
    "englishName": "REMOTE CONTROLLER",
    "category": "玩具车配件",
    "tagline": "把转向和速度，握在手中。",
    "description": "把转向和速度，握在手中。围绕Sprint / Rover / Circuit 遥控版本规划的拓展组件，让小车的维护、搭建与玩法更有条理。采购前请核对实际型号、接口与配套说明。",
    "positioning": "配件图片为原创概念效果图，实际供货、参数和适配关系需确认。",
    "image": "/images/accessories/remote-controller.webp",
    "features": [
      "双摇杆操作",
      "速度档位",
      "配对指示"
    ],
    "specs": [
      {
        "label": "配置参考",
        "value": "2.4 GHz / 双速模式参考"
      },
      {
        "label": "兼容方向",
        "value": "Sprint / Rover / Circuit 遥控版本"
      },
      {
        "label": "用途",
        "value": "玩具车维护、编程或创意拓展"
      },
      {
        "label": "安装与使用",
        "value": "按随箱说明操作，儿童需成人协助"
      },
      {
        "label": "匹配要求",
        "value": "核对车型、接口、电压与控制板版本"
      },
      {
        "label": "外形尺寸参考",
        "value": "160 × 100 × 45 mm"
      },
      {
        "label": "重量参考",
        "value": "180 g"
      },
      {
        "label": "供电参考",
        "value": "USB 5 V / 按型号"
      },
      {
        "label": "性能参考",
        "value": "2.4 GHz"
      },
      {
        "label": "接口与配套参考",
        "value": "30 m 操控距离参考"
      },
      {
        "label": "平台兼容方向",
        "value": "Sprint / Rover / Circuit 遥控版本"
      },
      {
        "label": "配置说明",
        "value": "原创概念效果图；参数与价格为展示参考"
      }
    ],
    "useCases": [
      "创客拼装",
      "STEM 编程课堂",
      "家庭创意任务"
    ],
    "highlights": [
      "双摇杆操作",
      "速度档位",
      "配对指示"
    ],
    "cta": "咨询配件适配",
    "seoTitle": "2.4G 双摇杆遥控器配置与适配｜RobotCar 玩具车配件",
    "seoDescription": "了解2.4G 双摇杆遥控器的兼容方向、配置参考和玩具机器人车搭配方法。",
    "kind": "accessory",
    "family": "components",
    "tier": "配件套装",
    "badge": "玩法拓展",
    "priceCNY": 129,
    "shortDescription": "双摇杆操作 · 速度档位 · 配对指示",
    "gallery": [
      "/images/accessories/remote-controller.webp"
    ],
    "keyStats": [
      {
        "label": "配置参考",
        "value": "2.4 GHz / 双速模式参考"
      },
      {
        "label": "兼容方向",
        "value": "Sprint / Rover / Circuit 遥控版本"
      },
      {
        "label": "重量参考",
        "value": "180 g"
      }
    ],
    "specificationGroups": [
      {
        "name": "配置与参数示例",
        "rows": [
          {
            "label": "配置参考",
            "value": "2.4 GHz / 双速模式参考"
          },
          {
            "label": "兼容方向",
            "value": "Sprint / Rover / Circuit 遥控版本"
          },
          {
            "label": "用途",
            "value": "玩具车维护、编程或创意拓展"
          },
          {
            "label": "安装与使用",
            "value": "按随箱说明操作，儿童需成人协助"
          },
          {
            "label": "匹配要求",
            "value": "核对车型、接口、电压与控制板版本"
          },
          {
            "label": "外形尺寸参考",
            "value": "160 × 100 × 45 mm"
          },
          {
            "label": "重量参考",
            "value": "180 g"
          },
          {
            "label": "供电参考",
            "value": "USB 5 V / 按型号"
          },
          {
            "label": "性能参考",
            "value": "2.4 GHz"
          },
          {
            "label": "接口与配套参考",
            "value": "30 m 操控距离参考"
          }
        ]
      },
      {
        "name": "兼容与集成",
        "rows": [
          {
            "label": "平台兼容方向",
            "value": "Sprint / Rover / Circuit 遥控版本"
          },
          {
            "label": "配置说明",
            "value": "原创概念效果图；参数与价格为展示参考"
          }
        ]
      }
    ],
    "inBox": [
      "2.4G 双摇杆遥控器 × 1",
      "安装与使用说明"
    ],
    "relatedAccessories": []
  },
  {
    "slug": "usb-charger",
    "name": "玩具车 USB 充电器",
    "englishName": "USB CHARGER",
    "category": "玩具车配件",
    "tagline": "充好电，再出发。",
    "description": "充好电，再出发。围绕仅用于对应电池接口与随箱型号规划的拓展组件，让小车的维护、搭建与玩法更有条理。采购前请核对实际型号、接口与配套说明。",
    "positioning": "配件图片为原创概念效果图，实际供货、参数和适配关系需确认。",
    "image": "/images/accessories/usb-charger.webp",
    "features": [
      "USB 供电",
      "状态指示",
      "轻巧便携"
    ],
    "specs": [
      {
        "label": "配置参考",
        "value": "USB 5 V 输入 / 匹配电池输出"
      },
      {
        "label": "兼容方向",
        "value": "仅用于对应电池接口与随箱型号"
      },
      {
        "label": "用途",
        "value": "玩具车维护、编程或创意拓展"
      },
      {
        "label": "安装与使用",
        "value": "按随箱说明操作，儿童需成人协助"
      },
      {
        "label": "匹配要求",
        "value": "核对车型、接口、电压与控制板版本"
      },
      {
        "label": "外形尺寸参考",
        "value": "70 × 35 × 20 mm"
      },
      {
        "label": "重量参考",
        "value": "45 g"
      },
      {
        "label": "供电参考",
        "value": "USB 5 V"
      },
      {
        "label": "性能参考",
        "value": "8.4 V / 300 mA 参考"
      },
      {
        "label": "接口与配套参考",
        "value": "2 针电池接口 / 版本匹配"
      },
      {
        "label": "平台兼容方向",
        "value": "仅用于对应电池接口与随箱型号"
      },
      {
        "label": "配置说明",
        "value": "原创概念效果图；参数与价格为展示参考"
      }
    ],
    "useCases": [
      "创客拼装",
      "STEM 编程课堂",
      "家庭创意任务"
    ],
    "highlights": [
      "USB 供电",
      "状态指示",
      "轻巧便携"
    ],
    "cta": "咨询配件适配",
    "seoTitle": "玩具车 USB 充电器配置与适配｜RobotCar 玩具车配件",
    "seoDescription": "了解玩具车 USB 充电器的兼容方向、配置参考和玩具机器人车搭配方法。",
    "kind": "accessory",
    "family": "power",
    "tier": "配件套装",
    "badge": "玩法拓展",
    "priceCNY": 49,
    "shortDescription": "USB 供电 · 状态指示 · 轻巧便携",
    "gallery": [
      "/images/accessories/usb-charger.webp"
    ],
    "keyStats": [
      {
        "label": "配置参考",
        "value": "USB 5 V 输入 / 匹配电池输出"
      },
      {
        "label": "兼容方向",
        "value": "仅用于对应电池接口与随箱型号"
      },
      {
        "label": "重量参考",
        "value": "45 g"
      }
    ],
    "specificationGroups": [
      {
        "name": "配置与参数示例",
        "rows": [
          {
            "label": "配置参考",
            "value": "USB 5 V 输入 / 匹配电池输出"
          },
          {
            "label": "兼容方向",
            "value": "仅用于对应电池接口与随箱型号"
          },
          {
            "label": "用途",
            "value": "玩具车维护、编程或创意拓展"
          },
          {
            "label": "安装与使用",
            "value": "按随箱说明操作，儿童需成人协助"
          },
          {
            "label": "匹配要求",
            "value": "核对车型、接口、电压与控制板版本"
          },
          {
            "label": "外形尺寸参考",
            "value": "70 × 35 × 20 mm"
          },
          {
            "label": "重量参考",
            "value": "45 g"
          },
          {
            "label": "供电参考",
            "value": "USB 5 V"
          },
          {
            "label": "性能参考",
            "value": "8.4 V / 300 mA 参考"
          },
          {
            "label": "接口与配套参考",
            "value": "2 针电池接口 / 版本匹配"
          }
        ]
      },
      {
        "name": "兼容与集成",
        "rows": [
          {
            "label": "平台兼容方向",
            "value": "仅用于对应电池接口与随箱型号"
          },
          {
            "label": "配置说明",
            "value": "原创概念效果图；参数与价格为展示参考"
          }
        ]
      }
    ],
    "inBox": [
      "玩具车 USB 充电器 × 1",
      "安装与使用说明"
    ],
    "relatedAccessories": []
  },
  {
    "slug": "charging-base",
    "name": "模型赛道充电底座",
    "englishName": "CHARGING BASE",
    "category": "玩具车配件",
    "tagline": "让赛道的终点，成为下一次起点。",
    "description": "让赛道的终点，成为下一次起点。围绕指定 Omni / Vision 教学套装规划的拓展组件，让小车的维护、搭建与玩法更有条理。采购前请核对实际型号、接口与配套说明。",
    "positioning": "配件图片为原创概念效果图，实际供货、参数和适配关系需确认。",
    "image": "/images/accessories/charging-base.webp",
    "features": [
      "定位标记",
      "停靠教学",
      "状态反馈"
    ],
    "specs": [
      {
        "label": "配置参考",
        "value": "USB-C 供电 / 接触式充电参考"
      },
      {
        "label": "兼容方向",
        "value": "指定 Omni / Vision 教学套装"
      },
      {
        "label": "用途",
        "value": "玩具车维护、编程或创意拓展"
      },
      {
        "label": "安装与使用",
        "value": "按随箱说明操作，儿童需成人协助"
      },
      {
        "label": "匹配要求",
        "value": "核对车型、接口、电压与控制板版本"
      },
      {
        "label": "外形尺寸参考",
        "value": "220 × 160 × 40 mm"
      },
      {
        "label": "重量参考",
        "value": "250 g"
      },
      {
        "label": "供电参考",
        "value": "USB-C 5 V"
      },
      {
        "label": "性能参考",
        "value": "5 V / 1 A 参考"
      },
      {
        "label": "接口与配套参考",
        "value": "指定 2 针接触接口"
      },
      {
        "label": "平台兼容方向",
        "value": "指定 Omni / Vision 教学套装"
      },
      {
        "label": "配置说明",
        "value": "原创概念效果图；参数与价格为展示参考"
      }
    ],
    "useCases": [
      "创客拼装",
      "STEM 编程课堂",
      "家庭创意任务"
    ],
    "highlights": [
      "定位标记",
      "停靠教学",
      "状态反馈"
    ],
    "cta": "咨询配件适配",
    "seoTitle": "模型赛道充电底座配置与适配｜RobotCar 玩具车配件",
    "seoDescription": "了解模型赛道充电底座的兼容方向、配置参考和玩具机器人车搭配方法。",
    "kind": "accessory",
    "family": "power",
    "tier": "配件套装",
    "badge": "玩法拓展",
    "priceCNY": 199,
    "shortDescription": "定位标记 · 停靠教学 · 状态反馈",
    "gallery": [
      "/images/accessories/charging-base.webp"
    ],
    "keyStats": [
      {
        "label": "配置参考",
        "value": "USB-C 供电 / 接触式充电参考"
      },
      {
        "label": "兼容方向",
        "value": "指定 Omni / Vision 教学套装"
      },
      {
        "label": "重量参考",
        "value": "250 g"
      }
    ],
    "specificationGroups": [
      {
        "name": "配置与参数示例",
        "rows": [
          {
            "label": "配置参考",
            "value": "USB-C 供电 / 接触式充电参考"
          },
          {
            "label": "兼容方向",
            "value": "指定 Omni / Vision 教学套装"
          },
          {
            "label": "用途",
            "value": "玩具车维护、编程或创意拓展"
          },
          {
            "label": "安装与使用",
            "value": "按随箱说明操作，儿童需成人协助"
          },
          {
            "label": "匹配要求",
            "value": "核对车型、接口、电压与控制板版本"
          },
          {
            "label": "外形尺寸参考",
            "value": "220 × 160 × 40 mm"
          },
          {
            "label": "重量参考",
            "value": "250 g"
          },
          {
            "label": "供电参考",
            "value": "USB-C 5 V"
          },
          {
            "label": "性能参考",
            "value": "5 V / 1 A 参考"
          },
          {
            "label": "接口与配套参考",
            "value": "指定 2 针接触接口"
          }
        ]
      },
      {
        "name": "兼容与集成",
        "rows": [
          {
            "label": "平台兼容方向",
            "value": "指定 Omni / Vision 教学套装"
          },
          {
            "label": "配置说明",
            "value": "原创概念效果图；参数与价格为展示参考"
          }
        ]
      }
    ],
    "inBox": [
      "模型赛道充电底座 × 1",
      "安装与使用说明"
    ],
    "relatedAccessories": []
  },
  {
    "slug": "gripper-kit",
    "name": "积木夹爪拓展套装",
    "englishName": "GRIPPER KIT",
    "category": "玩具车配件",
    "tagline": "让小小任务，多一个精彩动作。",
    "description": "让小小任务，多一个精彩动作。围绕Cargo / Maker，按孔位和控制板适配规划的拓展组件，让小车的维护、搭建与玩法更有条理。采购前请核对实际型号、接口与配套说明。",
    "positioning": "配件图片为原创概念效果图，实际供货、参数和适配关系需确认。",
    "image": "/images/accessories/gripper-kit.webp",
    "features": [
      "微型舵机",
      "夹取积木",
      "可拆支架"
    ],
    "specs": [
      {
        "label": "配置参考",
        "value": "微型舵机 / 小积木夹取参考"
      },
      {
        "label": "兼容方向",
        "value": "Cargo / Maker，按孔位和控制板适配"
      },
      {
        "label": "用途",
        "value": "玩具车维护、编程或创意拓展"
      },
      {
        "label": "安装与使用",
        "value": "按随箱说明操作，儿童需成人协助"
      },
      {
        "label": "匹配要求",
        "value": "核对车型、接口、电压与控制板版本"
      },
      {
        "label": "外形尺寸参考",
        "value": "120 × 85 × 100 mm"
      },
      {
        "label": "重量参考",
        "value": "110 g"
      },
      {
        "label": "供电参考",
        "value": "5 V 舵机供电"
      },
      {
        "label": "性能参考",
        "value": "50 g 小积木夹取参考"
      },
      {
        "label": "接口与配套参考",
        "value": "180° 舵机角度参考"
      },
      {
        "label": "平台兼容方向",
        "value": "Cargo / Maker，按孔位和控制板适配"
      },
      {
        "label": "配置说明",
        "value": "原创概念效果图；参数与价格为展示参考"
      }
    ],
    "useCases": [
      "创客拼装",
      "STEM 编程课堂",
      "家庭创意任务"
    ],
    "highlights": [
      "微型舵机",
      "夹取积木",
      "可拆支架"
    ],
    "cta": "咨询配件适配",
    "seoTitle": "积木夹爪拓展套装配置与适配｜RobotCar 玩具车配件",
    "seoDescription": "了解积木夹爪拓展套装的兼容方向、配置参考和玩具机器人车搭配方法。",
    "kind": "accessory",
    "family": "components",
    "tier": "配件套装",
    "badge": "玩法拓展",
    "priceCNY": 149,
    "shortDescription": "微型舵机 · 夹取积木 · 可拆支架",
    "gallery": [
      "/images/accessories/gripper-kit.webp"
    ],
    "keyStats": [
      {
        "label": "配置参考",
        "value": "微型舵机 / 小积木夹取参考"
      },
      {
        "label": "兼容方向",
        "value": "Cargo / Maker，按孔位和控制板适配"
      },
      {
        "label": "重量参考",
        "value": "110 g"
      }
    ],
    "specificationGroups": [
      {
        "name": "配置与参数示例",
        "rows": [
          {
            "label": "配置参考",
            "value": "微型舵机 / 小积木夹取参考"
          },
          {
            "label": "兼容方向",
            "value": "Cargo / Maker，按孔位和控制板适配"
          },
          {
            "label": "用途",
            "value": "玩具车维护、编程或创意拓展"
          },
          {
            "label": "安装与使用",
            "value": "按随箱说明操作，儿童需成人协助"
          },
          {
            "label": "匹配要求",
            "value": "核对车型、接口、电压与控制板版本"
          },
          {
            "label": "外形尺寸参考",
            "value": "120 × 85 × 100 mm"
          },
          {
            "label": "重量参考",
            "value": "110 g"
          },
          {
            "label": "供电参考",
            "value": "5 V 舵机供电"
          },
          {
            "label": "性能参考",
            "value": "50 g 小积木夹取参考"
          },
          {
            "label": "接口与配套参考",
            "value": "180° 舵机角度参考"
          }
        ]
      },
      {
        "name": "兼容与集成",
        "rows": [
          {
            "label": "平台兼容方向",
            "value": "Cargo / Maker，按孔位和控制板适配"
          },
          {
            "label": "配置说明",
            "value": "原创概念效果图；参数与价格为展示参考"
          }
        ]
      }
    ],
    "inBox": [
      "积木夹爪拓展套装 × 1",
      "安装与使用说明"
    ],
    "relatedAccessories": []
  },
  {
    "slug": "controller-board",
    "name": "ESP32 编程控制板",
    "englishName": "CONTROLLER BOARD",
    "category": "玩具车配件",
    "tagline": "让第一行代码，找到出发的方向。",
    "description": "让第一行代码，找到出发的方向。围绕Maker / Omni / Vision 编程套装规划的拓展组件，让小车的维护、搭建与玩法更有条理。采购前请核对实际型号、接口与配套说明。",
    "positioning": "配件图片为原创概念效果图，实际供货、参数和适配关系需确认。",
    "image": "/images/accessories/controller-board.webp",
    "features": [
      "图形化编程",
      "传感器连接",
      "车轮控制"
    ],
    "specs": [
      {
        "label": "配置参考",
        "value": "ESP32 / USB-C / 模块插座参考"
      },
      {
        "label": "兼容方向",
        "value": "Maker / Omni / Vision 编程套装"
      },
      {
        "label": "用途",
        "value": "玩具车维护、编程或创意拓展"
      },
      {
        "label": "安装与使用",
        "value": "按随箱说明操作，儿童需成人协助"
      },
      {
        "label": "匹配要求",
        "value": "核对车型、接口、电压与控制板版本"
      },
      {
        "label": "外形尺寸参考",
        "value": "100 × 75 × 18 mm"
      },
      {
        "label": "重量参考",
        "value": "60 g"
      },
      {
        "label": "供电参考",
        "value": "USB-C 5 V"
      },
      {
        "label": "性能参考",
        "value": "4 MB Flash 参考"
      },
      {
        "label": "接口与配套参考",
        "value": "6 路模块连接参考"
      },
      {
        "label": "平台兼容方向",
        "value": "Maker / Omni / Vision 编程套装"
      },
      {
        "label": "配置说明",
        "value": "原创概念效果图；参数与价格为展示参考"
      }
    ],
    "useCases": [
      "创客拼装",
      "STEM 编程课堂",
      "家庭创意任务"
    ],
    "highlights": [
      "图形化编程",
      "传感器连接",
      "车轮控制"
    ],
    "cta": "咨询配件适配",
    "seoTitle": "ESP32 编程控制板配置与适配｜RobotCar 玩具车配件",
    "seoDescription": "了解ESP32 编程控制板的兼容方向、配置参考和玩具机器人车搭配方法。",
    "kind": "accessory",
    "family": "sensing",
    "tier": "配件套装",
    "badge": "玩法拓展",
    "priceCNY": 279,
    "shortDescription": "图形化编程 · 传感器连接 · 车轮控制",
    "gallery": [
      "/images/accessories/controller-board.webp"
    ],
    "keyStats": [
      {
        "label": "配置参考",
        "value": "ESP32 / USB-C / 模块插座参考"
      },
      {
        "label": "兼容方向",
        "value": "Maker / Omni / Vision 编程套装"
      },
      {
        "label": "重量参考",
        "value": "60 g"
      }
    ],
    "specificationGroups": [
      {
        "name": "配置与参数示例",
        "rows": [
          {
            "label": "配置参考",
            "value": "ESP32 / USB-C / 模块插座参考"
          },
          {
            "label": "兼容方向",
            "value": "Maker / Omni / Vision 编程套装"
          },
          {
            "label": "用途",
            "value": "玩具车维护、编程或创意拓展"
          },
          {
            "label": "安装与使用",
            "value": "按随箱说明操作，儿童需成人协助"
          },
          {
            "label": "匹配要求",
            "value": "核对车型、接口、电压与控制板版本"
          },
          {
            "label": "外形尺寸参考",
            "value": "100 × 75 × 18 mm"
          },
          {
            "label": "重量参考",
            "value": "60 g"
          },
          {
            "label": "供电参考",
            "value": "USB-C 5 V"
          },
          {
            "label": "性能参考",
            "value": "4 MB Flash 参考"
          },
          {
            "label": "接口与配套参考",
            "value": "6 路模块连接参考"
          }
        ]
      },
      {
        "name": "兼容与集成",
        "rows": [
          {
            "label": "平台兼容方向",
            "value": "Maker / Omni / Vision 编程套装"
          },
          {
            "label": "配置说明",
            "value": "原创概念效果图；参数与价格为展示参考"
          }
        ]
      }
    ],
    "inBox": [
      "ESP32 编程控制板 × 1",
      "安装与使用说明"
    ],
    "relatedAccessories": []
  }
];

export const products: Product[] = [...carProducts, ...accessoryProducts];
export const formatPrice = (price: number) => `¥${price.toLocaleString('zh-CN')}`;
export const getProduct = (slug: string) => products.find(product => product.slug === slug);

export const company = { name: 'RobotCar', tagline: '让玩乐拥有智能，让想象开始行动', description: 'RobotCar 是围绕玩具机器人车、遥控竞速与编程教育套装的产品展示平台。我们用清晰的配置、原创车类效果图和具体的玩法场景，连接科技爱好者、家庭与教育团队，让一次出发成为新的学习与创造。', productNotice: '概念套装预览。价格和参数为示例，购物车、订单与支付为演示流程；实际商品、适龄标识、供货、交付与服务需确认。', sourceNote: '全部车类产品与配件为原创三维概念渲染，场景为生成式概念图片，不代表已完成量产或认证。', contactLabel: '沟通你的玩乐与课程需求' };
