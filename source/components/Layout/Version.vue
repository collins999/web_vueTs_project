<template>
    <el-dialog :title="data.title" :visible.sync="data.visible" width="30%">
        <div class="update-message">1、新增<el-tag>测试1</el-tag>模块。</div>
        <div class="update-message">2、新增<el-tag>测试2</el-tag>模块。</div>
        <div class="update-message">3、新增<el-tag>测试3</el-tag>模块。</div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="data.visible = false">关 闭</el-button>
        </span>
    </el-dialog>
</template>
<script lang="ts">
import MyMixins from '../../common/mixins';
import { Vue, Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import { IDrawerData } from '../../interface/IDataInterface';
@Component({
    mixins: [MyMixins],
    components: {}
})
export default class Version extends Mixins(MyMixins) {
    // this常量化
    private THIS: any = this;
    /**
     * [Prop 父组件参数-mod参数设置-required]
     * @version  [3.0]
     */
    @Prop({
        type: Object,
        required: true
    }) private data!: IDrawerData;
}
</script>
<style lang="scss" scoped>
.update-message {
    padding: 5px 0px;
}
</style>