/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-12 08:53:41
 */
import { h } from 'vue'

const DecorateCircle = (props: any, context: any) => {
  return h(`div`, context.attrs, context.slots)
}

DecorateCircle.props = ['']

export default DecorateCircle;