export type Solution = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  productSlugs: string[];
  context: string;
  opportunities: { title: string; text: string; icon: string }[];
  workflow: { title: string; text: string }[];
  requirements: string[];
  articleSlug: string;
};

export const solutions: Solution[] = [
  {
    "slug": "education",
    "name": "STEM 编程课堂",
    "eyebrow": "LEARN BY DRIVING",
    "headline": "让第一行代码，\n带着好奇心出发。",
    "description": "通过车轮运动、传感器反馈与小车任务，把编程知识变成可观察的课堂实验。",
    "image": "/images/scenes/workshop.webp",
    "imageAlt": "STEM 编程课堂中的四轮玩具机器人车概念场景",
    "tags": [
      "图形化编程",
      "传感器实验",
      "课堂项目"
    ],
    "productSlugs": [
      "maker-start",
      "omni-code"
    ],
    "context": "通过车轮运动、传感器反馈与小车任务，把编程知识变成可观察的课堂实验。一个有趣的项目，从适合参与者的目标开始。先让大家理解小车如何转向、如何停下和如何完成路线，再把积木、传感器与程序加入任务。RobotCar 将产品与玩法放在一起介绍，帮助家庭与教育团队从小而具体的挑战开始。",
    "opportunities": [
      {
        "title": "把玩法看清楚",
        "text": "围绕STEM 编程课堂设定一次能够完成的小挑战，说明起点、目标与操作方式。用可观察的结果建立兴趣，再逐步提高难度。",
        "icon": "terrain"
      },
      {
        "title": "让配置服务创意",
        "text": "按照年龄、场地和学习目标选择遥控或编程套装。对照电池、轮胎、控制板和模块清单，确认每一项扩展能够实际使用。",
        "icon": "code"
      },
      {
        "title": "记录每一次进步",
        "text": "比较转向、速度与传感器数据的变化，记录完成路线的时间和调整方法，让体验也成为可以讨论的学习过程。",
        "icon": "eye"
      }
    ],
    "workflow": [
      {
        "title": "确定玩法目标",
        "text": "说明年龄、已有经验、体验人数与希望完成的挑战。"
      },
      {
        "title": "选择小车与套装",
        "text": "核对遥控、编程、相机和积木模块，形成具体的配置清单。"
      },
      {
        "title": "搭建体验路线",
        "text": "从干燥平整的受控场地开始，安排边界、缓冲区与分组使用。"
      },
      {
        "title": "验证与拓展",
        "text": "先完成基础玩法，再增加传感器、代码或协作任务。"
      }
    ],
    "requirements": [
      "参与者年龄、经验与体验人数",
      "使用场地、路线与活动时间",
      "遥控、编程或传感器扩展需求",
      "预算、数量与具体商品确认"
    ],
    "articleSlug": "robot-car-stem-learning"
  },
  {
    "slug": "racing",
    "name": "遥控竞速",
    "eyebrow": "SMALL TRACK. BIG EXCITEMENT.",
    "headline": "把每一道弯，\n变成精彩的挑战。",
    "description": "从比例转向到赛道节奏，在玩具尺度的竞速场地里练习观察、判断与操作。",
    "image": "/images/scenes/race.webp",
    "imageAlt": "遥控竞速中的四轮玩具机器人车概念场景",
    "tags": [
      "模型赛道",
      "转向练习",
      "亲子竞速"
    ],
    "productSlugs": [
      "circuit-pro",
      "drift-track"
    ],
    "context": "从比例转向到赛道节奏，在玩具尺度的竞速场地里练习观察、判断与操作。一个有趣的项目，从适合参与者的目标开始。先让大家理解小车如何转向、如何停下和如何完成路线，再把积木、传感器与程序加入任务。RobotCar 将产品与玩法放在一起介绍，帮助家庭与教育团队从小而具体的挑战开始。",
    "opportunities": [
      {
        "title": "把玩法看清楚",
        "text": "围绕遥控竞速设定一次能够完成的小挑战，说明起点、目标与操作方式。用可观察的结果建立兴趣，再逐步提高难度。",
        "icon": "terrain"
      },
      {
        "title": "让配置服务创意",
        "text": "按照年龄、场地和学习目标选择遥控或编程套装。对照电池、轮胎、控制板和模块清单，确认每一项扩展能够实际使用。",
        "icon": "code"
      },
      {
        "title": "记录每一次进步",
        "text": "比较转向、速度与传感器数据的变化，记录完成路线的时间和调整方法，让体验也成为可以讨论的学习过程。",
        "icon": "eye"
      }
    ],
    "workflow": [
      {
        "title": "确定玩法目标",
        "text": "说明年龄、已有经验、体验人数与希望完成的挑战。"
      },
      {
        "title": "选择小车与套装",
        "text": "核对遥控、编程、相机和积木模块，形成具体的配置清单。"
      },
      {
        "title": "搭建体验路线",
        "text": "从干燥平整的受控场地开始，安排边界、缓冲区与分组使用。"
      },
      {
        "title": "验证与拓展",
        "text": "先完成基础玩法，再增加传感器、代码或协作任务。"
      }
    ],
    "requirements": [
      "参与者年龄、经验与体验人数",
      "使用场地、路线与活动时间",
      "遥控、编程或传感器扩展需求",
      "预算、数量与具体商品确认"
    ],
    "articleSlug": "robot-car-track-design"
  },
  {
    "slug": "exploration",
    "name": "户外趣玩",
    "eyebrow": "TAKE PLAY OUTSIDE",
    "headline": "越过小障碍，\n发现新路线。",
    "description": "在干燥、安全的模型路线中体验四驱小车，组织坡道、绕桩与控速挑战。",
    "image": "/images/scenes/race.webp",
    "imageAlt": "户外趣玩中的四轮玩具机器人车概念场景",
    "tags": [
      "四驱小车",
      "公园模型路线",
      "路线挑战"
    ],
    "productSlugs": [
      "rover-pro",
      "rover-x"
    ],
    "context": "在干燥、安全的模型路线中体验四驱小车，组织坡道、绕桩与控速挑战。一个有趣的项目，从适合参与者的目标开始。先让大家理解小车如何转向、如何停下和如何完成路线，再把积木、传感器与程序加入任务。RobotCar 将产品与玩法放在一起介绍，帮助家庭与教育团队从小而具体的挑战开始。",
    "opportunities": [
      {
        "title": "把玩法看清楚",
        "text": "围绕户外趣玩设定一次能够完成的小挑战，说明起点、目标与操作方式。用可观察的结果建立兴趣，再逐步提高难度。",
        "icon": "terrain"
      },
      {
        "title": "让配置服务创意",
        "text": "按照年龄、场地和学习目标选择遥控或编程套装。对照电池、轮胎、控制板和模块清单，确认每一项扩展能够实际使用。",
        "icon": "code"
      },
      {
        "title": "记录每一次进步",
        "text": "比较转向、速度与传感器数据的变化，记录完成路线的时间和调整方法，让体验也成为可以讨论的学习过程。",
        "icon": "eye"
      }
    ],
    "workflow": [
      {
        "title": "确定玩法目标",
        "text": "说明年龄、已有经验、体验人数与希望完成的挑战。"
      },
      {
        "title": "选择小车与套装",
        "text": "核对遥控、编程、相机和积木模块，形成具体的配置清单。"
      },
      {
        "title": "搭建体验路线",
        "text": "从干燥平整的受控场地开始，安排边界、缓冲区与分组使用。"
      },
      {
        "title": "验证与拓展",
        "text": "先完成基础玩法，再增加传感器、代码或协作任务。"
      }
    ],
    "requirements": [
      "参与者年龄、经验与体验人数",
      "使用场地、路线与活动时间",
      "遥控、编程或传感器扩展需求",
      "预算、数量与具体商品确认"
    ],
    "articleSlug": "smart-sensing"
  },
  {
    "slug": "creative",
    "name": "家庭创意任务",
    "eyebrow": "BUILD YOUR OWN ADVENTURE",
    "headline": "给积木一段旅程，\n给想象一个方向。",
    "description": "搭建城市、运送积木和完成小任务，让桌面与客厅成为可重复创造的玩乐空间。",
    "image": "/images/scenes/workshop.webp",
    "imageAlt": "家庭创意任务中的四轮玩具机器人车概念场景",
    "tags": [
      "积木任务",
      "亲子搭建",
      "协作玩法"
    ],
    "productSlugs": [
      "cargo-builder",
      "cargo-gripper"
    ],
    "context": "搭建城市、运送积木和完成小任务，让桌面与客厅成为可重复创造的玩乐空间。一个有趣的项目，从适合参与者的目标开始。先让大家理解小车如何转向、如何停下和如何完成路线，再把积木、传感器与程序加入任务。RobotCar 将产品与玩法放在一起介绍，帮助家庭与教育团队从小而具体的挑战开始。",
    "opportunities": [
      {
        "title": "把玩法看清楚",
        "text": "围绕家庭创意任务设定一次能够完成的小挑战，说明起点、目标与操作方式。用可观察的结果建立兴趣，再逐步提高难度。",
        "icon": "terrain"
      },
      {
        "title": "让配置服务创意",
        "text": "按照年龄、场地和学习目标选择遥控或编程套装。对照电池、轮胎、控制板和模块清单，确认每一项扩展能够实际使用。",
        "icon": "code"
      },
      {
        "title": "记录每一次进步",
        "text": "比较转向、速度与传感器数据的变化，记录完成路线的时间和调整方法，让体验也成为可以讨论的学习过程。",
        "icon": "eye"
      }
    ],
    "workflow": [
      {
        "title": "确定玩法目标",
        "text": "说明年龄、已有经验、体验人数与希望完成的挑战。"
      },
      {
        "title": "选择小车与套装",
        "text": "核对遥控、编程、相机和积木模块，形成具体的配置清单。"
      },
      {
        "title": "搭建体验路线",
        "text": "从干燥平整的受控场地开始，安排边界、缓冲区与分组使用。"
      },
      {
        "title": "验证与拓展",
        "text": "先完成基础玩法，再增加传感器、代码或协作任务。"
      }
    ],
    "requirements": [
      "参与者年龄、经验与体验人数",
      "使用场地、路线与活动时间",
      "遥控、编程或传感器扩展需求",
      "预算、数量与具体商品确认"
    ],
    "articleSlug": "multi-car-play"
  },
  {
    "slug": "workshop",
    "name": "创客拼装",
    "eyebrow": "IDEAS ON WHEELS",
    "headline": "从一颗螺丝，\n到一次自己的出发。",
    "description": "围绕底盘、控制板、传感器和程序，组织从装配到调试的车类创客项目。",
    "image": "/images/scenes/workshop.webp",
    "imageAlt": "创客拼装中的四轮玩具机器人车概念场景",
    "tags": [
      "模块拼装",
      "Python 入门",
      "视觉实验"
    ],
    "productSlugs": [
      "maker-lab",
      "vision-ai"
    ],
    "context": "围绕底盘、控制板、传感器和程序，组织从装配到调试的车类创客项目。一个有趣的项目，从适合参与者的目标开始。先让大家理解小车如何转向、如何停下和如何完成路线，再把积木、传感器与程序加入任务。RobotCar 将产品与玩法放在一起介绍，帮助家庭与教育团队从小而具体的挑战开始。",
    "opportunities": [
      {
        "title": "把玩法看清楚",
        "text": "围绕创客拼装设定一次能够完成的小挑战，说明起点、目标与操作方式。用可观察的结果建立兴趣，再逐步提高难度。",
        "icon": "terrain"
      },
      {
        "title": "让配置服务创意",
        "text": "按照年龄、场地和学习目标选择遥控或编程套装。对照电池、轮胎、控制板和模块清单，确认每一项扩展能够实际使用。",
        "icon": "code"
      },
      {
        "title": "记录每一次进步",
        "text": "比较转向、速度与传感器数据的变化，记录完成路线的时间和调整方法，让体验也成为可以讨论的学习过程。",
        "icon": "eye"
      }
    ],
    "workflow": [
      {
        "title": "确定玩法目标",
        "text": "说明年龄、已有经验、体验人数与希望完成的挑战。"
      },
      {
        "title": "选择小车与套装",
        "text": "核对遥控、编程、相机和积木模块，形成具体的配置清单。"
      },
      {
        "title": "搭建体验路线",
        "text": "从干燥平整的受控场地开始，安排边界、缓冲区与分组使用。"
      },
      {
        "title": "验证与拓展",
        "text": "先完成基础玩法，再增加传感器、代码或协作任务。"
      }
    ],
    "requirements": [
      "参与者年龄、经验与体验人数",
      "使用场地、路线与活动时间",
      "遥控、编程或传感器扩展需求",
      "预算、数量与具体商品确认"
    ],
    "articleSlug": "onboard-ai"
  },
  {
    "slug": "exhibition",
    "name": "科技互动体验",
    "eyebrow": "PLAY THE NEXT POSSIBILITY",
    "headline": "让精彩的科技，\n成为亲手体验的快乐。",
    "description": "用小车赛道、全向移动和趣味任务，为活动空间设计清晰而有参与感的科技体验。",
    "image": "/images/scenes/future.webp",
    "imageAlt": "科技互动体验中的四轮玩具机器人车概念场景",
    "tags": [
      "科技体验",
      "互动赛道",
      "创意展示"
    ],
    "productSlugs": [
      "omni-play",
      "transform-flex"
    ],
    "context": "用小车赛道、全向移动和趣味任务，为活动空间设计清晰而有参与感的科技体验。一个有趣的项目，从适合参与者的目标开始。先让大家理解小车如何转向、如何停下和如何完成路线，再把积木、传感器与程序加入任务。RobotCar 将产品与玩法放在一起介绍，帮助家庭与教育团队从小而具体的挑战开始。",
    "opportunities": [
      {
        "title": "把玩法看清楚",
        "text": "围绕科技互动体验设定一次能够完成的小挑战，说明起点、目标与操作方式。用可观察的结果建立兴趣，再逐步提高难度。",
        "icon": "terrain"
      },
      {
        "title": "让配置服务创意",
        "text": "按照年龄、场地和学习目标选择遥控或编程套装。对照电池、轮胎、控制板和模块清单，确认每一项扩展能够实际使用。",
        "icon": "code"
      },
      {
        "title": "记录每一次进步",
        "text": "比较转向、速度与传感器数据的变化，记录完成路线的时间和调整方法，让体验也成为可以讨论的学习过程。",
        "icon": "eye"
      }
    ],
    "workflow": [
      {
        "title": "确定玩法目标",
        "text": "说明年龄、已有经验、体验人数与希望完成的挑战。"
      },
      {
        "title": "选择小车与套装",
        "text": "核对遥控、编程、相机和积木模块，形成具体的配置清单。"
      },
      {
        "title": "搭建体验路线",
        "text": "从干燥平整的受控场地开始，安排边界、缓冲区与分组使用。"
      },
      {
        "title": "验证与拓展",
        "text": "先完成基础玩法，再增加传感器、代码或协作任务。"
      }
    ],
    "requirements": [
      "参与者年龄、经验与体验人数",
      "使用场地、路线与活动时间",
      "遥控、编程或传感器扩展需求",
      "预算、数量与具体商品确认"
    ],
    "articleSlug": "playful-ai"
  }
];
