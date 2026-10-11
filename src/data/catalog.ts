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
  kind: 'robot' | 'accessory';
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

const previewNotice = 'RobotDog 选型组合展示。价格为演示价，配置与数值参数为页面设计示例，并非官方确认规格；实际平台版本、配置、库存、报价及供货关系须在采购前确认。';

export const families: ProductFamily[] = [
  { slug: 'as2', name: 'As2', group: 'consumer', image: '/images/catalog/as2.jpg', description: '轻量力量，探索更大的边界' },
  { slug: 'go2', name: 'Go2', group: 'consumer', image: '/images/catalog/go2.jpg', description: '让具身智能，走进日常' },
  { slug: 'go2w', name: 'Go2-W', group: 'consumer', image: '/images/catalog/go2w.jpg', description: '轮足协同，行动更从容' },
  { slug: 'go1', name: 'Go1', group: 'consumer', image: '/images/catalog/go1.jpg', description: '经典四足，轻盈启程' },
  { slug: 'a1', name: 'A1', group: 'consumer', image: '/images/catalog/a1.jpg', description: '紧凑平台，实验室里的灵感伙伴' },
  { slug: 'b2', name: 'B2', group: 'industry', image: '/images/catalog/b2.jpg', description: '更强负载，深入任务现场' },
  { slug: 'b2w', name: 'B2-W', group: 'industry', image: '/images/catalog/b2w.jpg', description: '轮足融合，拓宽作业半径' },
  { slug: 'b1', name: 'B1', group: 'industry', image: '/images/catalog/b1.jpg', description: '面向复杂场地的行业选型平台' },
  { slug: 'aliengo', name: 'Aliengo', group: 'industry', image: '/images/catalog/aliengo.jpg', description: '研究级平台，连接算法与世界' },
  { slug: 'power', name: '电池与充电', group: 'accessory', image: '/images/catalog/battery.webp', description: '能量补给，让任务持续' },
  { slug: 'sensing', name: '感知与计算', group: 'accessory', image: '/images/catalog/lidar.webp', description: '看见、理解，再向前' },
  { slug: 'components', name: '控制与组件', group: 'accessory', image: '/images/catalog/motor.webp', description: '拓展每一项能力' },
];

type Platform = {
  name: string;
  image: string;
  category: string;
  dimensions: string;
  folded: string;
  weight: string;
  speed: string;
  payload: string;
  torque: string;
  runtime: string;
  battery: string;
  climb: string;
  step: string;
  sensor: string;
  interfaces: string;
  motor: string;
  operating: string;
};

// Values describe preview bundles, not a manufacturer specification feed.
const platforms: Record<string, Platform> = {
  go2: { name: 'Go2', image: '/images/catalog/go2.jpg', category: '消费级 / 科研', dimensions: '700 × 310 × 400 mm', folded: '760 × 310 × 200 mm', weight: '约 15 kg', speed: '3.5 m/s', payload: '约 7 kg', torque: '45 N·m', runtime: '约 2–3 h', battery: '28.8 V / 8,000 mAh', climb: '约 30°', step: '约 16 cm', sensor: '超广角 4D 激光雷达 + 前置摄像头', interfaces: '千兆以太网 × 1 / Wi-Fi 6 / 蓝牙', motor: '12 个低惯量永磁同步关节', operating: '0–40°C / 室内与干燥户外' },
  go2w: { name: 'Go2-W', image: '/images/catalog/go2w.jpg', category: '轮足 / 科研', dimensions: '700 × 430 × 500 mm', folded: '760 × 430 × 250 mm', weight: '约 18 kg', speed: '4 m/s', payload: '约 7 kg', torque: '45 N·m', runtime: '约 3–4 h', battery: '28.8 V / 15,000 mAh', climb: '约 35°', step: '约 18 cm', sensor: '超广角 4D 激光雷达 + 前置摄像头', interfaces: '千兆以太网 × 1 / Wi-Fi 6 / USB', motor: '12 个腿部关节 + 4 个轮毂电机', operating: '0–40°C / 平整道路与轻度非铺装路面' },
  as2: { name: 'As2', image: '/images/catalog/as2.jpg', category: '轻量级 / 行业科研', dimensions: '720 × 378 × 457 mm', folded: '776 × 378 × 233 mm', weight: '约 20 kg', speed: '5 m/s', payload: '约 15 kg', torque: '95 N·m', runtime: '约 4 h', battery: '48 V / 15,000 mAh', climb: '约 40°', step: '约 25 cm', sensor: '4D 激光雷达 + 高清前置摄像头', interfaces: '千兆以太网 × 1 / SBUS × 1 / 电源输出', motor: '12 个永磁同步关节 / 交叉滚子轴承', operating: '0–40°C / 路线评估后部署' },
  go1: { name: 'Go1', image: '/images/catalog/go1.jpg', category: '消费级 / 教学', dimensions: '645 × 280 × 400 mm', folded: '590 × 280 × 160 mm', weight: '约 12 kg', speed: '3.7 m/s', payload: '约 3 kg', torque: '23.7 N·m', runtime: '约 1–2 h', battery: '24 V / 6,000 mAh', climb: '约 25°', step: '约 15 cm', sensor: '广角视觉相机 + 惯性测量单元', interfaces: '以太网 / Wi-Fi / USB', motor: '12 个紧凑型一体化关节', operating: '0–40°C / 教学与展示场地' },
  a1: { name: 'A1', image: '/images/catalog/a1.jpg', category: '消费级 / 科研', dimensions: '500 × 300 × 400 mm', folded: '500 × 300 × 200 mm', weight: '约 12 kg', speed: '3.3 m/s', payload: '约 5 kg', torque: '33.5 N·m', runtime: '约 1–2 h', battery: '24 V / 6,000 mAh', climb: '约 25°', step: '约 15 cm', sensor: '深度视觉 + 惯性测量单元', interfaces: '以太网 / USB 3.0 / GPIO', motor: '12 个轻量化关节 / 集成编码器', operating: '0–40°C / 室内受控实验' },
  aliengo: { name: 'Aliengo', image: '/images/catalog/aliengo.jpg', category: '行业级 / 科研', dimensions: '650 × 310 × 600 mm', folded: '650 × 310 × 300 mm', weight: '约 24 kg', speed: '1.5 m/s', payload: '约 10 kg', torque: '40 N·m', runtime: '约 2–3 h', battery: '44.4 V / 12,000 mAh', climb: '约 30°', step: '约 20 cm', sensor: '双目视觉 + IMU / 激光雷达可选', interfaces: '千兆以太网 / USB 3.0 / GPIO', motor: '12 个高扭矩一体化关节', operating: '0–40°C / 室内实验与现场验证' },
  b1: { name: 'B1', image: '/images/catalog/b1.jpg', category: '行业级 / 巡检', dimensions: '1,120 × 450 × 645 mm', folded: '1,060 × 450 × 250 mm', weight: '约 50 kg', speed: '1.8 m/s', payload: '约 20 kg', torque: '120 N·m', runtime: '约 2–3 h', battery: '51.8 V / 15,000 mAh', climb: '约 30°', step: '约 20 cm', sensor: '多路深度视觉 / 行业雷达可选', interfaces: '千兆以太网 / USB / 24 V 电源输出', motor: '12 个行业级高扭矩关节', operating: '−10–45°C / 防护与工况需确认' },
  b2: { name: 'B2', image: '/images/catalog/b2.jpg', category: '行业级 / 重载', dimensions: '1,098 × 450 × 645 mm', folded: '880 × 460 × 330 mm', weight: '约 60 kg', speed: '6 m/s', payload: '约 40 kg', torque: '360 N·m', runtime: '约 4–5 h', battery: '58.8 V / 40,000 mAh', climb: '约 45°', step: '约 40 cm', sensor: '双路深度视觉 + 行业激光雷达', interfaces: '千兆以太网 / USB / 多路任务电源', motor: '12 个重载关节 / 绝对值编码器', operating: '−10–45°C / 行业环境适配需评估' },
  b2w: { name: 'B2-W', image: '/images/catalog/b2w.jpg', category: '行业级 / 轮足', dimensions: '1,090 × 610 × 750 mm', folded: '1,090 × 610 × 380 mm', weight: '约 85 kg', speed: '20 km/h', payload: '约 40 kg', torque: '360 N·m', runtime: '约 5 h', battery: '58.8 V / 40,000 mAh', climb: '约 40°', step: '约 30 cm', sensor: '行业激光雷达 + 双路深度视觉', interfaces: '千兆以太网 / USB / 多路任务电源', motor: '12 个腿部关节 + 4 个高扭矩轮毂电机', operating: '−10–45°C / 园区与混合路面' },
};

type RobotBundle = {
  slug: string;
  family: string;
  tier: string;
  title: string;
  price: number;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  useCases: string[];
  compute: string;
  software: string;
  included: string[];
  accessories: string[];
  overrides?: Partial<Platform>;
};

const robotBundles: RobotBundle[] = [
  { slug: 'go2-air', family: 'go2', tier: 'AIR', title: 'Go2 AIR', price: 9999, badge: '轻盈入门', tagline: '智能的第一步，比想象更近。', description: '以轻巧四足平台连接日常体验与机器人兴趣探索。通过遥控运动、动作演示与视觉互动，感受具身智能如何从屏幕走向现实。', features: ['4D 激光感知', '运动姿态演示', 'APP 互动'], useCases: ['个人科技体验', '科技展厅', '入门机器人课程'], compute: '基础运动控制器 / 应用处理器', software: 'APP 控制 / 标准动作库', included: ['四足机器人主机 × 1', '标准智能电池 × 1', '电源适配器 × 1', '使用与安全入门指南'], accessories: ['go2-battery', 'handheld-controller', 'standard-charger'], overrides: { speed: '2.5 m/s', runtime: '约 1–2 h' } },
  { slug: 'go2-pro', family: 'go2', tier: 'PRO', title: 'Go2 PRO', price: 16999, badge: '人气配置', tagline: '看见世界，也听懂你的想法。', description: '在灵活运动的基础上，增加更完整的交互体验。以语音、视觉与伴随控制连接日常互动，让机器人从一段演示成为一位探索伙伴。', features: ['智能伴随', '语音交互', '前置视觉'], useCases: ['品牌活动', '互动教学', '科技体验空间'], compute: '交互应用处理器 / 运动控制器', software: 'APP 控制 / 语音功能 / 伴随模式', included: ['四足机器人主机 × 1', '智能电池 × 1', '伴随控制模块 × 1', '充电器与入门指南'], accessories: ['go2-battery', 'handheld-controller', 'standard-charger'] },
  { slug: 'go2-pro-endurance', family: 'go2', tier: '长续航组合', title: 'Go2 PRO 长续航组合', price: 21999, badge: '持续探索', tagline: '再多走一段，再多发现一点。', description: '围绕长时间教学、展演与体验安排的组合配置。增加备用电池与手持控制器，便于在课程或活动中交替供能，建立更从容的体验节奏。', features: ['双电池组合', '手持控制器', '交互体验'], useCases: ['连续课程', '展会互动', '科技营地'], compute: '交互应用处理器 / 运动控制器', software: 'APP 控制 / 语音功能 / 动作编排', included: ['Go2 PRO 平台 × 1', '智能电池 × 2', '手持控制器 × 1', '充电器与收纳说明'], accessories: ['go2-battery', 'handheld-controller', 'standard-charger'], overrides: { battery: '28.8 V / 15,000 mAh（组合示例）', runtime: '约 3–4 h / 单电池示例' } },
  { slug: 'go2-edu-starter', family: 'go2', tier: 'EDU 基础科研', title: 'Go2 EDU 基础科研组合', price: 49999, badge: '科研入口', tagline: '从一个算法，到一次真实行动。', description: '为高校课程与实验室验证规划的科研选型组合。以开放接口、数据采集与基础传感器建立实验入口，连接运动控制、导航入门和机器视觉课程。', features: ['SDK 接口规划', 'ROS 2 工作流', '传感器数据'], useCases: ['高校实验', '运动控制教学', '导航算法入门'], compute: '四核开发计算单元 / 8 GB 内存', software: 'SDK / ROS 2 开发适配（交付时确认）', included: ['科研选型平台 × 1', '智能电池 × 1', '手持控制器 × 1', '接口与部署资料包'], accessories: ['go2-battery', 'edge-compute', 'lidar-module'], overrides: { interfaces: '千兆以太网 × 1 / USB 3.0 × 2 / Wi-Fi 6' } },
  { slug: 'go2-edu-vision', family: 'go2', tier: 'EDU 视觉开发', title: 'Go2 EDU 视觉开发组合', price: 79999, badge: '感知进阶', tagline: '让每一次观察，变成下一步判断。', description: '围绕视觉感知与自主导航的进阶研究组合。增加边缘计算和雷达扩展预算，面向多传感器融合、场景理解和机器人应用原型的受控实验。', features: ['边缘 AI 算力', '多传感器融合', '自主导航研究'], useCases: ['感知算法验证', 'SLAM 实验', '机器人应用原型'], compute: '40 TOPS 边缘计算模块 / 8 GB 内存', software: 'SDK / ROS 2 / 数据录制工具规划', included: ['科研选型平台 × 1', '边缘计算模块 × 1', '智能电池 × 2', '接口适配与实验指南'], accessories: ['go2-battery', 'edge-compute', 'lidar-module'], overrides: { interfaces: '千兆以太网 × 1 / USB 3.0 × 2 / GPIO' } },
  { slug: 'go2w-standard', family: 'go2w', tier: '标准轮足', title: 'Go2-W 标准组合', price: 29999, badge: '轮足协同', tagline: '该走的时候走，该滚动的时候更轻快。', description: '结合四足灵活性与轮式移动效率。为平整道路、科技展厅和轻度复杂场地提供新的体验方向，让同一平台呈现步行与滚动的不同运动方式。', features: ['轮足切换', '轮毂驱动', '4D 感知'], useCases: ['科技体验', '展厅演示', '轮足课程'], compute: '轮足协同运动控制器', software: 'APP 控制 / 轮足动作模式', included: ['轮足机器人平台 × 1', '智能电池 × 1', '手持控制器 × 1', '充电与安全资料'], accessories: ['go2-battery', 'handheld-controller', 'standard-charger'] },
  { slug: 'go2w-edu', family: 'go2w', tier: 'EDU 开发', title: 'Go2-W EDU 开发组合', price: 69999, badge: '运动研究', tagline: '把两种运动方式，写进同一个算法。', description: '面向轮足运动控制与路径规划研究的开发组合。以腿部关节和轮毂驱动的协同控制为切入点，探索不同地面的移动策略与能耗表现。', features: ['轮足 SDK', '策略验证', '数据记录'], useCases: ['轮足控制研究', '路径规划实验', '智能移动教学'], compute: '四核开发计算单元 / 8 GB 内存', software: 'SDK / ROS 2 开发适配（交付时确认）', included: ['轮足科研平台 × 1', '开发计算单元 × 1', '控制器 × 1', '接口与实验资料包'], accessories: ['go2-battery', 'edge-compute', 'lidar-module'] },
  { slug: 'go2w-navigation', family: 'go2w', tier: '导航研究', title: 'Go2-W 导航研究组合', price: 89999, badge: '探索路线', tagline: '从识别道路，到理解目的地。', description: '将轮足移动平台与边缘计算组合，用于定位、地图构建和室内自主移动的研究演示。适合在受控园区与实验场地逐步验证应用路线。', features: ['地图构建', 'AI 边缘计算', '导航实验'], useCases: ['室内自主导航', '园区路线验证', '轮足 SLAM 实验'], compute: '40 TOPS 边缘计算模块 / 8 GB 内存', software: 'ROS 2 / SLAM 工具链规划', included: ['轮足科研平台 × 1', '边缘计算模块 × 1', '雷达扩展模块 × 1', '双电池与控制器'], accessories: ['go2-battery', 'lidar-module', 'edge-compute'] },
  { slug: 'as2-air', family: 'as2', tier: 'AIR', title: 'As2 AIR 轻量组合', price: 69999, badge: '力量进阶', tagline: '轻量之身，承载更大的可能。', description: '以轻量平台为基础，规划更强关节与更高任务载荷的选型组合。适合希望从互动体验走向工程实验的团队，先验证路线，再逐步扩展任务。', features: ['轻量机身', '高扭矩关节', '外置接口'], useCases: ['工程教学', '路线验证', '任务载荷实验'], compute: '运动控制器 / 基础应用处理器', software: '遥控操作 / 标准动作模式', included: ['轻量四足平台 × 1', '智能电池 × 1', '手持控制器 × 1', '充电器与基础资料'], accessories: ['handheld-controller', 'lidar-module', 'edge-compute'], overrides: { torque: '65 N·m', speed: '3.5 m/s', runtime: '约 3 h' } },
  { slug: 'as2-pro', family: 'as2', tier: 'PRO', title: 'As2 PRO 增强组合', price: 99999, badge: '越过边界', tagline: '走得稳，才能走得更远。', description: '面向需要更强地形适应与长时运行的选型需求。通过增强关节、长续航电池及伴随交互配置，在受控试验中探索台阶、坡面与多样路线。', features: ['增强驱动', '长续航规划', '智能伴随'], useCases: ['户外实验', '展示演示', '轻型任务验证'], compute: '交互应用处理器 / 增强运动控制器', software: '遥控 / 伴随 / 动作编排规划', included: ['增强四足平台 × 1', '长续航电池 × 1', '伴随控制模块 × 1', '控制器与充电套装'], accessories: ['handheld-controller', 'lidar-module', 'edge-compute'], overrides: { torque: '75 N·m', speed: '4 m/s' } },
  { slug: 'as2-x', family: 'as2', tier: 'X 性能组合', title: 'As2 X 性能组合', price: 129999, badge: '性能探索', tagline: '每一次迈步，都在拓宽边界。', description: '为动态运动、载荷与复杂路线试验规划的性能配置。突出关节输出、平台接口与数据记录能力，帮助工程团队围绕真实任务建立验证清单。', features: ['高输出关节', '任务载荷接口', '动态运动研究'], useCases: ['地形实验', '载荷测试', '工程研发'], compute: '高频运动控制器 / 开发计算单元', software: 'SDK 接口规划 / 数据记录', included: ['性能四足平台 × 1', '智能电池 × 2', '手持控制器 × 1', '平台接口资料包'], accessories: ['lidar-module', 'edge-compute', 'robot-arm'] },
  { slug: 'as2-edu', family: 'as2', tier: 'EDU 科研组合', title: 'As2 EDU 科研组合', price: 159999, badge: '研发平台', tagline: '从控制到感知，把想法完整展开。', description: '为具身智能、视觉导航与移动操作研究规划的组合。以开放接口为核心，配合计算扩展与任务挂载思路，让不同实验方向共享一个移动底座。', features: ['科研接口', '边缘 AI 扩展', '移动操作研究'], useCases: ['具身智能研究', '自主导航', '多模块融合实验'], compute: '40 TOPS 边缘计算模块 / 16 GB 内存', software: 'SDK / ROS 2 / 仿真到实机工作流规划', included: ['科研四足平台 × 1', '边缘计算模块 × 1', '雷达扩展模块 × 1', '双电池与开发资料包'], accessories: ['lidar-module', 'edge-compute', 'robot-arm'] },
  { slug: 'go1-explorer', family: 'go1', tier: '探索组合', title: 'Go1 探索组合', price: 12999, badge: '经典入门', tagline: '一台经典四足，打开全新的好奇心。', description: '面向机器人兴趣体验与科技展演的经典平台选型。以运动展示和基础控制为主，让课程、展厅和活动中关于机器人的讨论变得直观。', features: ['经典四足平台', '轻盈运动', '遥控体验'], useCases: ['科技互动', '机器人兴趣课', '展厅体验'], compute: '基础应用处理器 / 运动控制器', software: '标准控制应用 / 动作库', included: ['经典四足平台 × 1', '电池 × 1', '遥控器 × 1', '充电器与安全指南'], accessories: ['handheld-controller', 'standard-charger'] },
  { slug: 'go1-edu', family: 'go1', tier: 'EDU 教学组合', title: 'Go1 EDU 教学组合', price: 39999, badge: '课堂实践', tagline: '让课堂的问题，在真实世界找到答案。', description: '面向基础运动控制与机器人开发课程的教学组合。围绕关节数据、姿态控制与程序化动作，构建从代码到实际行动的实验路径。', features: ['教学开发接口', '关节数据采集', '程序化动作'], useCases: ['高校教学', '机器人社团', '基础控制实验'], compute: '四核开发计算单元 / 4 GB 内存', software: 'SDK / 基础开发工具规划', included: ['教学选型平台 × 1', '开发资料包 × 1', '电池与充电套装', '遥控器 × 1'], accessories: ['handheld-controller', 'edge-compute'] },
  { slug: 'a1-lab', family: 'a1', tier: '实验室组合', title: 'A1 实验室组合', price: 49999, badge: '紧凑科研', tagline: '小巧的实验平台，容得下大胆的想法。', description: '紧凑机身与十二自由度构成基础研究平台。面向室内运动控制、步态实验和机器人课程，关注清晰接口与可重复的试验流程。', features: ['12 自由度', '紧凑机身', '关节控制实验'], useCases: ['步态研究', '机器人控制课程', '室内算法验证'], compute: '四核开发计算单元 / 4 GB 内存', software: 'SDK / Linux 开发适配规划', included: ['紧凑科研平台 × 1', '电池 × 1', '控制器 × 1', '开发与实验资料'], accessories: ['joint-motor', 'handheld-controller', 'edge-compute'] },
  { slug: 'a1-research', family: 'a1', tier: '进阶研究组合', title: 'A1 进阶研究组合', price: 69999, badge: '算法验证', tagline: '让控制策略，从仿真迈向实机。', description: '围绕强化学习、状态估计与视觉控制的进阶选型组合。增加边缘计算与传感器扩展计划，帮助实验室组织仿真、数据采集与实机验证流程。', features: ['策略部署规划', '视觉研究', '扩展计算'], useCases: ['强化学习实验', '视觉步态控制', '状态估计研究'], compute: '40 TOPS 边缘计算模块 / 8 GB 内存', software: 'SDK / ROS 2 适配 / 策略运行环境规划', included: ['科研平台 × 1', '边缘计算模块 × 1', '电池 × 2', '开发接口资料包'], accessories: ['joint-motor', 'edge-compute', 'lidar-module'] },
  { slug: 'aliengo-edu', family: 'aliengo', tier: 'EDU', title: 'Aliengo EDU 研究组合', price: 99999, badge: '研究级平台', tagline: '每个算法，都值得一次真实的迈步。', description: '面向移动机器人研究与复杂控制实验的选型平台。兼顾任务载荷与开发接口，以受控环境中的反复验证连接运动控制、感知和导航。', features: ['研究级接口', '多传感器扩展', '稳定载荷平台'], useCases: ['运动控制实验', '自主导航研究', '载荷集成'], compute: '四核开发计算单元 / 8 GB 内存', software: 'SDK / ROS 开发适配规划', included: ['研究选型平台 × 1', '电池 × 1', '控制器 × 1', '研究接口资料包'], accessories: ['edge-compute', 'lidar-module', 'robot-arm'] },
  { slug: 'aliengo-perception', family: 'aliengo', tier: '感知研究', title: 'Aliengo 感知研究组合', price: 139999, badge: '融合感知', tagline: '理解眼前的世界，再决定下一步。', description: '围绕环境建图、语义理解与多传感器融合搭建的研究组合。为雷达、视觉与边缘算力预留集成空间，帮助团队把数据记录变成可复现的实验。', features: ['行业雷达扩展', 'AI 计算单元', '数据采集'], useCases: ['语义导航', '多传感器融合', '场地地图构建'], compute: '40 TOPS 边缘计算模块 / 16 GB 内存', software: 'ROS 2 / SLAM / 数据记录工作流规划', included: ['研究选型平台 × 1', '雷达模块 × 1', '边缘计算模块 × 1', '双电池与控制器'], accessories: ['lidar-module', 'edge-compute', 'robot-arm'], overrides: { sensor: '行业激光雷达 + 双目深度相机 + IMU' } },
  { slug: 'b1-standard', family: 'b1', tier: '标准行业', title: 'B1 标准行业组合', price: 159999, badge: '走向现场', tagline: '越过复杂路面，接近真实任务。', description: '面向行业应用试点的四足选型组合。以稳定移动、任务载荷与接口扩展为起点，在部署前确认路线、地面条件和设备采集目标。', features: ['行业载荷平台', '多接口扩展', '现场路线评估'], useCases: ['园区巡检试点', '设备信息采集', '工程演示'], compute: '行业控制器 / 四核任务计算单元', software: '遥控操作 / 任务接口规划', included: ['行业四足平台 × 1', '智能电池 × 1', '行业手持控制器 × 1', '部署评估资料'], accessories: ['lidar-module', 'edge-compute', 'robot-arm'] },
  { slug: 'b1-inspection', family: 'b1', tier: '巡检组合', title: 'B1 智能巡检组合', price: 219999, badge: '任务适配', tagline: '把每条路线，变成有价值的信息。', description: '围绕路线巡查、环境记录与任务模块集成规划的组合。增加导航感知与计算预算，让现场试点能够记录位置、任务状态与采集数据。', features: ['导航感知规划', '任务数据记录', '可扩展载荷'], useCases: ['园区路线巡查', '设备状态记录', '现场试点'], compute: '40 TOPS 边缘计算模块 / 16 GB 内存', software: '导航与任务系统接口规划', included: ['行业四足平台 × 1', '行业雷达 × 1', '边缘计算模块 × 1', '双电池与部署资料'], accessories: ['lidar-module', 'edge-compute', 'charging-dock'], overrides: { sensor: '行业激光雷达 + 多路深度视觉', interfaces: '千兆以太网 × 2 / USB × 2 / 24 V 电源' } },
  { slug: 'b2-standard', family: 'b2', tier: '标准重载', title: 'B2 标准重载组合', price: 249999, badge: '力量平台', tagline: '更强的底座，承载更多的任务。', description: '以高载荷行业平台连接移动能力与现场需求。适合希望从路线巡查拓展至设备运输、移动采集与任务挂载的团队开展前期验证。', features: ['重载平台', '高扭矩关节', '长时间任务规划'], useCases: ['载荷运输验证', '行业示范', '现场信息采集'], compute: '行业运动控制器 / 任务计算单元', software: '遥控操作 / 行业接口规划', included: ['重载四足平台 × 1', '行业电池 × 1', '手持控制器 × 1', '充电与部署资料'], accessories: ['lidar-module', 'edge-compute', 'robot-arm'] },
  { slug: 'b2-inspection', family: 'b2', tier: '巡检增强', title: 'B2 巡检增强组合', price: 329999, badge: '深入现场', tagline: '看得更完整，走得更深入。', description: '为多路线行业巡查与任务采集规划的增强组合。以雷达、视觉和边缘计算支持现场感知，把路线评估、任务记录与后续集成连接起来。', features: ['行业激光雷达', '多路视觉', 'AI 任务算力'], useCases: ['工业园区巡查', '设备信息采集', '复杂路线验证'], compute: '80 TOPS 边缘计算模块 / 16 GB 内存', software: '导航 / 任务录制 / 业务系统接口规划', included: ['重载行业平台 × 1', '行业雷达 × 1', '边缘计算模块 × 1', '双电池与控制器'], accessories: ['lidar-module', 'edge-compute', 'charging-dock'] },
  { slug: 'b2-autonomous', family: 'b2', tier: '自主任务', title: 'B2 自主任务组合', price: 399999, badge: '任务闭环', tagline: '从一条路线，到一个完整工作流。', description: '面向自主移动与任务调度的行业试点组合。加入导航计算与充电站集成预算，围绕受控路线上的定位、执行、回站和记录建立闭环验证。', features: ['自主导航规划', '回站充电集成', '任务调度接口'], useCases: ['园区自主试点', '定时任务验证', '业务流程集成'], compute: '80 TOPS 边缘计算模块 / 32 GB 内存', software: '地图管理 / 任务调度 / 回站接口规划', included: ['重载行业平台 × 1', '导航感知套件 × 1', '自动充电站 × 1', '控制器与部署资料'], accessories: ['charging-dock', 'lidar-module', 'edge-compute'] },
  { slug: 'b2-mobile-manipulation', family: 'b2', tier: '移动操作', title: 'B2 移动操作研究组合', price: 459999, badge: '行动与操作', tagline: '不止抵达，更要完成。', description: '将移动底座与轻型机械臂选型结合，为移动操作和具身智能研究预留接口。面向抓取、接近目标与任务协同开展受控实验，实施前需完成稳定性评估。', features: ['机械臂集成', '移动操作研究', '多模块协同'], useCases: ['移动抓取研究', '具身任务验证', '工程实验'], compute: '80 TOPS 边缘计算模块 / 32 GB 内存', software: 'ROS 2 / 机械臂接口 / 移动操作工作流规划', included: ['重载科研平台 × 1', '轻型机械臂 × 1', '计算与感知套件 × 1', '安装接口与研究资料'], accessories: ['robot-arm', 'edge-compute', 'lidar-module'], overrides: { payload: '约 40 kg（含集成模块，需验证）' } },
  { slug: 'b2w-standard', family: 'b2w', tier: '标准轮足', title: 'B2-W 标准轮足组合', price: 329999, badge: '高效移动', tagline: '更大的作业半径，更从容的行动。', description: '结合行业四足底座与轮式驱动，面向长距离路线和混合路面的任务验证。以移动效率、载荷与续航规划建立更完整的行业选型视角。', features: ['行业轮足平台', '长距离移动', '任务载荷接口'], useCases: ['园区路线验证', '物料载荷实验', '轮足行业展示'], compute: '行业轮足运动控制器 / 任务计算单元', software: '轮足协同控制 / 任务接口规划', included: ['行业轮足平台 × 1', '行业电池 × 1', '手持控制器 × 1', '充电与部署资料'], accessories: ['lidar-module', 'edge-compute', 'charging-dock'] },
  { slug: 'b2w-mission', family: 'b2w', tier: '任务增强', title: 'B2-W 任务增强组合', price: 429999, badge: '拓展半径', tagline: '让任务，不再受限于眼前的距离。', description: '围绕园区大范围巡查与复杂路线采集规划的增强组合。加入导航感知、任务计算和回站集成预算，将移动效率与可追踪的任务流程结合。', features: ['AI 导航规划', '回站充电集成', '行业任务接口'], useCases: ['大范围园区试点', '行业任务验证', '复杂路线采集'], compute: '80 TOPS 边缘计算模块 / 32 GB 内存', software: '地图管理 / 任务调度 / 数据采集接口规划', included: ['行业轮足平台 × 1', '导航感知套件 × 1', '自动充电站 × 1', '控制器与任务部署资料'], accessories: ['charging-dock', 'edge-compute', 'lidar-module'] },
];

const makeRobot = (bundle: RobotBundle): Product => {
  const platform = { ...platforms[bundle.family], ...bundle.overrides };
  const keyStats = [
    { label: '移动速度', value: platform.speed },
    { label: '带电池重量', value: platform.weight },
    { label: '任务载荷', value: platform.payload },
    { label: '续航示例', value: platform.runtime },
  ];
  const specificationGroups: SpecificationGroup[] = [
    { name: '机械尺寸与驱动', rows: [
      { label: '站立尺寸（长 × 宽 × 高）', value: platform.dimensions },
      { label: '折叠尺寸（长 × 宽 × 高）', value: platform.folded },
      { label: '带电池重量', value: platform.weight },
      { label: '机身材质', value: '铝合金 + 高强度工程塑料（示例）' },
      { label: '驱动结构', value: platform.motor },
      { label: '关节最大扭矩', value: platform.torque },
      { label: '运动速度示例', value: platform.speed },
      { label: '持续任务载荷示例', value: platform.payload },
      { label: '爬坡角度示例', value: platform.climb },
      { label: '台阶高度示例', value: platform.step },
    ] },
    { name: '感知、计算与接口', rows: [
      { label: '感知组合', value: platform.sensor },
      { label: '计算配置', value: bundle.compute },
      { label: '姿态传感器', value: '六轴惯性测量单元 / 关节编码器' },
      { label: '扩展接口', value: platform.interfaces },
      { label: '控制与软件', value: bundle.software },
      { label: '无线连接', value: 'Wi-Fi / 蓝牙；频段与版本交付时确认' },
      { label: '任务模块扩展', value: '雷达、边缘计算、相机或机械臂按接口评估' },
    ] },
    { name: '电源、运行与交付', rows: [
      { label: '电池组合示例', value: platform.battery },
      { label: '续航时间示例', value: platform.runtime },
      { label: '电源管理', value: '智能电池状态监测 / 过流与温度保护规划' },
      { label: '运行环境示例', value: platform.operating },
      { label: '包装与交付', value: '主机、控制、电源及配置清单逐项确认' },
      { label: '适配与部署', value: '场地评估 → 配置确认 → 试运行验证' },
      { label: '参数说明', value: '以上为演示配置，速度、载荷、续航并非同一工况保证值' },
    ] },
  ];
  return {
    slug: bundle.slug,
    name: `Unitree ${bundle.title}`,
    englishName: `${platform.name.toUpperCase()} / ${bundle.tier}`,
    category: platform.category,
    tagline: bundle.tagline,
    description: bundle.description,
    positioning: previewNotice,
    image: platform.image,
    features: bundle.features,
    specs: specificationGroups.flatMap((group) => group.rows),
    useCases: bundle.useCases,
    highlights: [bundle.tagline, ...bundle.features.map((feature) => `${feature}，从体验到应用逐步展开`)],
    cta: '咨询此配置',
    seoTitle: `Unitree ${bundle.title} 机器狗配置｜RobotDog 四足机器人选型`,
    seoDescription: `${bundle.description} 查看 ${platform.name} 的配置展示、参数对比、配件组合与选型信息。演示配置与价格，采购前确认最终方案。`,
    kind: 'robot',
    family: bundle.family,
    tier: bundle.tier,
    badge: bundle.badge,
    priceCNY: bundle.price,
    shortDescription: bundle.features.join(' · '),
    gallery: [platform.image],
    keyStats,
    specificationGroups,
    inBox: bundle.included,
    relatedAccessories: bundle.accessories,
  };
};

export const robotProducts: Product[] = robotBundles.map(makeRobot);

type AccessoryDefinition = {
  slug: string;
  name: string;
  englishName: string;
  family: string;
  image: string;
  price: number;
  tagline: string;
  description: string;
  compatibility: string;
  features: string[];
  stats: ProductSpec[];
  rows: ProductSpec[];
  inBox: string[];
};

const accessoryDefinitions: AccessoryDefinition[] = [
  { slug: 'go2-battery', name: 'Go2 智能电池扩展包', englishName: 'SMART BATTERY', family: 'power', image: '/images/catalog/battery.webp', price: 2999, tagline: '为下一段探索，准备好能量。', description: '为教学、活动与长时间体验规划的备用电池选型。支持电量状态查看与交替使用，采购前核对平台版本、电压、接口及电池运输要求。', compatibility: 'Go2 / Go2-W，须核对电池版本与接口', features: ['电量状态监测', '模块化拆装', '长时间活动规划'], stats: [{ label: '电压示例', value: '28.8 V' }, { label: '容量示例', value: '15,000 mAh' }, { label: '能量示例', value: '432 Wh' }], rows: [{ label: '外形尺寸示例', value: '180 × 95 × 110 mm' }, { label: '重量示例', value: '约 2.7 kg' }, { label: '电池管理', value: '电量 / 温度 / 过流保护规划' }, { label: '充电环境示例', value: '10–35°C / 干燥通风环境' }, { label: '安全要求', value: '使用匹配充电器，运输资质与认证需确认' }], inBox: ['智能电池模块 × 1', '保护盖 × 1', '电池使用与储存说明'] },
  { slug: 'joint-motor', name: '研究平台关节电机', englishName: 'JOINT ACTUATOR', family: 'components', image: '/images/catalog/motor.webp', price: 1999, tagline: '把每一分力量，转化为精准动作。', description: '面向机器人研究平台维护与执行器实验的关节组件选型。集成电机、减速机构与编码器，安装前确认机械法兰、驱动协议与控制参数。', compatibility: 'A1 / Go1 研究平台，安装接口及驱动版本需确认', features: ['一体化结构', '编码器反馈', '控制实验'], stats: [{ label: '峰值扭矩示例', value: '33.5 N·m' }, { label: '额定电压示例', value: '24 V' }, { label: '重量示例', value: '0.75 kg' }], rows: [{ label: '法兰外径示例', value: '90 mm' }, { label: '组件厚度示例', value: '45 mm' }, { label: '通信接口示例', value: 'CAN / 专用总线，版本确认' }, { label: '反馈数据', value: '位置 / 速度 / 电流 / 温度' }, { label: '安装要求', value: '由具备资质的技术人员完成校准与验证' }], inBox: ['关节电机组件 × 1', '安装紧固件包 × 1', '接口规格确认表'] },
  { slug: 'lidar-module', name: '4D 激光雷达感知模块', englishName: '4D LIDAR', family: 'sensing', image: '/images/catalog/lidar.webp', price: 4999, tagline: '看见更多，理解更完整。', description: '为环境感知、建图与导航研究规划的激光雷达模块。面向近场障碍检测与点云采集，集成前核对数据协议、安装视野及平台供电。', compatibility: 'Go2 EDU / As2 / Aliengo / B1 / B2，按支架与接口适配', features: ['广角点云', '环境建图', '导航研究'], stats: [{ label: '水平视场示例', value: '360°' }, { label: '有效距离示例', value: '30 m' }, { label: '更新率示例', value: '10 Hz' }], rows: [{ label: '外形尺寸示例', value: '75 × 75 × 85 mm' }, { label: '重量示例', value: '约 0.35 kg' }, { label: '供电示例', value: '12–24 V DC / 10 W' }, { label: '数据接口示例', value: '以太网 / SDK，版本确认' }, { label: '数据形式', value: '三维点云与时间戳' }], inBox: ['雷达模块 × 1', '数据与电源线束 × 1', '基础安装支架 × 1', '集成资料包'] },
  { slug: 'handheld-controller', name: '手持遥控器', englishName: 'HANDHELD CONTROLLER', family: 'components', image: '/images/catalog/remote.webp', price: 1299, tagline: '把控制，握在手中。', description: '面向课堂、展厅与现场试运行的手持控制器选型。以实体摇杆和快捷键组织运动操作，使用前完成配对、急停流程和场地安全检查。', compatibility: 'Go2 / Go2-W / As2 / 行业平台，通信版本与按键映射需确认', features: ['双摇杆操控', '快捷模式切换', '状态反馈'], stats: [{ label: '连接示例', value: '2.4 GHz' }, { label: '续航示例', value: '约 8 h' }, { label: '充电接口', value: 'USB-C' }], rows: [{ label: '外形尺寸示例', value: '180 × 120 × 70 mm' }, { label: '重量示例', value: '约 0.45 kg' }, { label: '电池容量示例', value: '3,000 mAh' }, { label: '控制形式', value: '双摇杆 / 模式键 / 状态指示' }, { label: '操作要求', value: '先配对与空载试验，急停功能按平台确认' }], inBox: ['手持控制器 × 1', 'USB-C 充电线 × 1', '配对与操作指南'] },
  { slug: 'standard-charger', name: '智能充电器套装', englishName: 'SMART CHARGER', family: 'power', image: '/images/catalog/charger.webp', price: 799, tagline: '准备就绪，再出发。', description: '为机器人电池充电规划的电源套装。根据电池电压与通信版本匹配充电器，便于课堂、展厅和受控实验安排供能流程。', compatibility: 'Go2 标准电池版本；其他平台须选用对应电压型号', features: ['充电状态指示', '电池版本匹配', '便携供能'], stats: [{ label: '输入示例', value: '100–240 V AC' }, { label: '输出示例', value: '33.6 V / 5 A' }, { label: '功率示例', value: '168 W' }], rows: [{ label: '外形尺寸示例', value: '160 × 80 × 45 mm' }, { label: '重量示例', value: '约 0.8 kg' }, { label: '保护规划', value: '过流 / 过压 / 温度保护' }, { label: '接口', value: '专用电池连接器，采购前核对' }, { label: '使用场地', value: '室内干燥通风环境 / 避免遮挡散热' }], inBox: ['充电器 × 1', '电源线 × 1', '适配与使用说明'] },
  { slug: 'charging-dock', name: '行业自动充电站', englishName: 'AUTONOMOUS DOCK', family: 'power', image: '/images/catalog/dock.webp', price: 19999, tagline: '回到起点，是为了再次出发。', description: '面向行业自主任务试点的充电站选型。围绕定位回站、接触充电与任务调度进行集成评估，为受控路线构建从任务执行到能量补给的验证流程。', compatibility: 'B1 / B2 / B2-W 行业组合；充电接口与导航系统需联合适配', features: ['回站集成规划', '接触式充电', '任务状态接口'], stats: [{ label: '输出示例', value: '58.8 V DC' }, { label: '功率示例', value: '1,200 W' }, { label: '网络接口', value: '以太网' }], rows: [{ label: '占地尺寸示例', value: '1,200 × 800 mm' }, { label: '供电要求示例', value: '220 V AC / 专用回路评估' }, { label: '定位方式', value: '视觉标记与导航系统联合适配' }, { label: '通信', value: '网络状态接口 / 任务系统集成' }, { label: '部署要求', value: '平整地面、通道净空与现场安全评估' }], inBox: ['充电站主体 × 1', '定位标记与安装件包', '线缆套装', '部署接口与验收清单'] },
  { slug: 'robot-arm', name: '轻型机械臂拓展套装', englishName: 'ROBOTIC ARM', family: 'components', image: '/images/catalog/arm.webp', price: 39999, tagline: '从抵达，到触达。', description: '为移动操作与具身智能研究规划的轻型机械臂组合。以抓取和目标交互扩展机器人的任务边界，集成时需完成重心、载荷与运动稳定性验证。', compatibility: 'As2 / Aliengo / B1 / B2，须评估载荷与机械安装接口', features: ['六轴操作', '末端夹爪', '移动抓取研究'], stats: [{ label: '自由度示例', value: '6 轴' }, { label: '有效臂展示例', value: '600 mm' }, { label: '末端载荷示例', value: '2 kg' }], rows: [{ label: '重量示例', value: '约 5.5 kg' }, { label: '重复定位示例', value: '±0.2 mm / 固定底座工况' }, { label: '供电示例', value: '24–48 V DC' }, { label: '接口示例', value: '以太网 / SDK / ROS 2 适配规划' }, { label: '末端工具', value: '基础夹爪，定制工具需评估' }, { label: '安装要求', value: '底座法兰、重心和移动稳定性专项验证' }], inBox: ['轻型机械臂 × 1', '基础夹爪 × 1', '安装法兰与线束包', '接口与集成资料'] },
  { slug: 'edge-compute', name: 'AI 边缘计算拓展盒', englishName: 'EDGE AI COMPUTE', family: 'sensing', image: '/images/catalog/compute.webp', price: 8999, tagline: '让判断，更接近行动。', description: '为视觉、导航与机器人策略运行规划的边缘算力模块。通过本地计算减少实验链路依赖，集成前确认平台供电、散热、驱动与传感器带宽。', compatibility: 'Go2 EDU / Go2-W EDU / As2 EDU / Aliengo / B1 / B2', features: ['本地 AI 推理', '多接口输入', '科研扩展'], stats: [{ label: 'AI 算力示例', value: '40 TOPS' }, { label: '内存示例', value: '8 GB' }, { label: '功耗示例', value: '10–25 W' }], rows: [{ label: '存储示例', value: '128 GB NVMe SSD' }, { label: '尺寸示例', value: '130 × 95 × 50 mm' }, { label: '接口示例', value: 'USB 3.0 × 2 / 千兆以太网 × 1 / HDMI' }, { label: '软件环境', value: 'Linux / ROS 2，版本按平台适配' }, { label: '供电示例', value: '12–24 V DC' }, { label: '散热要求', value: '主动散热 / 挂载位置需保持通风' }], inBox: ['边缘计算模块 × 1', '电源与数据线束', '基础安装支架', '软件环境与适配说明'] },
];

export const accessoryProducts: Product[] = accessoryDefinitions.map((item) => {
  const specificationGroups: SpecificationGroup[] = [
    { name: '配置与参数示例', rows: [...item.stats, ...item.rows] },
    { name: '兼容与集成', rows: [
      { label: '平台兼容方向', value: item.compatibility },
      { label: '选型确认', value: '核对平台型号、硬件版本、电压与接口后采购' },
      { label: '配置说明', value: '图片为参考素材，数值与价格为页面演示数据' },
    ] },
  ];
  return {
    slug: item.slug,
    name: item.name,
    englishName: item.englishName,
    category: '配件与扩展',
    tagline: item.tagline,
    description: item.description,
    positioning: previewNotice,
    image: item.image,
    features: item.features,
    specs: specificationGroups.flatMap((group) => group.rows),
    useCases: ['平台能力扩展', '实验与活动供能', '项目配置选型'],
    highlights: item.features,
    cta: '咨询配件适配',
    seoTitle: `${item.name}｜RobotDog 机器狗配件与选型`,
    seoDescription: `${item.description} 了解兼容方向、接口与演示配置参数，采购前确认适配方案。`,
    kind: 'accessory' as const,
    family: item.family,
    tier: '配件配置',
    badge: '能力拓展',
    priceCNY: item.price,
    shortDescription: item.features.join(' · '),
    gallery: [item.image],
    keyStats: item.stats,
    specificationGroups,
    inBox: item.inBox,
    relatedAccessories: [],
  };
});

export const products: Product[] = [...robotProducts, ...accessoryProducts];
export const formatPrice = (price: number) => `¥${price.toLocaleString('zh-CN')}`;
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);

export type Scenario = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  productSlugs: string[];
};

export const scenarios: Scenario[] = [
  { slug: 'education', name: '教育与科研', eyebrow: 'EDUCATION & RESEARCH', description: '把课堂的好奇，变成机器人的第一步。连接运动控制、机器视觉与自主导航，让每个算法都拥有看得见的实验结果。', image: '/images/scenario-education.webp', productSlugs: ['go2-edu-starter', 'as2-edu', 'a1-research'] },
  { slug: 'inspection', name: '行业巡检', eyebrow: 'INDUSTRIAL INSPECTION', description: '越过复杂路面，走近每一项任务。从园区路线到设备现场，以移动、感知与计算串联可记录、可验证的巡查工作流。', image: '/images/scenario-inspection.webp', productSlugs: ['b2-inspection', 'b2w-mission', 'b1-inspection'] },
  { slug: 'interaction', name: '展示与互动', eyebrow: 'EXHIBITION & INTERACTION', description: '让科技不只被观看，也能被体验。以灵活动作、智能互动与精彩演示，为展厅、品牌活动和科技营地创造令人驻足的时刻。', image: '/images/scenario-interaction.webp', productSlugs: ['go2-pro', 'go2w-standard', 'go1-explorer'] },
  { slug: 'development', name: '开发与创新', eyebrow: 'DEVELOPMENT & INNOVATION', description: '让灵感走出屏幕，在真实世界发生。围绕具身智能、轮足导航和移动操作，连接数据、模型与行动，探索下一种机器人应用。', image: '/images/scenario-development.webp', productSlugs: ['go2-edu-vision', 'go2w-edu', 'b2-mobile-manipulation'] },
];

export const company = {
  name: 'RobotDog',
  domain: 'robotdog.com',
  url: 'https://www.robotdog.com',
  tagline: '让智能走出想象，让未来迈向现实',
  description: 'RobotDog 是面向机器狗与四足机器人选型的产品展示与沟通平台。我们希望通过清晰的产品配置、直观的应用介绍和完整的选型路径，连接科技爱好者、教育团队、科研机构与行业项目，让复杂的机器人技术成为可以理解、比较与讨论的具体方案。',
  productNotice: '本网站为内部效果预览。所有价格为演示价，参数与配置为设计示例，购物车、订单及支付为演示流程。实际产品、官方规格、供货、授权关系、交付与服务需正式确认。',
  sourceNote: 'Unitree / 宇树及其平台名称归各自权利人所有。公开产品图片用于内部页面效果参考；RobotDog 展示的是选型组合，不表示制造商身份或已取得经销授权。正式公开发布前须确认图片使用权限，并替换为已授权素材与核实后的产品数据。',
  contactLabel: '沟通你的应用需求',
};
