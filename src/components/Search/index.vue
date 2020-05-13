<template>
  <div class="search-container">
	 <div>count is {{count}}</div>
	 <div>plusOne is {{plusOne}}</div>
	 <button @click="increment" style="width: 200px;height: 50px;margin-top: 40px;">count++</button>
   
  </div>
</template>
<script>
	import { toRefs, reactive ,computed, ref, onMounted , watch} from '@vue/composition-api'
	export default {
		setup() {
			// ref类型的对象
			const count = ref(0)
			// computed 取值  ref是一个包装对象，取值.value  一个包装对象只有一个属性，包装对象的值可以直接被修改
			
			// computed 传函数是可读
			// const plusOne = computed(() => count.value + 1)
			
			// 传对象可读可写
			const plusOne = computed({
				get: ()=> count.value + 1,
				set: (val) => { count.value = val - 1 }
			})
			
			
			
			// method
			// count.value++
			plusOne.value++
			console.log(plusOne.value)
			const increment = ()=> { count.value++ }
			
			// 监听  监听是两个函数
			watch(() => count.value*2 , val => {
				console.log(`count*2 is ${val}`)
			})
		
			
			// 页面加载完成
			onMounted(() => {
				console.log('onMounted')
			})
			return {
				count,
				plusOne,
				increment
			}
		}
	 
  }
</script>
<style scoped>
	.header{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: blue;
	}
	
 
</style>
