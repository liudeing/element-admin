/**
 * Created by ldp on 2016/12/15.
 */
import createLogger from 'vuex/dist/logger'

export default process.env.NODE_ENV !== 'production' ? [createLogger()] : []
