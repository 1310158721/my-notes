<template>
  <div>
    <a-form id="components-form-demo-validate-other" :form="form" @submit="handleSubmit">
      <a-row align="middle">
        <a-col :span="12">
          <a-row>
            <a-form-item
              label="名称"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select defaultValue="lucy" style="width: 100%" @change="handleChange1">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled" disabled>Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </a-form-item>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row>
            <a-col :span="4">
              right1
            </a-col>
            <a-col :span="20">
              right2
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MyForm extends Vue {
  public labelCol: any = { span: 3 }
  public wrapperCol: any = { span: 14, offset: 3 }

  public form: any = {};

  public handleChange1() {
    console.log('change1')
  }

  public handleSubmit() {
    console.log("handleSubmit");
  }
}
</script>

<style lang="less" scoped>
#components-form-demo-validate-other {
  width: 80%;
  margin: 20px auto 0;
  background-color: lightblue;
}


</style>

