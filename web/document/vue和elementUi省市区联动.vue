<template>
  <el-row class="selectArea">
    <el-col :span="3">省市区县:</el-col>
    <el-col :span="7">
      <el-select
        v-model="checkedProvince"
        size="mini"
        placeholder="请选择省"
        @change="selectedProvince"
      >
        <el-option
          v-for="item in province"
          :key="item.code + item.name"
          :label="item.name"
          :value="item.code"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="7">
      <el-select v-model="checkedCity" size="mini" placeholder="请选择市" @change="selectedCity">
        <el-option
          v-for="item in city"
          :key="item.code + item.name"
          :label="item.name"
          :value="item.code"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="7">
      <el-select v-model="checkedTown" size="mini" placeholder="请选择区/县" @change="selectedTown">
        <el-option
          v-for="item in town"
          :key="item.code + item.name"
          :label="item.name"
          :value="item.code"
        ></el-option>
      </el-select>
    </el-col>
  </el-row>
</template>
<script>
import area from './../public/area.js'
export default {
  name: '',
  data() {
    return {
      province: area.getProvince(), //省
      checkedProvince: area.getProvince()[0].name, //选择的省
      city: [], //市 
      checkedCity: '', //选择的市 
      town: [], //区，县
      checkedTown: '' //选择的县
    }
  },
  components: {},
  mounted: () => { },
  computed: {},
  methods: {
    //选中省
    selectedProvince: function(pcode) {
      this.city = area.getCity(pcode)
      this.checkedCity = this.city[0].name
    },
    //选择市 
    selectedCity: function(ccode) {
      this.town = area.getTown(ccode)
      this.checkedTown = this.town[0].name
    },
    //选择傎
    selectedTown: function(tcode) {
      console.log(tcode)
    }
  }
}

</script>
<style lang='less' scoped>
.selectArea {
  .el-col:nth-child(1) {
    line-height: 30px;
  }
  .el-col:nth-child(2),
  .el-col:nth-child(3),
  .el-col:nth-child(4) {
    padding: 0 2px;
  }
}
</style>

