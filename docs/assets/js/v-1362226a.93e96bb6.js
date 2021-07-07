(self.webpackChunkxzs_docs=self.webpackChunkxzs_docs||[]).push([[909],{5785:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-1362226a",path:"/guide/student.html",title:"1. 学生端",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"1.1 登录",slug:"_1-1-登录",children:[]},{level:3,title:"1.2 首页",slug:"_1-2-首页",children:[]},{level:3,title:"1.3 任务中心",slug:"_1-3-任务中心",children:[]},{level:3,title:"1.4 未读消息数量",slug:"_1-4-未读消息数量",children:[]},{level:3,title:"1.5 学科列表",slug:"_1-5-学科列表",children:[]},{level:3,title:"1.6 试卷列表",slug:"_1-6-试卷列表",children:[]},{level:3,title:"1.7 考试记录",slug:"_1-7-考试记录",children:[]},{level:3,title:"1.8 错题本",slug:"_1-8-错题本",children:[]},{level:3,title:"1.9 答题详情",slug:"_1-9-答题详情",children:[]},{level:3,title:"1.10 用户动态",slug:"_1-10-用户动态",children:[]},{level:3,title:"1.11 当前用户信息",slug:"_1-11-当前用户信息",children:[]},{level:3,title:"1.12 修改用户信息",slug:"_1-12-修改用户信息",children:[]},{level:3,title:"1.13 消息列表",slug:"_1-13-消息列表",children:[]},{level:3,title:"1.14 消息标记已读",slug:"_1-14-消息标记已读",children:[]},{level:3,title:"1.15 登出",slug:"_1-15-登出",children:[]}],filePathRelative:"guide/student.md",git:{updatedTime:1625477152e3,contributors:[{name:"mindskip",email:"mindskip@qq.com",commits:4}]}}},5156:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});const a=(0,e(6252).uE)('<h1 id="_1-学生端" tabindex="-1"><a class="header-anchor" href="#_1-学生端" aria-hidden="true">#</a> 1. 学生端</h1><h3 id="_1-1-登录" tabindex="-1"><a class="header-anchor" href="#_1-1-登录" aria-hidden="true">#</a> 1.1 登录</h3><ul><li>接口地址：/api/user/login</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;userName&quot;: &quot;student&quot;,  //用户名\n    &quot;password&quot;: &quot;&quot;,  //密码\n    &quot;remember&quot;: false  //下次自动登录\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n        &quot;userName&quot;: &quot;student&quot;,  //用户名\n        &quot;imagePath&quot;: &quot;&quot;,  //头像\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-2-首页" tabindex="-1"><a class="header-anchor" href="#_1-2-首页" aria-hidden="true">#</a> 1.2 首页</h3><ul><li>接口地址：/api/student/dashboard/index</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;fixedPaper&quot;: [  //固定试卷\n        {\n            &quot;id&quot;: 2399,  //试卷Id\n            &quot;name&quot;: &quot;test33333&quot;,  //试卷名称\n            &quot;limitStartTime&quot;: null,  //考试开始时间\n            &quot;limitEndTime&quot;: null     //考试结束时间\n        }\n    ],\n    &quot;timeLimitPaper&quot;: []    //时段试卷\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_1-3-任务中心" tabindex="-1"><a class="header-anchor" href="#_1-3-任务中心" aria-hidden="true">#</a> 1.3 任务中心</h3><ul><li>接口地址：/api/student/dashboard/task</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[\n        {\n            &quot;id&quot;: 9,  //任务id\n            &quot;title&quot;: &quot;2021-04-25作业&quot;,  //任务标题\n            &quot;paperItems&quot;: [\n                {\n                    &quot;examPaperId&quot;: 181,   //任务试卷id\n                    &quot;examPaperName&quot;: &quot;第一次出卷&quot;,  //任务试卷名称\n                    &quot;examPaperAnswerId&quot;: 579,  //答卷id\n                    &quot;status&quot;: 2  //答卷状态\n                }\n            ]\n        }\n    ]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_1-4-未读消息数量" tabindex="-1"><a class="header-anchor" href="#_1-4-未读消息数量" aria-hidden="true">#</a> 1.4 未读消息数量</h3><ul><li>接口地址：/api/student/user/message/unreadCount</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: 0  //未读消息数量\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_1-5-学科列表" tabindex="-1"><a class="header-anchor" href="#_1-5-学科列表" aria-hidden="true">#</a> 1.5 学科列表</h3><ul><li>接口地址：/api/student/education/subject/list</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: [\n        {\n            &quot;id&quot;: &quot;18&quot;,  //学科id\n            &quot;name&quot;: &quot;英语&quot;  //学科名称\n        }\n    ]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_1-6-试卷列表" tabindex="-1"><a class="header-anchor" href="#_1-6-试卷列表" aria-hidden="true">#</a> 1.6 试卷列表</h3><ul><li>接口地址：/api/student/exam/paper/pageList</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;paperType&quot;: 1, //试卷类型\n    &quot;subjectId&quot;: 158, //学科id\n    &quot;pageIndex&quot;: 1, //页数\n    &quot;pageSize&quot;: 10  //每页条数\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 1,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 2520,  //试卷id\n                &quot;name&quot;: &quot;生理卫生&quot;,  //试卷名称\n                &quot;questionCount&quot;: 1,  //题目数\n                &quot;score&quot;: 20,  //试卷分数\n                &quot;createTime&quot;: &quot;2021-05-31 13:34:49&quot;, //创建时间\n                &quot;createUser&quot;: 2,   //创建人\n                &quot;subjectId&quot;: 158,  //学科\n                &quot;subjectName&quot;: &quot;英语&quot;,  //学科\n                &quot;paperType&quot;: 1,   //试卷类型\n                &quot;frameTextContentId&quot;: 9016  //试卷内容\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_1-7-考试记录" tabindex="-1"><a class="header-anchor" href="#_1-7-考试记录" aria-hidden="true">#</a> 1.7 考试记录</h3><ul><li>接口地址：/api/student/exampaper/answer/pageList</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;pageIndex&quot;: 1, //页码\n    &quot;pageSize&quot;: 10  //每页条数\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 6204,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 6534,  //试卷id\n                &quot;createTime&quot;: &quot;2021-06-01 17:56:38&quot;,  //创建时间\n                &quot;userScore&quot;: &quot;0&quot;,  //考试分数\n                &quot;subjectName&quot;: &quot;数学&quot;,  //考试学科\n                &quot;subjectId&quot;: 129, //学科id\n                &quot;questionCount&quot;: 1,  //题目数量\n                &quot;questionCorrect&quot;: 0,  //题目正确数\n                &quot;paperScore&quot;: &quot;3&quot;,  //试卷总分\n                &quot;doTime&quot;: &quot;4 秒&quot;,  //耗时\n                &quot;paperType&quot;: 7,  //试卷类型\n                &quot;systemScore&quot;: &quot;0&quot;,  //系统批改得分\n                &quot;status&quot;: 2,   //试卷状态\n                &quot;paperName&quot;: &quot;智能训练试卷 - 1845&quot;,  //试卷名称\n                &quot;userName&quot;: null  //用户名\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="_1-8-错题本" tabindex="-1"><a class="header-anchor" href="#_1-8-错题本" aria-hidden="true">#</a> 1.8 错题本</h3><ul><li>接口地址：/api/student/question/answer/page</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;pageIndex&quot;: 1, //页码\n    &quot;pageSize&quot;: 10  //每页条数\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 17002,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 24928,   //题目id\n                &quot;questionType&quot;: 1,  //题型\n                &quot;createTime&quot;: &quot;2021-06-02 16:07:11&quot;,  //创建时间\n                &quot;subjectName&quot;: &quot;语文&quot;,  //学科\n                &quot;shortTitle&quot;: &quot;666&quot;  //题干\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_1-9-答题详情" tabindex="-1"><a class="header-anchor" href="#_1-9-答题详情" aria-hidden="true">#</a> 1.9 答题详情</h3><ul><li>接口地址：/api/student/question/answer/select/25067</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;pageIndex&quot;: 1, //页码\n    &quot;pageSize&quot;: 10  //每页条数\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;questionVM&quot;: {\n            &quot;id&quot;: 507,    //题目id\n            &quot;questionType&quot;: 1,   //题目类型\n            &quot;subjectId&quot;: 46,  //学科id\n            &quot;title&quot;: &quot;111&quot;,   //题干\n            &quot;gradeLevel&quot;: 12,    //年级\n            &quot;items&quot;: [        //选项\n                {\n                    &quot;prefix&quot;: &quot;A&quot;,  //选项\n                    &quot;content&quot;: &quot;A&quot;,  //选项内容\n                    &quot;score&quot;: null    //选项分数\n                }\n            ],\n            &quot;analyze&quot;: &quot;D&quot;,     //解析\n            &quot;correctArray&quot;: null,  //标答\n            &quot;correct&quot;: &quot;D&quot;,   //标答\n            &quot;score&quot;: &quot;2&quot;,  //分数\n            &quot;difficult&quot;: 3,  //难度\n            &quot;itemOrder&quot;: null  //排序\n        },\n        &quot;questionAnswerVM&quot;: {   //用户答案\n            &quot;id&quot;: 25067,  \n            &quot;questionId&quot;: 507,  //题目id\n            &quot;doRight&quot;: false,   //是否正确\n            &quot;content&quot;: &quot;A&quot;,   //用户答案\n            &quot;itemOrder&quot;: 2,   //排序\n            &quot;contentArray&quot;: null,   //用户答案\n            &quot;score&quot;: &quot;0&quot;,  //得分\n            &quot;questionScore&quot;: &quot;2&quot;  //题目分数\n        }\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="_1-10-用户动态" tabindex="-1"><a class="header-anchor" href="#_1-10-用户动态" aria-hidden="true">#</a> 1.10 用户动态</h3><ul><li>接口地址：/api/student/user/log</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: [\n        {\n            &quot;id&quot;: 1812,  \n            &quot;userId&quot;: 1,  //用户id\n            &quot;userName&quot;: &quot;student&quot;,  //用户名\n            &quot;realName&quot;: &quot;Test&quot;,  //用户真实姓名\n            &quot;content&quot;: &quot;student 登录了学多多考试系统&quot;,  //动态内容\n            &quot;createTime&quot;: &quot;2021-06-08 17:12:50&quot;  //创建时间\n        }\n    ]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_1-11-当前用户信息" tabindex="-1"><a class="header-anchor" href="#_1-11-当前用户信息" aria-hidden="true">#</a> 1.11 当前用户信息</h3><ul><li>接口地址：/api/student/user/current</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;id&quot;: 1,\n        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,\n        &quot;userName&quot;: &quot;student&quot;,  //用户名\n        &quot;realName&quot;: &quot;Test&quot;,  //真实姓名\n        &quot;age&quot;: 18,   //年龄\n        &quot;role&quot;: 1,   //角色\n        &quot;sex&quot;: 1,  //性别\n        &quot;birthDay&quot;: &quot;2019-09-01 00:00:00&quot;,  //生日\n        &quot;phone&quot;: &quot;158800882&quot;,  //手机号\n        &quot;lastActiveTime&quot;: &quot;&quot;,\n        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;,\n        &quot;modifyTime&quot;: &quot;2021-06-09 17:04:31&quot;,\n        &quot;status&quot;: 1,  //状态\n        &quot;userLevel&quot;: 1,   //年级\n        &quot;classes&quot;: &quot;1班&quot;,  //用户班级\n        &quot;imagePath&quot;: &quot;&quot;  //用户头像\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_1-12-修改用户信息" tabindex="-1"><a class="header-anchor" href="#_1-12-修改用户信息" aria-hidden="true">#</a> 1.12 修改用户信息</h3><ul><li>接口地址：/api/student/user/update</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;id&quot;: 1,\n    &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,\n    &quot;userName&quot;: &quot;student&quot;,  //用户名\n    &quot;realName&quot;: &quot;Test&quot;,  //真实姓名\n    &quot;age&quot;: 18,   //年龄\n    &quot;role&quot;: 1,   //角色\n    &quot;sex&quot;: 1,  //性别\n    &quot;birthDay&quot;: &quot;2019-09-01 00:00:00&quot;,  //生日\n    &quot;phone&quot;: &quot;158800882&quot;,  //手机号\n    &quot;lastActiveTime&quot;: &quot;&quot;,\n    &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;,\n    &quot;modifyTime&quot;: &quot;2021-06-09 17:04:31&quot;,\n    &quot;status&quot;: 1,  //状态\n    &quot;userLevel&quot;: 1,   //年级\n    &quot;classes&quot;: &quot;1班&quot;,  //用户班级\n    &quot;imagePath&quot;: &quot;&quot;  //用户头像\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_1-13-消息列表" tabindex="-1"><a class="header-anchor" href="#_1-13-消息列表" aria-hidden="true">#</a> 1.13 消息列表</h3><ul><li>接口地址：/api/student/user/message/page</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;pageIndex&quot;: 1, //页码\n    &quot;pageSize&quot;: 10  //每页条数\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 5,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 11,\n                &quot;title&quot;: &quot;rwerw&quot;,   //消息标题\n                &quot;messageId&quot;: 10,\n                &quot;content&quot;: &quot;sfsdf&quot;,  //消息内容\n                &quot;readed&quot;: true, //是否已读\n                &quot;createTime&quot;: &quot;2021-06-11 16:32:40&quot;,   //创建时间\n                &quot;sendUserName&quot;: &quot;admin&quot;  //发送人\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_1-14-消息标记已读" tabindex="-1"><a class="header-anchor" href="#_1-14-消息标记已读" aria-hidden="true">#</a> 1.14 消息标记已读</h3><ul><li>接口地址：/api/student/user/message/read/14</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_1-15-登出" tabindex="-1"><a class="header-anchor" href="#_1-15-登出" aria-hidden="true">#</a> 1.15 登出</h3><ul><li>接口地址：/api/user/logout</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',60),u={render:function(n,s){return a}}}}]);