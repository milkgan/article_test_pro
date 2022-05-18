export default {
  install (Vue) {   // 使用install的形式进行安装mixin
    Vue.mixin({
      data () {
        return {
          userRules: {
			  account: {
				  rules:[
					{ required: true, 'errorMessage': "账户名不能为空" },
					{ validateFunction: this.validateAccount } // 自定义校验规则
				  ]
			  },
			  password: {
				  rules:[
					{ required: true, 'errorMessage': "密码不能为空" },
				  ]
			  },
			  phone: {
				  rules:[
					{ required: true, 'errorMessage': "手机号码不能为空" },
					{ validateFunction: this.validatePhone } // 自定义校验规则
				  ]
			  },
			  code: {
				  rules:[
					{ required: true, 'errorMessage': "验证码不能为空" },
				  ]
				  
			  }
		  },
		  mobileReg: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,//手机号正则表达式
        }
      },
      methods: {
        validateAccount(rule, val, data, callback) {
			/* 
			rule : 当前校验字段在 rules 中所对应的校验规则
			value : 当前校验字段的值
			data : 所有校验字段的字段和值的对象
			callback : 校验完成时的回调，一般无需执行callback，返回true(校验通过)或者false(校验失败)即可 ，
			如果需要显示不同的 errMessage，如果校验不通过需要执行 callback('提示错误信息')，
			如果校验通过，执行callback()即可
			 */
			switch(true){
				case val.length < 6:
					callback('用户名长度不正确');
					break;
				default:
					return true;
			}
				

        },
		validatePhone(rule, val, data, callback) {
			switch(true){
				case !this.mobileReg.test(val):
					callback('手机号码格式不正确');
					break;
				default:
					return true;
			}
				
		}
      }
    })
  }
}