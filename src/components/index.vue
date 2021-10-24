<template>
  <div class="table-wrapper">
    <template>
      <el-table :row-style="getRowClass" :header-row-style="getRowClass" :header-cell-style="getRowClass"
                :data="tableData"
                style="width: 1200px;color: #fdfdfd">
        <el-table-column
          label="序号"
          prop="list"
          width="88">
        </el-table-column>

        <el-table-column
          label="园区/监管仓名称"
          prop="name"
          width="180">
        </el-table-column>

        <el-table-column
          label="类型"
          prop="type"
          width="180">
        </el-table-column>

        <el-table-column
          label="创建人"
          prop="creator"
          width="180">
        </el-table-column>

        <el-table-column
          label="创建时间"
          prop="data"
          width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini" type="primary"
              @click="handleEdit(scope.$index, scope.row)">修改
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleEdit">


        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
          <el-form-item
            label="姓名"
            prop="creator"
            :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'varchar', message: '年龄必须为数字值'}
    ]"
          >
            <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(row)">提交</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </el-dialog>
    </template>

  </div>
</template>


<script>


export default {
  name: 'warehouse-manage',
  data() {
    return {
      tableData: [{
        list: '1',
        name: '福田保税区',
        type: '园区',
        creator: '张三',
        data: '2020-02-09 15:05:24'
      }, {
        list: '2',
        name: '福田保税区',
        type: '园区',
        creator: '张三',
        data: '2020-02-09 15:05:24'
      }, {
        list: '3',
        name: '福田保税区',
        type: '园区',
        creator: '张三',
        data: '2020-02-09 15:05:24'
      },],
      dialogVisible: false,
      numberValidateForm: {
        age: ''
      }
    }
  },
  methods: {
    getRowClass({row, column, rowIndex, columnIndex}) {
      return "background:#3f5c6d2c;";
    },
    handleEdit(index, row) {
      this.dialogVisible = true
      this.numberValidateForm.age = row.creator


    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    submitForm(row){
      alert(row)
    }

  }
}
</script>
<style lang="less" scoped>
/*.table-wrapper /deep/ .el-table--fit{
  padding: 40px;
}*/
.table-wrapper /deep/ .el-table, .el-table__expanded-cell {
  background-color: transparent;
}

.table-wrapper /deep/ .el-table tr {
  background-color: transparent !important;
}

.table-wrapper /deep/ .el-table--enable-row-transition .el-table__body td, .el-table .cell {
  background-color: transparent;
}
</style>
