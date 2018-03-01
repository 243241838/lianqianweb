import axios from 'axios';
import md5 from 'md5';
import { Common } from 'js/Common.js';
import Cookies from '../Cookies/Cookies.js';
var productId = Common.getQueryString('id');
var md5Key = 'md5_key';
var headers = {
    height: 2392,
    width: 1440,
    osName: 'A',
    clientVersion: '1.0.0',
    clientType: 10,
    versionType: 2,
    deviceNo: 'FBE018F2-DBA7-4CB9-8DB2-2ED01D13046B',
    deviceName: 10,
    'Content-Type': 'application/json',
    sessionId: Cookies.getSessionId(), // '158d192242c05eeba754bfc368c6599b'
    domainId: '20' // 10:android;20:ios;30:h5
}
var url = '/lifeservice';
// var url = 'http://192.168.1.192:8080/hbx-api-server/api.do', // 服务器
var request = {
    // 获取验证码 3.4.1
    getVerifyCode: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                bizType: data.bizType, // 10：注册；11：登录 12：找回密码 13：发送短信验证码 14: 修改支付密码 15: 修改绑定手机
                codeType: data.codeType,
                mobile: data.mobile
            },
            method: 'getVerifyCode'
        }
        post(obj, fn, errFn);
    },
    //  4.9.4.校验支付密码(verifyPayPwd)
    verifyPayPwd: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                payPwd: data.payPwd
            },
            method: 'verifyPayPwd'
        }
        post(obj, fn, errFn);
    },
    //  4.1.5.4.1.5.用户手机验证码校验(verifyMobile)
    verifyMobile: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                smsCode: data.smsCode
            },
            method: 'verifyMobile'
        }
        post(obj, fn, errFn);
    },
    // 4.1.4.修改手机号码
    updateMobile: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                mobile: data.mobile,
                smsCodeNew: data.smsCodeNew
            },
            method: 'updateMobile'
        }
        post(obj, fn, errFn);
    },
    // 注册 3.1.2
    regUser: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userName: data.userName,
                loginPwd: data.loginPwd,
                smsCode: data.smsCode,
                referrerUserId: data.referrerUserId
            },
            method: 'regUser'
        }
        post(obj, fn, errFn);
    },
    // 登录 3.2.1
    login: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                loginType: data.loginType,
                userName: data.userName,
                loginPwd: data.loginPwd,
                smsCode: data.smsCode,
                referrerUserId: data.referrerUserId
            },
            method: 'login'
        }
        post(obj, fn, errFn);
    },
     // 4.1.7.重设登录密码(resetLoginPwd)
    resetLoginPwd: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userid: data.userId,
                newPwd: data.newPwd, // 现在登录密码
                resetType: data.resetType, // 1.未设置登录密码 2. 已有，密码 （必须要有验证码）
                smsCode: data.smsCode //  验证码
            },
            method: 'resetLoginPwd'
        }
        post(obj, fn, errFn);
    },
      // 4.1.3.修改登录密码(updateLoginPwd)
    updateLoginPwd: function (data, fn, errFn) {
        console.log(data)
        var obj = {
            url: url,
            input: {
                userid: data.userId,
                oldPwd: data.oldPwd, // 老密码
                newPwd: data.newPwd // 新密码
            },
            method: 'updateLoginPwd'
        }
        post(obj, fn, errFn);
    },
    // 个人中心 我的订单列表 4.8.1.1
    getTrades: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId, // 用户id
                tradeSts: data.tradeSts, // 订单状态
                pageIndex: data.pageIndex, // pageIndex
                pageSize: data.pageSize // pageSize
            },
            method: 'getTrades'
        }
        post(obj, fn, errFn);
    },
    // 个人中心 我的保单列表 4.8.2
    homePolicy: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId, // 用户id
                policySts: data.policySts, // 保单状态
                classType: data.classType, // 1:车险；2：个险
                pageIndex: data.pageIndex, // pageIndex
                pageSize: data.pageSize // pageSize
            },
            method: 'getPolicies'
        }
        post(obj, fn, errFn);
    },
    // 获取用户信息 4.1.1
    getUserInfo: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId
            },
            method: 'getUserInfo'
        }
        post(obj, fn, errFn);
    },
    // 4.1.2.修改用户信息(updateUserInfo)
    updateUserInfo: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                nickName: data.nickName, // 用户昵称
                gender: data.gender, // 性别
                email: data.email
            },
            method: 'updateUserInfo'
        }
        post(obj, fn, errFn);
    },
    // 4.5.1. 获取收货人信息(getConsignees)
    getConsignees: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                pageIndex: data.pageIndex,
                pageSize: data.pageSize
            },
            method: 'getConsignees'
        }
        post(obj, fn, errFn);
    },
    // 4.5.4.新增收货人(addConsignee)
    addConsignee: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                cneeName: data.cneeName, // 收获人
                mobile: data.mobile, // 联系方式
                areaCode: data.areaCode, // 邮政编码
                areaId: data.areaId, // 所在地区
                address: data.address, // 详细地址
                syncUser: data.syncUser, // 1：需要同步 0：不需要同步
                defaultFlag: data.defaultFlag // 1是默认地址，0不是默认
            },
            method: 'addConsignee'
        }
        post(obj, fn, errFn);
    },
    // 4.5.5 修改收货人信息(updateConsignee)
    updateConsignee: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                cneeId: data.cneeId,
                cneeName: data.cneeName, // 收获人
                mobile: data.mobile, // 联系方式
                areaCode: data.areaCode, // 邮政编码
                areaId: data.areaId, // 所在地区区号
                address: data.address, // 详细地址
                syncUser: data.syncUser, // 1：需要同步 0：不需要同步
                defaultFlag: data.defaultFlag ? '1' : '0' // 1是默认地址，0不是默认
            },
            method: 'updateConsignee'
        }
        post(obj, fn, errFn);
    },
    // 4.5.7 设置默认地址(defualtConsignee)
    defualtConsignee: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                cneeId: data.cneeId
            },
            method: 'defualtConsignee'
        }
        post(obj, fn, errFn);
    },
    // 4.5.6 删除收货人(delConsignee)
    delConsignee: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                cneeId: data.cneeId
            },
            method: 'delConsignee'
        }
        post(obj, fn, errFn);
    },
    // 4.9.1 设置支付密码(setPayPwd)
    setPayPwd: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                payPwd: data.payPwd,
                smsCode: data.smsCode
            },
            method: 'setPayPwd'
        }
        post(obj, fn, errFn);
    },
    // 4.9.2 修改支付密码(modPayPwd)
    modPayPwd: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                oldPayPwd: data.oldPayPwd,
                newPayPwd: data.newPayPwd
            },
            method: 'modPayPwd'
        }
        post(obj, fn, errFn);
    },
    // 4.9.3 忘记支付密码(forgetPayPwd)
    forgetPayPwd: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                payPwd: data.payPwd
            },
            method: 'forgetPayPwd'
        }
        post(obj, fn, errFn);
    },
    // 5.3.1 获取保险分类列表(getProductType)
    getProductType: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                parentId: data.parentId
            },
            method: 'getProductType'
        }
        post(obj, fn, errFn);
    },
    // 10.2.1 获取地区信息(getAreaList)
    getAreaList: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                parentId: data.parentId // 上级地区代码,默认为0
            },
            method: 'getAreaList'
        }
        post(obj, fn, errFn);
    },
    // 3.3.2 获取Banner信息
    getBannerInfo: function (fn, errFn) {
        var obj = {
            url: url,
            input: {},
            method: 'getBannerInfo'
        }
        post(obj, fn, errFn);
    },
    // 订单详情-个险 4.8.3
    orderDetailGe: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                classType: '2',
                tradeId: data.tradeId
            },
            method: 'getTradeDetail'
        }
        post(obj, fn, errFn);
    },
    // 订单详情-车险 4.8.3
    orderDetailChe: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: data.userId,
                classType: '1',
                tradeId: data.tradeId
            },
            method: 'getTradeDetail'
        }
        post(obj, fn, errFn);
    },
     // 6.1.1.获取职业分类信息(getOccupationType)
    getOccupationType: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'getOccupationType'
        }
        post(obj, fn, errFn);
    },
    // 提交订单 6.1.4
    applyTrade: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'applyTrade'
        }
        post(obj, fn, errFn);
    },
    // 获取订单支付信息 6.1.5
    getTradePayment: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'getTradePayment'
        }
        post(obj, fn, errFn);
    },
    // 获取支付签名信息 6.1.6
    // var url = 'http://192.168.32.95:8080/api/api.do';
    getPaySign: function (data, fn, errFn) {
        var obj = {
            url: 'http://192.168.32.68:8082/api/api.do',
            input: {
                tradeId: data.tradeId,
                paymentId: data.paymentId,
                userId: data.userId,
                acctBalanceJF: data.acctBalanceJF,
                acctBalanceYE: data.acctBalanceYE,
                couponCode: data.couponCode,
                couponList: data.couponList
            },
            method: 'getPaySign'
        }
        post(obj, fn, errFn);
    },
    // 车险(确认车险) 7.1.6.车险提交核保(commitCarIns)
    carOrderConfirm: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userId: '68',
                serialId: 'bbkjyvRxgXGGEmBDRxWwrXpK', // 报价流水号
                applicantName: '和开发', // 投保人姓名
                applicantIdNo: '500109198901011899', // 投保人证件号码
                applicantMobile: '18231081080', // 投保人手机
                insuredName: '和开发', // 被保险人姓名
                insuredIdNo: '500109198901011899', // 被保险人证件号码
                insuredMobile: '18231081080', // 被保险人手机号
                expressName: '和开发', // 收件人姓名
                expressMobile: '18231081080', // 收件人手机号码
                expressAddress: '重庆 重庆市 北碚区是凤飞飞', // 收件地址
                expressProvince: '3500000', // 快递省份代码
                expressCity: '3500000', // 快递城市代码
                expressDistrict: '3500000', // 快递区县代码
                totalAmount: 10000,
                totalPreium: 1000
            },
            method: 'commitCarIns'
        }
        post(obj, fn, errFn);
    },
    // 个险保单 4.8.3
    policyDetail: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'userId': data.userId,  // 用户id
                'detailId': data.detailId, // 明细记录编号
                'classType': data.classType // 1:车险；2：个险
            // 'tradeid': '20170227102108053360' // 订单编号 // 为空则保单详情否则为订单详情20170112194801003
            },
            method: 'getTradeDetail'
        }
        post(obj, fn, errFn);
    },
    // 车险保单 4.8.3
    policyDetail2: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'userId': data.userId,  // 用户id
                'detailId': data.detailId, // 明细记录编号
                'classType': data.classType  // 1:车险；2：个险
            // 'tradeid': '20170227102108053360' // 订单编号 // 为空则保单详情否则为订单详情20170112194801003
            },
            method: 'getTradeDetail'
        }
        post(obj, fn, errFn);
    },
    // 产品特色 5.3.4
    appAdultrisks: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'productId': data.productId // 产品id
            },
            method: 'getProductDetail'
        }
        post(obj, fn, errFn);
    },
    // 确认支付红包 6.1.4.2
    getUserCouponsList: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                userid: data.userId,  // 用户id
                sts: data.sts, // 红包状态 1未使用的
                couponType: data.couponType, // 红包
                pageIndex: data.pageIndex, // 页码
                pageSize: data.pageSize // 每页条数
            },
            method: 'getUserCouponsList'
        }
        post(obj, fn, errFn);
    },
    // 产品问答 5.3.10
    appAdultrisks1: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'productId': data.productId // 产品id
            },
            method: 'getProductQa'
        }
        post(obj, fn, errFn);
    },
    // 5.2.3 分页获取爆款产品列表 (getSpecialProductList)
    getSpecialProductList: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                pageIndex: data.pageIndex,
                pageSize: data.pageSize
            },
            method: 'getSpecialProductList'
        }
        post(obj, fn, errFn);
    },
    // 5.2.4 获取优选活动列表(getAdsList)
    getAdsList: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                pageIndex: data.pageIndex,
                pageSize: data.pageSize
            },
            method: 'getAdsList'
        }
        post(obj, fn, errFn);
    },
    // 5.2.1 获取专题列表(getSpecials)
    getSpecials: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                pageIndex: data.pageIndex,
                pageSize: data.pageSize
            },
            method: 'getSpecials'
        }
        post(obj, fn, errFn);
    },
    // 5.3.3 获取产品列表(getProducts)
    getProducts: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                pageIndex: data.pageIndex,
                pageSize: data.pageSize,
                benefitNum: data.benefitNum,
                key: data.key,
                specialId: data.specialId,
                productType: data.productType,
                tagId: data.tagId,
                getDefault: data.getDefault,
                defaultNum: data.defaultNum,
                sortCode: data.sortCode,
                insurerId: ''
            },
            method: 'getProducts'
        }
        post(obj, fn, errFn);
    },
    // 5.3.2 获取系统搜索热词(getHotKeys)
    getHotKeys: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                pageIndex: data.pageIndex,
                pageSize: data.pageSize
            },
            method: 'getHotKeys'
        }
        post(obj, fn, errFn);
    },
    // 案例分析 5.3.9
    appAdultrisks2: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'productId': data.productId // 产品id
            },
            method: 'getProductCase'
        }
        post(obj, fn, errFn);
    },
    // 理赔指南
    getProductGuide: function (fn, errFn) {
        var obj = {
            url: url,
            input: {
                'productId': productId // 产品id
            },
            method: 'getProductGuide'
        }
        post(obj, fn, errFn);
    },
    // 健康告知
    getProductPrompt: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'productId': data.productId // 产品id
            },
            method: 'getProductPrompt'
        }
        post(obj, fn, errFn);
    },
    // 投保须知
    getProductClause: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'productId': data.productId // 产品id
            },
            method: 'getProductClause'
        }
        post(obj, fn, errFn);
    },
    // 产品条款
    getProductTerms: function (fn, errFn) {
        var obj = {
            url: url,
            input: {
                'productId': productId // 产品id
            },
            method: 'getProductTerms'
        }
        post(obj, fn, errFn);
    },
    // 产品详情
    getProductDetail: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'productId': data.productId // 产品id
            },
            method: 'getProductDetail'
        }
        post(obj, fn, errFn);
    },
    // 5.1.1.获取保险公司列表(getInsurers)
    getInsurers: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: {
                'insurerId': data.insurerId, // 保险公司id
                'insurerType': data.insurerType
            },
            method: 'getInsurers'
        }
        post(obj, fn, errFn);
    },
    // 7.1.1 获取车险投保地区(getAvaCarAreas)
    getAvaCarAreas: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'getAvaCarAreas'
        }
        post(obj, fn, errFn);
    },
    // 查询车辆是否可以投保
    checkCarInsState: function (data, fn, errFn) {
        console.log(data)
        var obj = {
            url: url,
            input: data,
            method: 'checkCarInsState'
        }
        post(obj, fn, errFn);
    },
    // 补充车辆信息
    compCarProps: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'compCarProps'
        }
        post(obj, fn, errFn);
    },
    // 车辆保费计算
    getCarInsCalc: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'getCarInsCalc'
        }
        post(obj, fn, errFn);
    },
    // 车险提交核保
    commitCarIns: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'commitCarIns'
        }
        post(obj, fn, errFn);
    },
    // 车险投保状态查询
    queryCarOrderInsState: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'queryCarOrderInsState'
        }
        post(obj, fn, errFn);
    },
    // 车险支付请求
    reqCarInsPay: function (data, fn, errFn) {
        var obj = {
            url: url,
            input: data,
            method: 'reqCarInsPay'
        }
        post(obj, fn, errFn);
    }
}
// post请求
function post (obj, fn, errFn) {
    var str = JSON.stringify(obj.input) + md5Key;
    str = str.replace(/\\/g, '');
    var sign = md5(str);
    axios.post(obj.url, {
        input: obj.input,
        method: obj.method,
        sign: sign
    }, {headers})
    .then((response) => {
        if (typeof fn === 'function') {
            fn(response);
        }
    })
    .catch((error) => {
        if (typeof errFn === 'function') {
            errFn(error);
        }
    })
}
export default request;