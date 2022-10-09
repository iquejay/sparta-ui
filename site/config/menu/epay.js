import base from './base'
// import { insertMenuItems } from './tool'

const config = base

// 如果，除了基础组件，还想新增其他文档，则可使用insertMenuItems方法：
// const config = insertMenuItems(base, [
//   // 新增
//   {
//     'parentIndex': '2',
//     'data': {
//       title: '安装',
//       link: '/install',
//       index: '2-3'
//     }
//   },
//   // 新增
//   {
//     'parentIndex': '3-6',
//     'data': {
//       title: 'Modal 模态弹窗（新）',
//       link: '/modal',
//       index: '3-6-5'
//     }
//   },
//   // 替换
//   {
//     'parentIndex': '3-1',
//     'data': {
//       title: 'Icon 图标（XXXX）',
//       link: '/icon',
//       index: '3-1-2'
//     }
//   }
// ])

export default config