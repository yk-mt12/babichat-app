# バビチャットアプリ

<details>
<summary>開発環境</summary>

## Client

### 環境
```
node -v => v16.14.2
yarn -v => 1.22.19
```
### 注意
**※babichat直下でインストールや実行はできない。**
yarn or yarn devなどする場合は、**/client**ディレクトリに移動する
```
# /clientディレクトリに移動
cd /client
```
### インストール
```
yarn
```
### 実行方法
```
yarn dev
```
### ビルド
```
yarn build
```
</details>
<details>
<summary>機能要件</summary>

### 機能要件
- ログイン機能
  - サインアップ
  - サインイン
  - サインアウト
- 掲示板機能
  - バビ語変換
  - いいね機能、リプライ機能
- ランキング機能
  - いいね数
  - 返信数
- 設定画面
  - バビ語と文章入れ替え機能の切り替え
- 個人チャット機能
</details>

<details>
<summary>技術スタック</summary>

### 技術スタック
#### インフラ
- Docker
#### データベース
Firebase
#### フロントエンド
- React.js, Typescript, Recoil
#### UI
Material UI
</details>

<details>
<summary>git操作</summary>

## git操作
**masterでは作業しない！！ブランチを変更しておく！！**
### 現在自分が作業しているブランチを確認する
```
git branch # masterの場合ブランチを変更する
```
### ブランチの変更
#### ブランチを新規に作成して移動する場合
```
git checkout -b 任意のブランチ名
```

#### ブランチがすでに存在しており、存在しているブランチに移動する場合
```
git checkout 任意のブランチ名
```
### 変更を追加する
```
git add ファイル名（変更を全ての場合は 'git add .'）
```
### 変更内容にコメントをつける
```
git commit -m '任意のコメント'
```
### 変更をpushする
```
git push
```
</details>

<details>
<summary>git-flow</summary>
[図とコマンドで分かる！ git-flowによる開発の流れと使い方](https://atmarkit.itmedia.co.jp/ait/articles/1401/06/news013.html)

## ブランチを作成
```bash
git flow feature start '任意のブランチ名'
```

## ブランチを終了（機能完成）
```bash
git flow feature finish '任意のブランチ名'
```

## ブランチの共有
```bash
git flow feature publish '任意のブランチ名'
```
</details>