<template>
    <div>
       hahahaha
    </div>
</template>

<script>
  import TreeStore from './model/tree-store';
  // import {t} from 'iview/src/locale';
  import emitter from './model/emitter';
  // import ElTreeNode from './tree-node.vue';
  import '../assets/iconfont/iconfont.css';
  export default {
    name: 'ExampleChg',
    // components: {ChuTree},
    data() {
      return {
        props: {
          children: 'children',
          label: 'title',
          isLeaf: 'leaf'
        },
        data: [
          {
            id: 'jhdfhuisdfhais873204u',
            title: '采购审核',
            children: [
              {
                id: 'jhdfhuisdfhais873204udfw',
                title: '采购订单',
              },
              {
                id: 'jhdfh5547sdfhais873204u',
                title: '材料类收退货审核',
              }
            ]
          },
          {
            id: 'jhdf56tryrtisdfhais873204u',
            title: '系统设置',
            children: [
              {
                id: 'jh53457huisdfhais873204u',
                title: '权限设置',
                children: [{
                  id: 'jrewr56245huisdfhais873204u',
                  title: '菜单管理',
                }, {
                  id: 'jhdfhuis57567tfhais873204u',
                  title: '角色管理',
                }, {
                  id: '54tryjhdfhuisdfhais873204u',
                  title: '角色授权',
                }]
              },
              {
                id: 'rterthdfhuisdfhais873204u',
                title: '定时任务',
              }
            ]
          }
        ]
      };
    },
    methods: {},
    mounted() {
    }
  };
</script>

<style scoped>

</style>
