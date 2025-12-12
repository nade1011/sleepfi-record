# SleepFi Record – Demo Site

チルミュージックを扱う音楽レーベル「SleepFi Record」を想定したデモサイトです。  
音楽ジャンルに合わせ、カラーリング・余白・情報量を抑えたミニマルなUI設計を意識して制作しました。

ポートフォリオ用途として、  
デザイン設計・UI構造・フロントエンド実装を一貫して担当しています。

---

## Demo

https://nade1011.github.io/sleepfi-record/

---

## 使用技術

- HTML5
- CSS3  
  - data属性ベースの設計
  - CSS Variables を用いた余白・レイアウト管理
  - レスポンシブ対応（PC / SP）
- JavaScript（Vanilla JS）
  - ナビゲーション制御
  - スクロール制御
  - オーディオプレイヤー制御

---

## 制作コンセプト

- チルミュージックのレーベルサイトを想定し、  
  主張しすぎないカラー設計と余白重視のレイアウトを採用
- 情報を詰め込みすぎず、  
  UIの分かりやすさ・操作のしやすさを優先
- シンプルかつミニマルな表現で、  
  音楽やビジュアルが自然に引き立つ構成を意識

---

## 実装・設計のポイント

### 1. data属性ベースのCSS設計
クラスの乱立を避け、  
レイアウト・余白・状態を data属性で役割分離しています。

```html
<nav id="sp-nav" data-frame="sp-nav" data-status="close"></nav>
```

```css

[data-status="open"] {
  transform: translateX(0%);
}
```

UIの状態をCSSとJavaScriptで明確に切り分けています。


### 2. SPドロワーメニューのUI制御
メニュー開閉を data-status / data-menu で管理

メニュー表示中は スクロールを無効化

閉じた際は 元のスクロール位置へ復帰

```js

openBtn.addEventListener('click', () => {
  scrollY = window.scrollY;
  spNav.dataset.status = "open";
  body.dataset.menu = "open";
  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
});

closeBtn.addEventListener('click', () => {
  spNav.dataset.status = "close";
  body.dataset.menu = "close";
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, scrollY);
});
```

モバイル操作時のストレスを抑えることを目的としています。


### 3. GOODSページ：音楽再生UI（Jukebox）
商品カードクリックで音源を再生

再生中のカードを視覚的に強調

再生／停止に応じたUIアニメーション

曲名を表示するテキストティッカーを実装

音楽体験をUIとして成立させることを意識した実装です。

### 4. レスポンシブ前提のレイアウト設計

PC / SPで情報構造を維持

SPでは縦積み・操作性重視

Jukeboxは position: sticky を用い、
コンテンツ閲覧中も操作しやすい構成にしています

## ディレクトリ構成
```
sleepfi-record/
├─ index.html
├─ about/
├─ artist/
├─ goods/
├─ assets/
│  ├─ css/
│  ├─ js/
│  ├─ images/
│  └─ audio/
```

## 制作目的
UI / UXを意識したフロントエンド設計力のアピール

HTML / CSS / JavaScriptによる状態管理の実装例

音楽・カルチャー系サイトを想定したWeb表現のポートフォリオ
