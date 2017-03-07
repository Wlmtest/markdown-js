- Wendnesday,February,8,2017
    1.  
        + problem: oms,网站所有表单验证输入时无检查功能
        + points: 登录,注册,询价部分,订单部分
        + require: 网站,oms所有表单验证数据进行验证优化（输入时候验证）
        + bug props: 
            + type: 交互体验，改进
            + level: h
        + deadline: 
    2. 
        + problem: 网站登录后页面，底部buttom消失
        + points: 登陆后的图纸室，询单室，订单室，材料室，设备室，后处理室
        + require: 登录后的页面添加buttom
        + bug props: 
            + type: 功能，错误
            + level: h
        + deadline: 
    3. 
        + problem: 图纸室数据和模型截图混乱
        + points: 图纸室中存在模型，封面截图和打开展示的模型不一样
        + require: 封面图纸和展示图纸显示一致
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline: 
    4. 
        + problem: 注册成功后，用户默认头像丢失
        + points: 网站右上角默认头像无显示，个人中心默认头像无显示
        + require: 显示默认头像
        + bug props:
            + type: 功能，错误
            + level: m
        + deadline:
    5. 
        + problem: 新用注册用户更新头像，无法更新
        + points: 点击左边头像，上传图片无法上传，控制台报错
        + require: 可以上传用户头像，进行头像更新
        + bug props:
            + type: 功能,错我
            + level: m
        + deadline: 
    6.         
        + problem: 新用户手机账号注册后，欲绑定邮箱，无法绑定
        + points: 点击头像旁边的立即绑定，输入正确邮箱，多次发送邮件，邮箱未收到消息
        + require: 绑定功能恢复
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    7.  
        + problem: 网站刷新的时候，左会弹出移动端的菜单栏，时而出现，时而没有，难以重现
        + points: 
        + require: 刷新页面，不要弹出菜单栏
        + bug props:
            + type: 功能，交互体验，错误，改进
            + level: l
        + deadline:
    8. 
        + problem: 首页图标显示有问题
        + points: 图标背景色向下偏移
        + require: 修复偏移，恢复图标正确位置
        + bug props:
            + type: 交互体验，改进
            + level: h
        + deadline: 
    9.  
        + problem: 用户增值税普通发票抬头编辑地区，删除发票抬头旁边的红星
        + bug props:
            + type: 交互体验，改进
            + level: l
        + deadline:
    10.  
        + problem: 用户通过短信密码重置，充值成功后跳转进入用户个人中心，然后退出，未退出到首页
        + points:
            + 1.退出后的url有问题
            + 2.退出后的页面不是首页
        + require: 推出后进入首页，url应该为首页(www.)roboocap.com
        + bug props:
            + type: 功能，交互体验，错误，改进
            + level: l
        + deadline:
    11. 
        + problem: 用户通过手机注册之后，再次使用该手机注册，在表单验证地区，输入已注册的手机号完毕后，未做检验，需要提交表单的时候才能验证
        + points: 输入已注册用户手机号，未提示手机号已注册
        + require: 
        + bug props:
            + type: 功能，交互体验，错误，改进
            + level: m
        + deadline:
    12. 
        + problem: 用户注册部分，协议点击取消之后，提示消息样式错误
        + points: 红色提示太靠上
        + require: 请（设计师和）开发修改正确。
        + bug props:
            + type: 交互体验，改进
            + level: l
        + deadline:
    13. 
        + problem: 第三方登录无法使用
        + points: 微信，qq，新浪微博
        + require: 实现该功能
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    14. 
        + problem: QQ企业邮箱注册后，收到的验证信息url超过信封尺寸
        + points: url超出邮件信封右侧
        + requrire: url应在邮件信封内部
        + bug props:
            + type: 交互体验，改进
            + level: l
        + deadline: 
    15. 
        + problem: 邮箱注册，从注册邮箱链接跳转，注册链接失效之后，提示文字不正确
        + points: 提示文字后面有俩括号}}
        + require: 去掉括号
        + bug props:
            + type: 交互体验，改进
            + level: l
        + deadline
    16.  
        + problem: 邮箱注册，失败
        + points: 
            + 1.未使用邮箱注册，注册后收到邮件，点击跳转，提示邮箱链接失效。
            + 2.重新发送，显示重新发送失败
        + require: 邮箱注册功能恢复
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    17.  
        + problem: 邮箱注册，链接失效后，如何重新发送验证邮件？
        + require: 在登陆，注册页面，给出重新发送邮件的入口
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    18. 
        + problem: 36. 浏览器极速模式无法创建bom单
        + require: 功能可用，目前该搓逼浏览器用户使用量很多（对，就是俺们的客户多是用这玩意儿的）
        + bug props:
            + type: 功能错误
            + level: h
        + deadline:
    19.  
        + problem: 询单室,切换询单状态的时候，有一张等待的图片，体验差
        + require: 
        + points:
        + bug props:
            + type: 
            + level: h
        + deadline:
    20.  
        + problem: oms用户增加修改密码权限
        + require: oms增加用户修改密码功能
        + bug props:
            + type: 功能
            + level: m
        + deadline:

- Thrusday,February,9,2017
    1.  
        + problem: oms 报价管理 询价单部分，新报价的询价单，报价方案无法保存编辑好的表面处理信息
        + points: 填写表面处理信息并保存，报价管理的表面处理信息为空
        + require: 报价方案可以保存编辑的表面处理信息
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    2. 
        + problem: oms 报价管理 询价单部分，新报价的询价单，图纸无法查看下载
        + points: 点击查看下载，停留在原页面上
        + require: 报价方案处的图纸可以查看和下载
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
- Friday,February,10,2017
    1.  
        + problem: oms 供应链生产供应商无法删除
        + points: 点击删除按钮无反应
        + require: 可以删除供应商
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    2. 
        + problem: 用户登录：未注册，未激活，密码错误的情况，提高提示信息准确度
        + points: 上述问题登录，提示信息均为一条，无法定位问题原因
        + require: 每个状态给出对应的提示
        + bug props:
            + type: 交互体验，改进
            + level: h
        + deadline:
    3. 
        + problem: oms 供应链生产供应商无法添加
        + points: 信息填写完毕后，保存，页面显示404
        + require: 实现供应链添加功能
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    4. 
        + problem: oms 新建询价单，加工工艺：精密铸造的图片丢失
        + points: 
        + require: 田间精密铸造的图片
        + bug props:
            + type: 交互体验，错误
            + level: l
        + deadline:
    5. 
        + problem: 
            + 1.创建询价单，创建bom成功后,复制url在新窗口重新打开,新建bom单消失
            + 2.步骤1创建好bom单之后，点击我的询价单回到询价室，再次点击创建询价单，1中创建的bom存在。
        + points: 1和2这两个行为不一致
        + require: 创建好的bom单，在未开始询价时，退出询价，再次编辑的时候应该显示出该bom单。
        + bug props:
            + type: 功能，交互体验，错误
            + level: h
        + deadline:
    6. 
        + problem: 创建询价单页面，新建多图纸bom单，创建完毕后，回到创建询价单页面，bom描述的图纸部分交互太差
        + points: 
        + require: 请设计师和杨根讨论一下如何修改
        + bug props:
            + type: 功能，交互体验，改进
            + level: m
        + deadline:
    7.  
        + problem: 材料室在加载和切换材料的的时候，交互体验差
        + points: 
        + require: 请设计师和杨根讨论一下如何修改，建议（1:加载过程中有加载等待的图片，2：动效的改进）
        + bug props:
            + type: 功能，交互体验，改进
            + level: m
        + deadline:
    8. 
        + problem: 图纸批量上传，存在上传失败的现象
        + points: 
        + require: 请设计师和杨根讨论一下如何修改，建议（1:加载过程中有加载等待的图片，2：动效的改进）
        + bug props:
            + type: 功能，交互体验，改进
            + level: m
        + deadline:
    9.  
        + problem: 邮箱绑定，绑定已绑定邮箱提示已绑定邮箱，下面的发送按钮需要等待1分钟之后才可点击，体验不好
        + points: 
        + require: 只有成功发送邮件的才需要等待1分钟
        + bug props:
            + type: 交互体验，改进
            + level: m
        + deadline:
- Monday,February,13,2017
    1.  
        + problem: 报价管理，后台材料选择颜色与前台展示颜色不合
        + points: oms 询价单部分 询价单设置报价材料，不选择颜色保存；其余信息填写完毕后发布报价结果，前端查看报价结果显示的颜色为红色。
        + require: 前后台显示的颜色应该一致，没有颜色的材料应该不显示材料颜色
        + bug props:
            + type: 功能，交互体验，错误
            + level: m
        + deadline:
    2. 
        + problem: 前端查看报价详情，图纸的url域名不正确
        + points: URL 域名指向为测试域名，http://3dsystem.oneooone.com/model/{model_id}/display
        + require: 请玉坤修改修改图纸展示的url主域名
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    3. 
        + problem: 询价单，完成报价的询价单，下单时添加发票，但是为填写抬头保存，可以创建询价单
        + points: 
        + require: 发票没有抬头不能创建订单
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    4. 
        + problem: 我们的用户管理是没有树状结构的，这个未来可能会有严重的问题，在合适的时候应当予以解决
        + points: 
        + require: 霍鼎的改进要求
        + bug props:
            + type: 功能
            + level: l
        + deadline:
    5. 
        + problem: 询价单，完成报价的询价单，报价方案已过有效期，应该不允许进入提交订单页面
        + points: 填写一个已经过期的报价方案，然后在前台页面会显示询价单的价格，但是并未显示各方案是否过期
        + require: 建议把报价过期的方案在前台显示出来，大部分人是无法根据提交订单的统一错误提示“Unprocessable Entity”知道问题原因
        +bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    6. 
        + problem: 询价单-查看详情-报价方案.显示的图标右边多了一条线
        + points: 
        + require: 去掉该线
        + bug props:
            + type: 交互体验，改进
            + level: l
        + deadline:
    7.  
        + problem: 询价单,创建订单，使用支付宝支付，订单完成后，页面跳转至首页
        + points: 不仅是返回首页，连右上角还显示着未登录的状态。
        + require: 返回对应的订单详情或者返回订单室
        + bug props:
            + type: 功能，错误
            + level: l
        + deadline:
    8. 
        + problem: 询价单,创建订单，使用支付宝支付，订单创建完成，个人中心和oms均为有对应的提交记录
        + points: 下单付款后，用户查看订单详情中，没有出现对应的订单信息，后台查看订单详情，没有对应的支付信息的订单
        + require: 支付之后，oms和前台应该给出相应的订单信息记录
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    9.  
        + problem: 询价单,创建订单，使用微信支付，点击支付时报错
        + points: 报错信息：支付失败：对支付渠道的请求未能成功。来自 wx_pub_qr 渠道的错误信息：签名错误
        + require: 请完善微信支付功能
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    10.  
        + problem: 询价单,创建订单，使用银联支付，点击支付时报错
        + points: 报错信息：交易失败。详情请咨询9. 516
        + require: 请完善银联支付功能
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    11. 
        + problem: 询价单,创建订单，使用微信支付，无法完成流程
        + points: 就弹出一个ok? 然后呢，然后呢！
        + require: 请完善前端微信支付功能
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    12. 
        + problem: 订单室，生产中订单，查看订单详情，点我联系，与申请客服链接不可用
        + points: 点击url未跳转
        + require: 完善对应url的跳转功能
        + bug props:
            + type: 功能，错误
            + level: h
        + deadline:
    13. 
        + problem: 生产中的订单，在用户界面无法查看订单的质检进度
        + points: 
        + require: 实现订单查看的时候，订单质检时，显示质检进度
        + bug props:
            + type: 功能，错误
            + level: m
        + deadline:
    14. 
        + problem: oms 编辑物流订单的时候，订单号编辑未做验证
        + points: 随便填写汉子“西巴”也可以保存
        + require: 希望对订单号输入的填写限制（最好能做订单号检查）
        + bug props:
            + type: 功能，错误
            + level: l
        + deadline:
    15. 
        + problem: 前台订单室内，打开控制台，存在报错信息
        + points: 这个url总报错：http://oi7w6. 1ib.bkt.clouddn.com/
        + require: 检查一下吧，把错误关掉
        + bug props:
            + type: 功能，错误
            + level: l
        + deadline:
    16. 
        + problem: 后台查看订单反馈，不应该允许鼠标选择评价等级和点击
        + points: 交互太差，如果谁手贱点了一下，然后截个图啥的。。。
        + require: starts应该不可以点击选择
        + bug props:
            + type: 交互体验，改进
            + level: l
        + deadline:
    17.  
        + problem:
            + 1.添加供应商的时候，入驻时间都是死的，是000-00-00：00：00：00
            + 2.客户列表，客户的上次登录时间有误 0000-00-00 00：00：00：00
        + points: 
        + require: 时间功能完善
        + bug props:
            + type: 交互体验，改进
            + level: l
        + deadline:
    18. 
        + problem: 企业认证材料上传也有问题，不知道是否已经上传成功，上传了之后看不到资料
        + points: 
        + require: 在【供应商】管理里面，请增加【上传供应商合同扫描件】的功能，方便以后的管理
        + bug props:
            + type: 交互体验，改进
            + level: h
        + deadline:
    19.  
        + problem: 未通过认证的供应商，可以进行生产任务分配
        + points: 
        + require:供应商未通过认证，不允许分配生产任务？
        + bug props:
            + type: 功能，错误
            + level: m
        + deadline:
    20.  
        + problem: 评价返现的功能按钮不可用
        + points: 
        + require:
        + bug props:
            + type: 功能，错误
            + level: m
        + deadline:
    21. 
        + problem: dev网站 bug无法上传图片数据
        + points: 网络服务错误
        + require: 
        + bug props:
            + type: 功能，错误
            + level: m
        + deadline:
    22. 
        + problem: 已完成订单，查看订单详情，信息丢失
        + points: 订单下单前，【联系电话】和【生产说明】已经填写，但是下单后，查看详情时，订单信息里却没有数据
        + require: 补全已下单的订单的详情信息
        + bug props:
            + type: 功能，错误
            + level: m
        + deadline:
    23. 
        + problem: 本地上传图纸没有置顶功能 上传后的图形在模型库最底部 
        + points: 
        + require: 上传后的模型应该显示在图纸室的最顶端
        + bug props:
            + type: 功能，错误
            + level: m
        + proposer:
    24. 
        + problem: 客户填写收货信息只是到区 没有下级地址
        + points: 
        + require: 填写收货地址的时候，添加“详细地址一栏”
        + bug props:
            + type: 功能，错误
            + level: h
        + proposer:
- Tuesday,February,14,2017
    1. 
        + problem: 客户管理登录时间有问题
        + points: 
        + require: 完善登录时间的显示。
        + bug props:
            + type: 功能，错误
            + level: m
        + proposer:
    2. 
        + problem: 在客户管理里面禁用了【获鼎】这以账户，再启用的时候发现无法登陆了
        + points:
        + require: 检查一下用户【启用】，【禁用】功能。
        + bug props:
            + type: 功能，错误
            + level: m
        + proposer:
    3. 
        + problem: 用户登录，短信验证码收取不到
        + points:
        + require: 
        + bug props:
            + type: 功能，错误
            + level: m
        + proposer:
    4.   
        + problem:增加一个功能，将【客户】指派给【用户】的功能
        + points:
        + require: 未来我们对于大客户的管理需要把客户划拨到销售的人头上面
        + bug props:
            + type: 功能，错误
            + level: m
        + proposer:
    5. 
        + problem:删除roboocap用户组，系统崩溃
        + points:
        + require: 
            1.如果客户组里面还有客户，应该不允许我做删除的动作
            2.如果允许，应该存在一个默认的、不可以删除的用户组
        + bug props:
            + type: 功能，错误
            + level: h
        + proposer:
    6. 
        + problem:用户体系中，【折扣】不应该出现
        + points:
        + require: 不能够这么简单粗暴地给客户算价格，后面应当有一个更加成熟的价格计算子系统
        + bug props:
            + type: 霍鼎的改进要求
            + level: m
        + proposer:
    7. 
        + problem: 客户管理，角色删除的改进意见
        + points: 【角色删除】的提示框为什么还要人去点一个确定？
        + require: 
        + bug props:
            + type: 霍鼎的改进要求
            + level: m
        + proposer:
    8.
        + problem: 订单填写价格数值为0.1，在前端显示不正确
        + points: 
        + require: 
        + bug props:
            + type: 霍鼎的改进要求
            + level: m
        + proposer:
    9.  
        + problem: oms，最佳方案应该默认使用用户自己的方案
        + points: 使用用户的方案，而不需要再次填写
        + require: 
        + bug props:
            + type: 杨根的改进需求
            + level: h
        + proposer:
    10. 
        + problem: oms，供应商的业务范围，添加小批量生产
        + points: 
        + require: 请大飞在设备管理的设备分类中，添加小批量制造 
        + bug props:
            + type: 
            + level: h
        + proposer:孟宪飞
        
- Wendnesday,15,2017
    1. 
        + problem: 1001号前端，默认截图的图纸变形严重
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: m
        + proposer:李霍鼎
    2.
        + problem: 添加零件的按钮太不明显了。
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: m
        + proposer:李霍鼎
    3.
        + problem: bom单希望能看到图纸的缩略图
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: m
        + proposer:李霍鼎
    4.
        + problem: 得到报价这里面我建议使用灰色，乍一看，还以为都完成了
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: m
        + proposer:李霍鼎
    5. 
        + problem: 底部间距不合理，这个地方看上去太挤了
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: m
        + proposer:李霍鼎
    6.  
        + problem: 手机格式等是否能够统一？
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: m
        + proposer:李霍鼎
    7.  
        + problem: 底部的链接全部是不对的
        + points: 
        + require: 
        + bug props:
            + type: 功能，错误
            + level: h
        + proposer:李霍鼎
    8. 
        + problem: 是否能够把中移物联的网络链接放上去？
        + points: 
        + require: 
        + bug props:
            + type: 功能
            + level: m
        + proposer:李霍鼎
    9.   
        + problem: 网站上的法律声明要仔细再改改，里面有很多错误，请@孙彪 @李嘉宇 协助
        + points: 
        + require: 
        + bug props:
            + type: 功能
            + level: h
        + proposer:李霍鼎
    10.  
        + problem: 
            1.关于我们的团队图片，里面的职级、排列需要重新根据公司的情况来进行调整
            2.图片的质量非常糟糕，我们应该是专门拍摄过照片的
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: h
        + proposer:李霍鼎
    11. 
        + problem: 
            1.建议我们只放400电话，统一电话服务的入口
            2.底部关于我们的鼠标指针的形状有问题
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: h
        + proposer:李霍鼎
    12. 
        + problem: 我们点击图纸进去之后，没有修改图纸名字、创建截图、下单等按钮，只有下载和删除
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: h
        + proposer:李霍鼎
    13. 
        + problem: 为啥这个STL仍然有这个背景？
        + points: 
        + require: 
        + bug props:
            + type: 功能，错误
            + level: h
        + proposer:李霍鼎
    14. 
        + problem:我这里有两个模型上传上去之后没有显示，也没有任何提示
        + points: 
        + require: 
        + bug props:
            + type: 改进
            + level: m
        + proposer:李霍鼎
    15. 
        + problem:昨天注册、登录的时候短信又收不到了 
        + points: 
        + require: 
        + bug props:
            + type: 功能
            + level: m
        + proposer:杨根

- Thrusday,February,16. 2017
    1.  
        + problem: 供应商添加编辑的时候，选择东莞市，但是无法选择对应的县区，导致无法保存供应商信息
        + points: 
        + require: 
        + bug props:
            + type: 功能
            + level: h
        + proposer:孟宪飞
    2.
        + problem: oms，供应商的业务范围，添加钣金制造
        + points: 
        + require: 请大飞在设备管理的设备分类中，添加小批量制造 
        + bug props:
            + type: 
            + level: h
        + proposer:孟宪飞

- Friday,February,17,2017
    1. 
        + problem: 1001号网站，用户资料设置中，页面错乱
        + points: 
        + require: 请修改之
        + bug props:
            + type: 交互体验，改进
            + level: h
        + proposer:吴黎明
    2.
        + problem: 询价单创建成功之后，能不能显示别的信息，直接显示询单号其实是懵逼的.
        + points: 
        + require: 请修改之
        + bug props:
            + type: 交互体验，改进
            + level: m
        + proposer:吴黎明
    3.
        + problem: oms后台询价单图纸数量为8张时，显示的图纸页面布局有问题
        + points: 
        + require: 
        + bug props:
            + type: 交互体验，改进
            + level: m
        + proposer:吴黎明
    4.
        + problem: 1001号，bom单图纸数量为8张时，bom单的图纸数量显示有问题
        + points: 
        + require: 
        + bug props:
            + type: 功能，错误
            + level: m
        + proposer:吴黎明
    5.
        + problem: 用户个人中心 ，点进去后页面显示有问题
        + points: 底部飞起来了
        + require: 把底部放回它该待的地方
        + bug props:
            + type: 功能，错误
            + level: m
        + proposer:吴黎明
- Saturday,February,18,2017
    1. 
        + problem: chrome提示我们的roboocap采用了不安全的协议来输送密码等数据，以后可能会是一个问题
        + points: 
        + require: 
        + bug props:
            + type: 功能
            + level: m
        + proposer:李霍鼎
    2. 
        + problem: 在供应商管理里面，也许入驻时间并不是那么重要，供应商评级和已经完成的订单总额、订单数量是最重要的
        + points: 
        + require: 在供应商管理页面增加：【供应商评级】，【已经完成的订单总额】，【订单数量】的数据显示
        + bug props:
            + type: 功能
            + level: m
        + proposer:李霍鼎
- Friday,February,24,2017
    1. 
        + problem: 零件名不需要强制填写
        + points: 
        + require: bom单零件名部分
        + bug props:
            + type: 改进
            + level: h
        + proposer:孟宪飞
    2.
        + problem: bom单材零件数量默认为1
        + points: 
        + require: bom单零件名部分
        + bug props:
            + type: 改进
            + level: h
        + proposer:孟宪飞
    3.
        + problem: bom单材料选择颜色白色加框，添加默认选择的颜色
        + points: 
        + require: bom单零件名部分
        + bug props:
            + type: 改进
            + level: h
        + proposer:李霍鼎
    4.
        + problem: bom单加工工艺，后处理选项的默认
        + points: 
        + require: bom单零件名部分
        + bug props:
            + type: 改进
            + level: h
        + proposer:李霍鼎
    5.
        + problem: bom单加工工艺，【需要装配】去掉
        + points: 
        + require: bom单零件名部分
        + bug props:
            + type: 改进
            + level: h
        + proposer:李霍鼎
    6. 
        + problem: bom单加工工艺，默认填写通知邮箱和联系方式
        + points: 
        + require: bom单零件名部分
        + bug props:
            + type: 改进
            + level: h
        + proposer:李霍鼎
    7. 
        + problem: bom单加，收货地址去掉
        + points: 
        + require: bom单零件名部分
        + bug props:
            + type: 功能 
            + level: h
        + proposer:孟宪飞
    8.
        + problem: bom单加，交货时间屏蔽掉
        + points: 
        + require: bom单零件名部分
        + bug props:
            + type: 功能
            + level: h
        + proposer:孟宪飞
- Monday,February,27,2017
    1. 
        + problem: 用户邮箱密码找回，测试环境邮箱无法收到邮件
        + points: 
        + require: 
        + bug props:
            + type: 功能
            + level: h
        + proposer:吴黎明