# バビチャットアプリ

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
### 機能要件
- ログイン機能
- 掲示板機能
  - バビ語変換
  - いいね機能、リプ数
- ランキング機能
- 設定画面
- 個人チャット機能

### 技術スタック
#### インフラ
- Docker
#### データベース
Firebase
#### サーバサイド
- Express, Typescript
#### フロントエンド
- Next.js, Typescript
#### UI
Material UI, Styeld-Components

## backend
comming soon...

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