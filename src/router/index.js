import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/denglu/denglu.vue'
import denglu from '@/components/denglu/denglu.vue'
import zc from '@/components/denglu/zc.vue'
import zhmm from '@/components/denglu/zhmm.vue'
import lhdl from '@/components/denglu/lhdl.vue'
import ljgl from '@/components/denglu/ljgl.vue'
import wode from '@/components/wode/wode.vue'
import shezhi from '@/components/wode/shezhi.vue'
import yhfk from '@/components/wode/yhfk.vue'
import xiaoxi from '@/components/wode/xiaoxi.vue'
import wodexinxi from '@/components/wode/wodexinxi.vue'
import zjf from '@/components/wode/zjf.vue'
import gmhy from '@/components/wode/gmhy.vue'
import rzgl from '@/components/wode/rzgl.vue'
import zzrz from '@/components/wode/zzrz.vue'
import rzcg from '@/components/wode/rzcg.vue'
import rzsb from '@/components/wode/rzsb.vue'
import shouye from '@/components/shouye/shouye.vue'
import quanguo from '@/components/shouye/quanguo.vue'
import ddtz from '@/components/shouye/ddtz.vue'
import qiugou from '@/components/shouye/qiugou.vue'
import jiagong from '@/components/shouye/jiagong.vue'
import cpjy from '@/components/shouye/cpjy.vue'
import wuliu from '@/components/shouye/wuliu.vue'
import more from '@/components/shouye/more.vue'
import xianhuo from '@/components/shouye/xianhuo.vue'
import shangcheng from '@/components/shouye/shangcheng.vue'
import fenlei from '@/components/fenlei/fenlei.vue'
import shequ from '@/components/shequ/shequ.vue'
import quanwen from '@/components/shequ/quanwen.vue'
import qyx from '@/components/shequ/qyx.vue'
import gwc from '@/components/gwc/gwc.vue'
import cpxq from '@/components/cpxq/cpxq.vue'
import cplb from '@/components/shouye/cplb.vue'
import wdzc from '@/components/wode/wdzc.vue'
import zhye from '@/components/wode/zhye.vue'
import wdjf from '@/components/wode/wdjf.vue'
import jfdh from '@/components/wode/jfdh.vue'
import yhj from '@/components/wode/yhj.vue'
import wdqg from '@/components/wode/wdqg.vue'
import xxqg from '@/components/wode/xxqg.vue'
import zhyaq from '@/components/wode/zhyaq.vue'
import bdsj from '@/components/wode/bdsj.vue'
import xgmm from '@/components/wode/xgmm.vue'
import xgzfmm from '@/components/wode/xgzfmm.vue'
import bdyx from '@/components/wode/bdyx.vue'
import wdjg from '@/components/wode/wdjg.vue'
import jgddxq from '@/components/wode/jgddxq.vue'
import wdjy from '@/components/wode/wdjy.vue'
import jyddxq from '@/components/wode/jyddxq.vue'
import wdwl from '@/components/wode/wdwl.vue'
import wlddxq from '@/components/wode/wlddxq.vue'
import wdtz from '@/components/wode/wdtz.vue'
import wdddtz from '@/components/wode/wdddtz.vue'
import scj from '@/components/wode/scj.vue'
import wdzj from '@/components/wode/wdzj.vue'
import wdpj from '@/components/wode/wdpj.vue'
import wdfp from '@/components/wode/wdfp.vue'
import kpxq from '@/components/wode/kpxq.vue'
import wdhy from '@/components/wode/wdhy.vue'
import hylb from '@/components/wode/hylb.vue'
import wdtk from '@/components/wode/wdtk.vue'
import sqtk from '@/components/wode/sqtk.vue'
import hangqing from '@/components/shouye/hangqing.vue'
import wddd from '@/components/wode/wddd.vue'
import qbdd from '@/components/wode/qbdd.vue'
import ddzf from '@/components/wode/ddzf.vue'
import gdgfk from '@/components/wode/gdgfk.vue'
import gdgfk1 from '@/components/wode/gdgfk1.vue'
import zyd from '@/components/shouye/zyd.vue'
import zydyl from '@/components/shouye/zydyl.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/zc',
      name: 'zc',
      component: zc
    },
    {
      path: '/zhmm',
      name: 'zhmm',
      component: zhmm
    },
    {
      path: '/lhdl',
      name: 'lhdl',
      component: lhdl
    },
    {
      path: '/ljgl',
      name: 'ljgl',
      component: ljgl
    },
    {
      path: '/shezhi',
      name: 'shezhi',
      component: shezhi
    },
    {
      path: '/yhfk',
      name: 'yhfk',
      component: yhfk
    },
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: xiaoxi
    },
    {
      path: '/wodexinxi',
      name: 'wodexinxi',
      component: wodexinxi
    },
    {
      path: '/zjf',
      name: 'zjf',
      component: zjf
    },
    {
      path: '/gmhy',
      name: 'gmhy',
      component: gmhy
    },
    {
      path: '/rzgl',
      name: 'rzgl',
      component: rzgl
    },
    {
      path: '/zzrz',
      name: 'zzrz',
      component: zzrz
    },
    {
      path: '/rzsb',
      name: 'rzsb',
      component: rzsb
    },
    {
      path: '/rzcg',
      name: 'rzcg',
      component: rzcg
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/quanguo',
      name: 'quanguo',
      component: quanguo
    },
    {
      path: '/ddtz',
      name: 'ddtz',
      component: ddtz
    },
    {
      path: '/qiugou',
      name: 'qiugou',
      component: qiugou
    },
    {
      path: '/jiagong',
      name: 'jiagong',
      component: jiagong
    },
    {
      path: '/cpjy',
      name: 'cpjy',
      component: cpjy
    },
    {
      path: '/wuliu',
      name: 'wuliu',
      component: wuliu
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/xianhuo',
      name: 'xianhuo',
      component: xianhuo
    },
    {
      path: '/shangcheng',
      name: 'shangcheng',
      component: shangcheng
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/shequ',
      name: 'shequ',
      component: shequ
    },
    {
      path: '/quanwen',
      name: 'quanwen',
      component: quanwen
    },
    {
      path: '/qyx',
      name: 'qyx',
      component: qyx
    },
    {
      path: '/gwc',
      name: 'gwc',
      component: gwc
    },
    {
      path: '/cpxq',
      name: 'cpxq',
      component: cpxq
    },
    {
      path: '/wdzc',
      name: 'wdzc',
      component: wdzc
    },
    {
      path: '/zhye',
      name: 'zhye',
      component: zhye
    },
    {
      path: '/wdjf',
      name: 'wdjf',
      component: wdjf
    },
    {
      path: '/jfdh',
      name: 'jfdh',
      component: jfdh
    },
    {
      path: '/yhj',
      name: 'yhj',
      component: yhj
    },
    {
      path: '/wdqg',
      name: 'wdqg',
      component: wdqg
    },
    {
      path: '/xxqg',
      name: 'xxqg',
      component: xxqg
    },
    {
      path: '/zhyaq',
      name: 'zhyaq',
      component: zhyaq
    },
    {
      path: '/bdsj',
      name: 'bdsj',
      component: bdsj
    },
    {
      path: '/xgmm',
      name: 'xgmm',
      component: xgmm
    },
    {
      path: '/xgzfmm',
      name: 'xgzfmm',
      component: xgzfmm
    },
    {
      path: '/bdyx',
      name: 'bdyx',
      component: bdyx
    },
    {
      path: '/wdjg',
      name: 'wdjg',
      component: wdjg
    },
    {
      path: '/jgddxq',
      name: 'jgddxq',
      component: jgddxq
    },
    {
      path: '/wdjy',
      name: 'wdjy',
      component: wdjy
    },
    {
      path: '/jyddxq',
      name: 'jyddxq',
      component: jyddxq
    },
    {
      path: '/wdwl',
      name: 'wdwl',
      component: wdwl
    },
    {
      path: '/wlddxq',
      name: 'wlddxq',
      component: wlddxq
    },
    {
      path: '/wdtz',
      name: 'wdtz',
      component: wdtz
    },
    {
      path: '/wdddtz',
      name: 'wdddtz',
      component: wdddtz
    },
    {
      path: '/scj',
      name: 'scj',
      component: scj
    },
    {
      path: '/wdzj',
      name: 'wdzj',
      component: wdzj
    },
    {
      path: '/wdpj',
      name: 'wdpj',
      component: wdpj
    },
    {
      path: '/wdfp',
      name: 'wdfp',
      component: wdfp
    },
    {
      path: '/kpxq',
      name: 'kpxq',
      component: kpxq
    },
    {
      path: '/wdhy',
      name: 'wdhy',
      component: wdhy
    },
    {
      path: '/hylb',
      name: 'hylb',
      component: hylb
    },
    {
      path: '/wdtk',
      name: 'wdtk',
      component: wdtk
    },
    {
      path: '/sqtk',
      name: 'sqtk',
      component: sqtk
    },
    {
      path: '/hangqing',
      name: 'hangqing',
      component: hangqing
    },
    {
      path: '/wddd',
      name: 'wddd',
      component: wddd
    },
    {
      path: '/qbdd',
      name: 'qbdd',
      component: qbdd
    },
    {
      path: '/ddzf',
      name: 'ddzf',
      component: ddzf
    },
    {
      path: '/gdgfk',
      name: 'gdgfk',
      component: gdgfk
    },
    {
      path: '/gdgfk1',
      name: 'gdgfk1',
      component: gdgfk1
    },
    {
      path: '/zyd',
      name: 'zyd',
      component: zyd
    },
    {
      path: '/zydyl',
      name: 'zydyl',
      component: zydyl
    },
    {
        path: '/cplb',
        name: 'cplb',
        component: cplb
    }
  ]
})
