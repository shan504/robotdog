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
    slug: 'education', name: '教育与教学', eyebrow: 'LEARN BY BUILDING',
    headline: '让课堂上的想象，\n在现实里迈出第一步。',
    description: '从机械结构到运动控制，从传感器数据到智能决策。让四足机器人成为看得见、可实践的跨学科学习平台。',
    image: '/images/scenes/research.jpg', imageAlt: '明亮的机器人实验室，呈现四足机器人教学与研发氛围',
    tags: ['高校教学', '机器人课程', '开发实践'], productSlugs: ['go2-edu-starter', 'go2-pro'],
    context: '把一台机器狗带进课堂，可以打开机械、电子、控制和计算机之间的连接。真正适合教学的方案，还需要将课程目标、开发接口和实验组织一起设计：学生要观察什么、读取什么、改变什么，以及如何解释实验结果。',
    opportunities: [
      { title: '从结构，看懂运动', text: '观察关节、自由度和步态的关系，将抽象的运动学知识与真实设备连接。按学生阶段安排结构分析、轨迹观察和基础控制实验。', icon: 'terrain' },
      { title: '从数据，理解感知', text: '围绕相机、雷达和惯性传感器建立数据采集与可视化练习，比较噪声、遮挡和光照对结果的影响。所需数据权限应在选型时确认。', icon: 'eye' },
      { title: '从代码，验证想法', text: '在对应机型开放的 SDK 与控制范围内，用示例程序建立基线，逐步开展定位、规划或控制研究，并记录可复现的实验过程。', icon: 'code' },
    ],
    workflow: [
      { title: '定义课程成果', text: '说明学生基础、课程时长和希望完成的实验，形成按层次推进的学习路径。' },
      { title: '匹配开发配置', text: '核对 SDK、软件版本、计算设备和传感器组合，先运行一个代表性基础实验。' },
      { title: '建立教学基线', text: '固定设备配置和实验条件，准备讲义、数据记录和设备共用流程。' },
      { title: '拓展项目实践', text: '从能够重复的小任务，逐步扩展到课程设计、竞赛或实验室课题。' },
    ],
    requirements: ['教学对象与现有编程基础', '计划课程、实验与开放接口需求', '实验室面积、地面与设备共享安排', '预算、设备数量与交付计划'],
    articleSlug: 'quadruped-robot-education-research',
  },
  {
    slug: 'inspection', name: '智慧巡检', eyebrow: 'SEE MORE. GO FURTHER.',
    headline: '把每一次到达，\n变成更有价值的观察。',
    description: '面对台阶、复杂通道与分散点位，探索四足移动平台与任务载荷的组合，让现场信息进入可追溯的数据流程。',
    image: '/images/scenes/inspection.jpg', imageAlt: '工业设施与四足机器人构成的巡检应用场景示意',
    tags: ['工业设施', '园区巡检', '现场采集'], productSlugs: ['b2-inspection', 'b2-standard'],
    context: '巡检的价值不只在于走过一条路线，更在于带回能够支持判断的信息。围绕设备图像、仪表读数或温度数据，从点位、视角和载荷开始设计任务，再结合地面、网络与现场作业条件验证可行性。',
    opportunities: [
      { title: '路线，连接点位', text: '结合台阶、坡道和狭窄区域评估通行条件，为代表性点位设计停靠与观察位置。复杂地形的表现需要按具体机型现场验证。', icon: 'terrain' },
      { title: '载荷，服务任务', text: '按采集目标搭配可见光、热成像或其他模块，并验证安装、视野、供电与数据质量。模块兼容性以确认配置为准。', icon: 'eye' },
      { title: '数据，进入工作流', text: '将采集、回传、留存和异常复核组织成完整流程。与现有平台对接时，提前确认接口、权限和现场网络条件。', icon: 'code' },
    ],
    workflow: [
      { title: '现场勘查', text: '整理路线、障碍、巡检点位和任务频率，确认常见与特殊工况。' },
      { title: '配置评估', text: '核对平台、载荷、供电、网络和完整任务的运行时间。' },
      { title: '代表性试点', text: '以采集成功率、数据质量和人工介入记录检验方案。' },
      { title: '规划部署', text: '根据试点结果明确运行范围、维护流程与人工处置条件。' },
    ],
    requirements: ['现场照片、平面图与完整路线', '点位、采集内容和结果使用方式', '温湿度、粉尘、网络与作业限制', '试点验收标准及系统对接需求'],
    articleSlug: 'robot-dog-inspection-planning',
  },
  {
    slug: 'rescue', name: '应急与勘察', eyebrow: 'INTO THE UNKNOWN',
    headline: '未知的前方，\n先让信息抵达。',
    description: '探索四足机器人在复杂区域的遥操作与信息采集，为现场判断提供更多视角。任务设计从环境评估、通信和人员协同开始。',
    image: '/images/scenes/exploration.jpg', imageAlt: '机器狗在复杂户外地形的探索场景示意',
    tags: ['环境勘察', '遥操作', '应急研究'], productSlugs: ['b2-standard', 'b2-inspection'],
    context: '在不熟悉的环境里，首先需要知道的是前方有什么。四足平台可以作为遥操作与感知研究的载体，探索图像回传、地图建立与环境记录。实际应急作业涉及通信、环境耐受与现场组织，必须完成针对性验证后再确定可使用的范围。',
    opportunities: [
      { title: '更多视角', text: '通过摄像设备和可选感知载荷观察环境，将现场影像交给人员判断。视野、分辨率和弱光表现需要在目标环境验证。', icon: 'eye' },
      { title: '复杂路线评估', text: '针对碎石、坡道、台阶等条件开展受控实验，记录通过能力与限制。避免将演示片段直接当作现场任务承诺。', icon: 'terrain' },
      { title: '人与设备协同', text: '规划操作位置、无线覆盖、任务中止和回收方式。将人工判断保留在关键流程中，再逐步扩大研究任务的边界。', icon: 'shield' },
    ],
    workflow: [
      { title: '限定任务区域', text: '说明环境类型、观察目标和人员组织，选取可控的验证现场。' },
      { title: '核对完整系统', text: '评估遥操作、通信、图像回传、载荷与电池配置。' },
      { title: '演练关键流程', text: '测试通信中断、任务终止和设备回收，记录操作要求。' },
      { title: '明确使用边界', text: '根据演练证据形成可执行范围，特殊作业资格另行核验。' },
    ],
    requirements: ['场景类型与需要获取的现场信息', '路线、温度、积水与障碍条件', '操作距离、网络与回传需求', '人员分工及验证与回收流程'],
    articleSlug: 'spatial-intelligence',
  },
  {
    slug: 'logistics', name: '移动与搬运', eyebrow: 'MOTION WITH PURPOSE',
    headline: '让移动的能力，\n接上任务的最后一程。',
    description: '面向园区、实验室与特殊路线，探索负载移动、工具携带和末端作业。平台、载荷和实际任务需要作为一个整体评估。',
    image: '/images/scenes/inspection.jpg', imageAlt: '面向移动搬运研究的工业作业环境示意',
    tags: ['载荷移动', '园区应用', '任务协同'], productSlugs: ['b2w-standard', 'b2-standard'],
    context: '移动搬运方案要回答三个问题：带什么、走哪里、如何交接。对于路线中存在台阶或非连续地面的任务，可以评估四足与轮足平台；对于平整高频路线，也应比较其他移动方案，以完整任务效率决定平台选择。',
    opportunities: [
      { title: '负载与路线匹配', text: '比较任务载荷、重心与路线条件，关注负载下的实际行走时间。载荷规格和装配方式均需以对应机型确认。', icon: 'terrain' },
      { title: '模块协同', text: '根据任务需要评估载物结构、机械臂或其他扩展模块，核对安装、供电与控制接口，先完成单项任务验证。', icon: 'code' },
      { title: '交接流程设计', text: '将出发、到达、等待、卸载和返回串成任务流程，明确人员与设备的职责，评估调度与网络条件。', icon: 'clock' },
    ],
    workflow: [
      { title: '拆解搬运任务', text: '记录物品尺寸、质量、频率、距离与交接方式。' },
      { title: '对比移动平台', text: '结合地形、成本和任务节拍，评估四足或轮足配置。' },
      { title: '验证完整负载', text: '测试实际载荷下的通行、续航和装卸流程。' },
      { title: '连接任务系统', text: '在试点通过后评估调度接口、权限与日常维护安排。' },
    ],
    requirements: ['物品尺寸、质量与搬运频次', '完整路线、门槛与地面条件', '装卸交接和人员活动情况', '任务节拍、调度与接口要求'],
    articleSlug: 'multi-robot-collaboration',
  },
  {
    slug: 'research', name: '具身智能研发', eyebrow: 'IDEAS INTO ACTION',
    headline: '让算法拥有身体，\n让突破发生在真实世界。',
    description: '从感知与规划到策略学习，以可复现的实验连接仿真和实机。把每一次迭代，都变成能够比较的研究结果。',
    image: '/images/scenes/future.jpg', imageAlt: '具有科技感的机器人研究空间与智能计算场景示意',
    tags: ['具身智能', '仿真迁移', '算法验证'], productSlugs: ['as2-edu', 'go2-edu-vision'],
    context: '具身智能将观察、决策与动作放进同一个循环。四足机器人为研究提供了真实的移动与交互载体，但平台选择必须服务于研究方法：所需的控制权限、观测数据、计算资源和实验频率，都应在选型前明确。',
    opportunities: [
      { title: '感知与空间理解', text: '围绕定位、地图、地形与目标识别设计实验，将传感器数据与动作结果对齐，建立能够复现的观察基线。', icon: 'eye' },
      { title: '仿真与实机连接', text: '从模型、接口和时间同步开始，研究仿真到现实的误差来源。实机验证应由可控的小任务逐步推进。', icon: 'code' },
      { title: '研究数据闭环', text: '记录软件版本、配置、环境与失败情形，形成可比较的训练和评估数据；扩展实验时保留统一基线。', icon: 'terrain' },
    ],
    workflow: [
      { title: '说明研究问题', text: '写清算法需要的输入、控制粒度、数据频率与评价指标。' },
      { title: '核对接口边界', text: '验证 SDK、固件、许可、外接计算和仿真工具的真实兼容性。' },
      { title: '建立实验基线', text: '固定任务、配置与采集方式，保存每轮实验记录。' },
      { title: '开展迭代验证', text: '按变量推进仿真与实机研究，以结果决定下一阶段配置。' },
    ],
    requirements: ['研究目标与控制接口粒度', 'SDK、框架及软件版本需求', '传感器、算力和同步采集要求', '实验场地、数据管理与评价方法'],
    articleSlug: 'embodied-intelligence',
  },
  {
    slug: 'exhibition', name: '展示与互动', eyebrow: 'MAKE TECHNOLOGY FELT',
    headline: '科技不只被看见，\n更让人记住。',
    description: '让机器狗走进展厅、科普空间与品牌活动。以真实的运动表现、清晰的互动节奏，创造更有记忆点的科技体验。',
    image: '/images/scenes/team.jpg', imageAlt: '充满未来感的机器人展示与交流空间示意',
    tags: ['科技展厅', '科普体验', '品牌互动'], productSlugs: ['go2-pro', 'go2-air'],
    context: '好的科技展示让观众同时感受到惊喜与理解。围绕活动目的，把运动演示、知识介绍和互动安排组合起来，再以场地、人数与操作条件确定流程，避免只有热闹的动作却没有清晰的体验主题。',
    opportunities: [
      { title: '动态视觉记忆', text: '通过适合场地的步态与动作演示，突出机器人运动的直观魅力。展示动作按具体设备支持范围和现场条件确认。', icon: 'terrain' },
      { title: '从观看到理解', text: '围绕传感器、结构和控制方式设计科普内容，将设备表现与简单易懂的解释连接，支持不同年龄的观众参与。', icon: 'eye' },
      { title: '可组织的互动', text: '规划观众站位、体验时长与操作人员职责，安排充电、设备检查和备用流程，让现场体验保持连贯。', icon: 'clock' },
    ],
    workflow: [
      { title: '明确活动主题', text: '确定观众、规模、展示目的与需要传达的科技故事。' },
      { title: '匹配场地配置', text: '核对地面、面积、照明与电源，选择合适的设备与展示内容。' },
      { title: '排练互动流程', text: '演练动作、解说、观众参与和设备充电安排。' },
      { title: '组织现场运行', text: '安排操作、引导与检查流程，形成可重复使用的活动方案。' },
    ],
    requirements: ['活动主题、时间与观众规模', '现场面积、地面与电源条件', '演示内容与互动方式', '运行时长、操作人员与备用安排'],
    articleSlug: 'how-to-choose-a-robot-dog',
  },
];
