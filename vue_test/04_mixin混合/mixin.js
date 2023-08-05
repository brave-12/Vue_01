// mixin 混合   就相当于多个vue复用配置  如果是该文件和vue文件都设置了mounted  则会一起输出
export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好');
        
    },
}
// 如果是添加data或者methods数据  则会与对应vue内的data进行整合 
// 如果data已经有对应的x属性   则还是按原生x属性输出  不会覆盖
export const hunhe = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}