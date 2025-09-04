<template>
  <n-card>
    <template #action>
      <n-flex justify="center" class="box">
        <n-grid y-gap="8" cols="4">
          <n-gi>
            <n-button text tag="a" href="https://qm.qq.com/q/vWKPEQIt7U" target="_blank">
              <template #icon>
                <n-icon :component="Mail" />
              </template>
              问题讨论
            </n-button>
          </n-gi>
          <n-gi>
            <n-button text tag="a" href="https://github.com/cjxpj" target="_blank">
              <template #icon>
                <n-icon :component="LogoGithub" />
              </template>
              Github
            </n-button>
          </n-gi>
          <n-gi>
            <n-button text @click="PrivacyPolicy = true">
              <template #icon>
                <n-icon :component="AlertCircle" />
              </template>
              隐私政策
            </n-button>
            <n-modal v-model:show="PrivacyPolicy" preset="dialog" title="Dialog">
              <template #header>
                <div>隐私政策</div>
              </template>
              <n-text>
                一、信息收集
                <br>我们可能会收集您的以下信息以便为您提供更好的服务：

                <br><br>个人信息：这包括但不限于您的姓名、电子邮件地址、电话号码等您自愿提供的任何信息。
                <br><br>设备信息：我们可能会收集您的设备信息，如IP地址、设备型号、操作系统版本等，以优化我们的服务和确保数据安全性。
                <br><br>使用信息：我们可能会收集您如何使用我们服务的信息，例如您访问的页面、您搜索的内容、您点击的链接等，以便我们改进用户体验和服务质量。

                <br><br>二、账号所有权
                <br>我们明确声明，本平台上创建的所有用户账号及其相关内容（包括但不限于用户名、密码、个人信息、发布的内容等）的所有权均归属于我们（即本平台所有者或运营者）。用户在使用本平台时，被授权使用其个人账号并享有相关服务，但用户并不拥有账号的所有权。我们保留随时根据本隐私政策、服务条款或其他相关协议，对用户账号进行管理、限制、暂停或终止的权利。

                <br><br>三、数据使用与保护

                <br>我们承诺按照本隐私政策所述的方式收集、使用、存储和保护您的个人信息。我们将采取一切合理措施确保用户数据的安全性和隐私性，包括但不限于使用加密技术、访问控制等安全措施。

                <br>同时，我们不会将您的个人信息出售给任何第三方，除非我们得到了您的明确同意，或者是在法律法规允许的情况下，为了提供您所请求的服务或完成您所授权的交易而进行的必要共享。

                <br><br>四、用户权利<br>

                您有权访问、更正或删除我们持有的关于您的个人信息。如果您希望行使这些权利，或有任何关于隐私政策的疑问或投诉，请通过以下方式与我们联系：[问题讨论]。

                <br><br>五、遵守法律法规<br>

                我们将严格遵守所有适用的法律法规，包括数据保护法和隐私法。我们不会将您的个人信息用于任何非法或未经您同意的目的。

                <br><br>六、政策更新<br>

                我们可能会不时更新本隐私政策，以适应法律法规的变化或改进我们的服务。任何重大变更都会通过适当的方式通知您，例如在我们的网站上发布通知或向您发送电子邮件。

                <br><br>七、生效日期<br>

                本隐私政策自2024/05/31起生效。
              </n-text>
            </n-modal>
          </n-gi>
          <n-gi>
            <n-button text @click="Disclaimers = true">
              <template #icon>
                <n-icon :component="AlertCircle" />
              </template>
              免责声明
            </n-button>
            <n-modal v-model:show="Disclaimers" preset="dialog" title="Dialog">
              <template #header>
                <div>免责声明</div>
              </template>
              <n-text>
                为了保护我们的权益和明确责任，特此声明以下内容：

                <br><br>1. 知识产权<br>
                本网站的所有内容，包括但不限于文本、图片、音频、视频、软件、程序、以及页面设计等，均受版权、商标和其他知识产权法律的保护。未经本网站明确书面许可，任何个人或组织不得擅自复制、转载、引用或以其他方式使用本网站的内容。

                <br><br>2. 版权声明<br>
                本网站部分内容来源于互联网或其他公共渠道，我们尊重知识产权，并尽力注明出处。如果您认为本网站内容侵犯了您的权益，请立即与我们联系，我们将在收到通知后及时处理。

                <br><br>3. 链接和引用<br>
                本网站可能包含指向第三方网站的链接。这些链接仅为用户提供方便，不代表本网站对第三方网站内容的认可或负责。本网站对这些第三方网站的内容、隐私政策或其他实践不承担任何责任。

                <br><br>4. 责任限制<br>
                本网站不对因使用或无法使用本网站内容所导致的任何直接、间接、附带、特别、惩罚性或后果性的损害负责。使用本网站信息的风险由用户自行承担。

                <br><br>5. 用户行为<br>
                用户在使用本网站时不得侵犯他人的知识产权或其他合法权益。用户上传或发布的内容如有违反法律法规或侵权行为，由用户自行承担法律责任。

                <br><br>6. 隐私保护<br>
                我们尊重用户的隐私权，并将严格保护用户的个人信息。有关详细信息，请参阅我们的《隐私政策》。

                <br><br>7. 条款变更<br>
                本网站保留随时修改本免责声明的权利。修改后的免责声明一经公布即刻生效。用户应定期查看本页面，以了解任何变更。

                <br><br>如有任何疑问或需进一步信息，请通过[问题讨论]找到我并联系我，其余事情可在[问题讨论]自行讨论解决。
              </n-text>
            </n-modal>
          </n-gi>
        </n-grid>
      </n-flex>
      <hr />
      <n-flex justify="center" class="end">
        <a href="/">首页</a>
        <span>|</span>
        <a href="https://beian.miit.gov.cn" rel="nofollow" target="_blank">粤ICP备2023085984号-1</a>
      </n-flex>
    </template>
  </n-card>
</template>

<style scoped>
.box {
  /* 文本居中 */
  text-align: center;
}

/* 电脑端宽度 */
@media (min-width: 815px) {
  .box {
    /* 左右挤压居中 */
    margin-right: 10vh;
    margin-left: 10vh;
  }
}

.end a {
  color: #aaa !important;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import { Mail, LogoGithub, AlertCircle } from '@vicons/ionicons5';
import { NText, NModal, NFlex, NCard, NGi, NGrid, NIcon, NButton } from 'naive-ui';

// 隐私政策
const PrivacyPolicy = ref(false);

// 免责声明
const Disclaimers = ref(false);
</script>
