import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  order:{
    buy_amount:'',
    delivery_at:'',
    k_percent:'',
    n_percent:'',
    p_percent:'',
    pay_type:'',
    product_id:'',
    product_price: '',
    product_name: '',
    product_specification: '',
    product_specification_id: '',
    receiver_address_id:'',
    shop_id:'',
    shop_name:'',
    total_deal_price:''
  },
  waitOrderId:''
}

const mutations = {
  [types.PERSONAL_SHOP_INFO](state , data){
    state.detail.shop_id = data.shop_id
    state.detail.shop_name = data.shop_name
    state.detail.product_id = data.product_id
    state.detail.product_name = data.product_name
    state.detail.product_price = data.product_price
    state.detail.product_specification_id = data.product_specification_id
  },
  [types.PERSONAL_ORDER_GOODSINFO](state , data){
    state.k_percent = data.k_percent
    state.n_percent = data.n_percent
    state.p_percent = data.p_percent
    state.total_deal_price = data.total_deal_price
    state.buy_amount = data.buy_amount
  },
  [types.PERSONAL_ORDER_USERINFO](state , data){
     state.pay_type = data.pay_type
     state.delivery_at = data.delivery_at
     state.receiver_address_id = data.receiver_address_id
  },
  [types.PERSONAL_CLEAR](state){
    this.order.buy_amount  = ''
    this.order.delivery_at = ''
    this.order.k_percent = ''
    this.order.n_percent = ''
    this.order.p_percent = ''
    this.order.pay_type = ''
    this.order.product_id = ''
    this.order.product_price = ''
    this.order.product_name = ''
    this.order.product_specification = ''
    this.order.product_specification_id = ''
    this.order.receiver_address_id = ''
    this.order.shop_id = ''
    this.order.shop_name = ''
    this.order.total_deal_price = ''
    this.waitOrderId = ''
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}