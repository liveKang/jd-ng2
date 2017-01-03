/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
  <div class="px-layout">
  <div class="px-header clearfix">
      <div class="px-layout-span" ng-click="toIndex()">
          <img src="../assets/img/logo.png" />
      </div>
      <div class="px-layout-div1">
          <img src="../assets/img/default-pic-small.png" />
          <em>{{userInfo.realname}}</em>
          <button ng-click='logout()'>退出 <span class="icon-exit icon"></span></button>
      </div>
  </div>
  <div class="px-menu clearfix">
      <p>首页</p>
      <ul>
          <li class="px-childmenu"><span class="icon-order-management icon"></span>订单管理</li>
          <li>我的订单(开发中)</li>
          <!-- <li ng-click="toMyOrder()">我的订单</li> -->
          <li>子账号订单(开发中)</li>
          <!-- <li ng-click="toChildAccountOrder()">子账号订单</li> -->
      </ul>

      <ul>
          <li class="px-childmenu"><span class="icon-data-statistics icon"></span>数据统计</li>
          <li>发货统计(开发中)</li>
      </ul>

      <ul>
          <li class="px-childmenu"><span class="icon-child-account icon"></span>子账号管理</li>
          <li>子账号列表(开发中)</li>
          <li>新增子账号(开发中)</li>
      </ul>

      <ul>
          <li class="px-childmenu"><span class="icon-personal-center icon"></span>个人中心</li>
          <li>账号概览(开发中)</li>
          <li>基本资料(开发中)</li>
          <li>账户安全(开发中)</li>
          <li>地址管理(开发中)</li>
      </ul>
  </div>
  <div class="main-container" ui-view>

  </div>
</div>


    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>京东物流<a [href]="url">@飘香</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
