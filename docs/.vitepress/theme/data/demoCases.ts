export interface DemoCase {
  id: string
  title: string
  track: string
  difficulty: '入门' | '进阶' | '高级' | '生产'
  time: string
  deliverable: string
  features: string[]
  folder: string
}

type CaseSeed = [
  title: string,
  difficulty: DemoCase['difficulty'],
  time: string,
  deliverable: string,
  features: string[],
]

const tracks: Array<{ track: string; folderPrefix: string; cases: CaseSeed[] }> = [
  {
    track: '入门绑定',
    folderPrefix: 'rig',
    cases: [
      ['单关节挂件摆动', '入门', '20m', '一个 pendulum.spine', ['bone', 'slot', 'origin']],
      ['头身四件套 idle', '入门', '35m', 'idle 循环动画', ['draw order', 'keyframe']],
      ['武器挂点与换剑', '入门', '40m', 'weapon skin demo', ['attachment swap', 'skin']],
      ['盾牌前后遮挡', '入门', '35m', '遮挡测试动画', ['draw order', 'slot']],
      ['左右手独立层级', '入门', '45m', '上半身 rig', ['hierarchy', 'transform']],
      ['脚踝原点修正', '入门', '30m', 'foot pivot lab', ['origin', 'pose']],
      ['三段身体呼吸', '入门', '35m', 'breath idle', ['hip', 'chest', 'curve']],
      ['肩胸联动测试', '入门', '45m', 'shoulder motion', ['parenting', 'rotation']],
      ['装备显示开关', '入门', '30m', 'armor toggle', ['skin placeholder', 'visibility']],
      ['表情附件切换', '入门', '40m', 'blink smile demo', ['slot', 'attachment']],
      ['三方向假转身', '进阶', '55m', '3-direction turn', ['draw order', 'skin']],
      ['第一套完整角色', '进阶', '75m', 'complete cutout rig', ['naming', 'export']],
    ],
  },
  {
    track: '角色运动',
    folderPrefix: 'motion',
    cases: [
      ['基础待机呼吸', '入门', '30m', 'idle_01', ['loop', 'curve']],
      ['轻武器待机', '入门', '45m', 'idle_weapon', ['secondary motion', 'offset']],
      ['四姿势行走循环', '进阶', '70m', 'walk_24f', ['contact pose', 'passing pose']],
      ['脚步事件行走', '进阶', '60m', 'walk_event', ['event', 'footstep']],
      ['跑步腾空帧', '进阶', '70m', 'run_18f', ['air frame', 'timing']],
      ['急停与重心回弹', '高级', '90m', 'stop_brake', ['anticipation', 'overlap']],
      ['起跳到落地', '进阶', '80m', 'jump_land', ['squash', 'event']],
      ['二段跳剪影控制', '高级', '90m', 'double_jump', ['silhouette', 'pose']],
      ['翻滚无位移版本', '高级', '110m', 'roll_in_place', ['root motion note', 'arc']],
      ['爬梯循环', '进阶', '70m', 'climb_loop', ['cycle', 'hand contact']],
      ['受击后退', '进阶', '65m', 'hurt_knockback', ['snap', 'recover']],
      ['死亡倒地', '高级', '95m', 'death_fall', ['non-loop', 'settle']],
    ],
  },
  {
    track: '战斗动作',
    folderPrefix: 'combat',
    cases: [
      ['短剑三段连击', '进阶', '110m', 'attack_combo_3', ['anticipation', 'event']],
      ['重剑蓄力斩', '高级', '120m', 'heavy_attack', ['slow in', 'impact']],
      ['长枪刺击', '进阶', '80m', 'spear_thrust', ['line of action', 'hit']],
      ['盾反窗口', '高级', '100m', 'parry_window', ['event', 'cancel window']],
      ['远程拉弓', '高级', '120m', 'bow_shot', ['IK', 'attachment']],
      ['法杖施法循环', '进阶', '85m', 'cast_loop', ['slot FX', 'event']],
      ['上挑攻击', '高级', '95m', 'launcher', ['arc', 'smear']],
      ['空中攻击', '高级', '100m', 'air_attack', ['pose clarity', 'timing']],
      ['Boss 砸地前摇', '生产', '140m', 'boss_slam', ['telegraph', 'impact']],
      ['受击闪白附件', '进阶', '60m', 'hit_flash', ['skin', 'color key']],
      ['处决动画节奏', '生产', '150m', 'finisher', ['camera note', 'events']],
      ['武器残影序列', '高级', '100m', 'weapon_trail', ['attachment sequence', 'curve']],
    ],
  },
  {
    track: 'Mesh 表情',
    folderPrefix: 'mesh',
    cases: [
      ['披风三骨骼摆动', '进阶', '75m', 'cape_wave', ['mesh', 'weights']],
      ['长发延迟运动', '进阶', '70m', 'hair_overlap', ['secondary motion', 'weights']],
      ['脸颊软变形', '高级', '90m', 'face_deform', ['mesh deform', 'control bones']],
      ['眨眼三帧', '入门', '30m', 'blink_swap', ['attachment swap', 'timing']],
      ['嘴型五状态', '进阶', '65m', 'mouth_shapes', ['skin placeholder', 'timeline']],
      ['愤怒表情组合', '进阶', '55m', 'angry_face', ['brow', 'slot']],
      ['布条风吹循环', '高级', '95m', 'cloth_wind', ['mesh', 'offset']],
      ['裙摆跑步跟随', '高级', '110m', 'skirt_run', ['weights', 'run blend']],
      ['翅膀膜变形', '生产', '130m', 'wing_membrane', ['mesh topology', 'IK']],
      ['肚皮呼吸变形', '进阶', '70m', 'belly_breath', ['deform', 'curve']],
      ['表情混合库', '生产', '150m', 'expression_pack', ['skins', 'naming']],
      ['半透明泪滴处理', '高级', '80m', 'tear_alpha', ['premultiply alpha', 'atlas']],
    ],
  },
  {
    track: 'IK 与约束',
    folderPrefix: 'constraint',
    cases: [
      ['双腿 IK 站姿', '进阶', '80m', 'leg_ik_pose', ['IK', 'bend direction']],
      ['脚底锁定行走', '高级', '110m', 'foot_lock_walk', ['IK target', 'contact']],
      ['双手握剑', '高级', '120m', 'two_hand_weapon', ['IK', 'transform constraint']],
      ['弓弦拉伸约束', '生产', '140m', 'bow_string', ['path constraint', 'IK']],
      ['眼睛注视目标', '进阶', '65m', 'look_at', ['transform constraint', 'limit']],
      ['头部跟随鼠标', '高级', '100m', 'head_aim', ['runtime aim', 'constraint']],
      ['尾巴链式摆动', '高级', '95m', 'tail_chain', ['path', 'secondary']],
      ['机械臂伸缩', '生产', '130m', 'mech_arm', ['inherit scale', 'IK']],
      ['轨道魔法石', '进阶', '70m', 'orbit_magic', ['rotation root', 'offset']],
      ['挂件跟随延迟', '高级', '85m', 'pendant_follow', ['transform mix', 'delay']],
      ['大 Boss 石块群', '生产', '160m', 'boss_blocks', ['constraint budget', 'naming']],
      ['约束故障排查', '高级', '90m', 'constraint_debug', ['mix', 'order']],
    ],
  },
  {
    track: '特效演出',
    folderPrefix: 'vfx',
    cases: [
      ['斩击序列帧', '入门', '45m', 'slash_sequence', ['attachment sequence', 'alpha']],
      ['命中火花', '入门', '35m', 'impact_spark', ['scale', 'fade']],
      ['落地尘土', '进阶', '60m', 'landing_dust', ['event', 'slot FX']],
      ['法阵旋转', '进阶', '70m', 'magic_circle', ['rotation', 'additive note']],
      ['充能光环', '高级', '90m', 'charge_aura', ['scale curve', 'color']],
      ['UI 头像眨眼', '入门', '40m', 'portrait_blink', ['face slot', 'loop']],
      ['技能图标动效', '进阶', '55m', 'skill_icon', ['UI spine', 'sequence']],
      ['抽卡揭示', '高级', '110m', 'card_reveal', ['mask note', 'timing']],
      ['宝箱打开', '进阶', '75m', 'chest_open', ['anticipation', 'event']],
      ['任务完成章印', '进阶', '65m', 'stamp_success', ['squash', 'settle']],
      ['过场镜头 Pose', '生产', '140m', 'cutscene_pose', ['camera note', 'timeline']],
      ['多层背景小演出', '生产', '150m', 'parallax_scene', ['draw order', 'runtime']],
    ],
  },
  {
    track: 'Runtime 集成',
    folderPrefix: 'runtime',
    cases: [
      ['JSON 导出对照', '入门', '40m', 'json_export_check', ['json', 'atlas']],
      ['Skel 二进制导出', '进阶', '45m', 'skel_export_check', ['binary', 'size']],
      ['PMA 图集边缘检查', '高级', '80m', 'pma_edge_test', ['premultiply alpha', 'bleed']],
      ['Unity idle/walk 切换', '进阶', '90m', 'unity_state', ['AnimationState', 'mix']],
      ['Unity 事件监听', '进阶', '70m', 'unity_event', ['event', 'callback']],
      ['Cocos 动画队列', '进阶', '80m', 'cocos_queue', ['setAnimation', 'addAnimation']],
      ['Web Canvas 预览', '高级', '120m', 'web_preview', ['spine-ts', 'atlas load']],
      ['PixiJS 角色控制', '生产', '150m', 'pixi_controller', ['keyboard', 'state machine']],
      ['Godot 导入检查', '高级', '110m', 'godot_import', ['version match', 'signals']],
      ['Unreal 插件测试', '高级', '120m', 'unreal_component', ['component', 'event']],
      ['多动画混合预算', '生产', '150m', 'mix_budget', ['mix duration', 'timeline cleanup']],
      ['同屏 50 个小怪测试', '生产', '180m', 'crowd_perf', ['performance', 'atlas']],
    ],
  },
  {
    track: 'AI 素材管线',
    folderPrefix: 'pipeline',
    cases: [
      ['绿幕 parts sheet', '入门', '35m', 'sheet_prompt', ['gpt-image2', 'chroma key']],
      ['自动连通切片', '进阶', '45m', 'slice_manifest', ['tooling', 'manifest']],
      ['零件命名复核', '入门', '30m', 'name_order', ['naming', 'attachment']],
      ['换装同名替换', '进阶', '70m', 'skin_replace', ['skin', 'diff']],
      ['AI 表情包扩展', '进阶', '70m', 'expression_ai_pack', ['prompt', 'slot']],
      ['武器包批量生成', '进阶', '65m', 'weapon_ai_pack', ['batch', 'attachment']],
      ['Boss 部件重切', '高级', '100m', 'boss_reslice', ['min area', 'manual cleanup']],
      ['透明边缘修复', '高级', '90m', 'alpha_cleanup', ['threshold', 'despill']],
      ['风格一致性审查', '生产', '120m', 'style_review', ['art direction', 'palette']],
      ['素材版本管理', '生产', '100m', 'asset_versioning', ['source sheet', 'diff']],
      ['图集打包策略', '高级', '95m', 'atlas_strategy', ['padding', 'max size']],
      ['从 AI 图到引擎', '生产', '180m', 'ai_to_runtime', ['export', 'runtime QA']],
    ],
  },
]

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export const demoCases: DemoCase[] = tracks.flatMap((track, trackIndex) =>
  track.cases.map((item, caseIndex) => {
    const number = String(trackIndex * 12 + caseIndex + 1).padStart(3, '0')
    return {
      id: `${track.folderPrefix}-${number}`,
      title: item[0],
      track: track.track,
      difficulty: item[1],
      time: item[2],
      deliverable: item[3],
      features: item[4],
      folder: `spine-demos/${number}-${track.folderPrefix}-${slugify(item[3])}`,
    }
  }),
)

export const demoTracks = tracks.map((track) => track.track)
