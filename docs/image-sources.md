# RobotDog 产品图来源与许可

这批商品卡图为 **10 个真实 Unitree 产品家族的官方 3D 模型渲染**，不是商品实拍照片，也没有把同一张概念图标成不同型号。所有图片已本地保存，网页浏览时无需访问第三方图片服务器。

图片用于效果预览，正式上线须确认图片授权、供应渠道及实际交付规格。模型仓库的 BSD-3-Clause 许可文本如下；这不表示宇树认可、合作或授权本网站销售。页面应保留厂家与型号身份。

## 文件和来源

每个家族都有 `public/images/catalog/FAMILY.jpg`（1200 × 1000，浅灰底）和 `FAMILY-cutout.png`（同场景几何分割生成透明背景）。`FAMILY.png` 为透明版同内容别名。完整来源、哈希、大小见同目录的 `image-sources.json`。

| 家族 | 开源来源 | 图片性质 |
| --- | --- | --- |
| a1 | [DeepMind MuJoCo Menagerie 收录的 Unitree 原始模型](https://github.com/google-deepmind/mujoco_menagerie/tree/main/unitree_a1) | 原模型渲染 |
| go1 | [DeepMind MuJoCo Menagerie 收录的 Unitree 原始模型](https://github.com/google-deepmind/mujoco_menagerie/tree/main/unitree_go1) | 原模型渲染 |
| go2 | [Unitree 官方 MuJoCo MJCF 模型](https://github.com/unitreerobotics/unitree_mujoco/tree/main/unitree_robots/go2) | 原模型渲染 |
| go2w | [Unitree 官方 MuJoCo MJCF 模型](https://github.com/unitreerobotics/unitree_mujoco/tree/main/unitree_robots/go2w) | 原模型渲染 |
| as2 | [Unitree 官方 MuJoCo MJCF 模型](https://github.com/unitreerobotics/unitree_mujoco/tree/main/unitree_robots/as2) | 原模型渲染 |
| a2 | [Unitree 官方 MuJoCo MJCF 模型](https://github.com/unitreerobotics/unitree_mujoco/tree/main/unitree_robots/a2) | 原模型渲染 |
| aliengo | [Unitree 官方 ROS URDF / DAE 模型](https://github.com/unitreerobotics/unitree_ros/tree/master/robots/aliengo_description) | 原模型渲染 |
| b1 | [Unitree 官方 ROS URDF / DAE 模型](https://github.com/unitreerobotics/unitree_ros/tree/master/robots/b1_description) | 原模型渲染 |
| b2 | [Unitree 官方 MuJoCo MJCF 模型](https://github.com/unitreerobotics/unitree_mujoco/tree/main/unitree_robots/b2) | 原模型渲染 |
| b2w | [Unitree 官方 MuJoCo MJCF 模型](https://github.com/unitreerobotics/unitree_mujoco/tree/main/unitree_robots/b2w) | 原模型渲染 |

## 生成方法与外观边界

在 `/tmp` 中下载原始 MJCF 或 URDF / DAE 模型，使用 MuJoCo EGL 离屏渲染。只设置相机、光照与静态展示姿态；保留厂家模型的网格和材质，不修改实拍照片。URDF 的 DAE 模型按其原始单位转成 MuJoCo 支持的网格格式，并去掉非网格调试标记。

A1、Go1 来自 DeepMind MuJoCo Menagerie，模型版权归 Unitree，各模型目录提供独立 BSD-3-Clause 许可。Go2、Go2W、As2、A2、B2、B2W 来自宇树官方 `unitree_mujoco`；AlienGo、B1 来自宇树官方 `unitree_ros`。

AlienGo、B1 使用官方 URDF 的橙色展示材质，不代表最终销售产品的颜色。各型号的真实颜色、纹理、配件和参数应以供应商确认的商品资料为准。透明 PNG 使用同一个 3D 场景的 geometry segmentation 作为 alpha，未对白底 JPEG 进行阈值抠图。

本次环境对 `www.unitree.com`、`shop.unitree.com` 和官方 CDN 的访问返回 CONNECT 403，因此没有使用这些站点中未成功读取的图片，也没有编造任何 CDN 下载地址。

## Unitree MuJoCo 模型 BSD-3-Clause 原文

```text
BSD 3-Clause License

Copyright (c) 2016-2024 HangZhou YuShu TECHNOLOGY CO.,LTD. ("Unitree Robotics")
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

## A1 / Go1 / Unitree ROS 模型 BSD-3-Clause 原文

```text
BSD 3-Clause License

Copyright (c) 2016-2022 HangZhou YuShu TECHNOLOGY CO.,LTD. ("Unitree Robotics")
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

## 场景与配件展示素材

`/images/scenes/` 的 5 张场景图，以及 `/images/catalog/` 的 8 张 WebP 配件图由图像生成工具制作，用于效果预览。它们不是商品实拍，也不代表 RobotDog 的实际团队、实验室、设施或销售配置。文件哈希已登记在 image-sources.json。
